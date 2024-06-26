<script setup lang="ts">
import { reactive, toRefs, watch, computed, ref } from "vue";
import { AtButton, AtField, AtInput, AtErrorBag, AtButtonGroup, AtFieldCheck } from "atmosphere-ui";
import { useDatePager } from "vueuse-temporals";
import { NSelect, NDropdown, NDatePicker } from "naive-ui";
import { useForm } from "@inertiajs/vue3";
import { monthDays, WEEK_DAYS, FREQUENCY_TYPE, generateRandomColor, getDateFromIso } from "@/utils";
import { makeOptions } from "@/utils/naiveui";
import { format, parseISO } from "date-fns";
import LogerButtonTab from "@/Components/atoms/LogerButtonTab.vue";
import IconTarget from "@/Components/icons/IconTarget.vue";
import { budgetFrequencies, isSavingBalance, targetTypes } from "@/domains/budget";
import BudgetTargetCard from "./BudgetTargetCard.vue";
import { ICategory } from "@/domains/transactions/models";
import { BudgetTarget } from "../models/budget";
// import IconPicker from '../IconPicker.vue';

const props = defineProps<{
  parentId?: number;
  full?: boolean;
  category: ICategory;
  editable: boolean;
  item: BudgetTarget;
  compact?: boolean;
}>();

const emit = defineEmits(["cancel", "deleted"]);

const state = reactive({
  form: useForm({
    category_id: null,
    parent_id: null,
    color: generateRandomColor(),
    name: props.category.name,
    amount: 0,
    assigned: 0,
    target_type: "",
    frequency: "MONTHLY",
    frequency_month_date: null,
    frequency_week_day: null,
    frequency_date: null,
    frequency_interval: 0,
    frequency_interval_unit: 0,
    notify: false,
  }),
  isEditing: false,
  hasTarget: Boolean(props.item),
});

const frequencyUnit = computed(() => {
  const names = {
    MONTHLY: {
      field: "frequency_month_date",
      options: monthDays(),
    },
    WEEKLY: {
      field: "frequency_week_day",
      options: makeOptions(WEEK_DAYS),
    },
  };

  return {
    ...names[state.form.frequency],
  };
});

watch(
  () => props.category.id,
  () => {
    if (props.item) {
      state.form.reset();
      Object.keys(state.form.data()).forEach((key) => {
          // @ts-ignore
        const fieldValue = props.item[key];

        if (fieldValue?.match?.(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)) {
            // @ts-ignore
            state.form[key] = parseISO(fieldValue);
        } else if (typeof state.form[key] == 'boolean') {
            state.form[key] = Boolean(fieldValue);
        } else {
            // @ts-ignore
            state.form[key] = fieldValue || "";
        }
      });
      state.hasTarget = true;
      state.form.name = props.category.name
    } else {
      state.hasTarget = false;
      state.form.reset();
    }
  },
  { deep: true, immediate: true }
);

const onSubmit = () => {
  const methods = {
    update: {
      method: "put",
      url: props.item?.id && `/budgets/${props.category.id}/targets/${props.item.id}`,
    },
    save: {
      method: "post",
      url: `/budgets/${props.category.id}/targets`,
    },
  };
  const endpoint = methods[props.item?.id ? "update" : "save"];
  state.form
    .transform((data) => ({
      ...data,
      frequency_date: data.frequency_date && format(new Date(data.frequency_date), "yyyy-MM-dd"),
      parent_id: data.parent_id || state.parentId,
    }))
    [endpoint.method](endpoint.url, {
      preserveScroll: true,
      onSuccess() {
        state.isEditing = false;
        state.form.reset()
      },
    });
};



const onCancel = () => {
  state.isEditing = false;
  if (state.hasTarget) {
    emit("cancel");
  }
};

const formComplete = useForm({})
const markAsComplete = (item: BudgetTarget) => {
    formComplete.post(route('budget-target.complete', {
        category: props.category,
        budgetTarget: item
    }))
}

const { selectedSpan } = useDatePager({ nextMode: "month" });

const monthInstanceCount = computed(() => {
  return (
    state.form.frequency == FREQUENCY_TYPE.WEEKLY &&
    selectedSpan.value.filter((day) => {
      return (
        format(day, "iiiiii").toLowerCase() ==
        state.form?.frequency_week_day?.toLowerCase()
      );
    })
  );
});

const { form } = toRefs(state);

const options = [
  {
    name: "setAssigned",
    label: "Set Assigned",
  },
  {
    name: "setAvailable",
    label: "Set Available",
  },
  {
    name: "clear",
    label: "Clear",
  },
];

const setAmount = (amount: number) => {
  state.form.amount = amount;
};

const clear = () => {
  form.value.amount = 0;
};

const handleOptions = (option: string) => {
  switch (option) {
    case "setAssigned":
      setAmount(props.category.budgeted);
      break;
    case "setAvailable":
      setAmount(props.category.available);
      break;
    default:
      clear();
      break;
  }
};
</script>

<template>
  <section class="pb-4 text-left border-b rounded-md bg-base-lvl-3" v-auto-animate>
    <LogerButtonTab
      @click="state.isEditing = true"
      v-if="!state.isEditing && !state.hasTarget"
      class="flex items-center w-full px-2 py-2 rounded-md bg-body-1/5 text-body-1"
    >
      <span class="mr-2">
        <IconTarget />
      </span>
      Set target
    </LogerButtonTab>

    <div v-else-if="state.isEditing">
      <AtField label="Target Type">
        <NSelect
          filterable
          clearable
          size="large"
          v-model:value="form.target_type"
          :default-expand-all="true"
          :options="targetTypes"
        />
        <AtErrorBag v-if="errors" :errors="errors" field="account_id" />
      </AtField>

      <AtField label="Amount" errors="errors" field="amount">
        <AtInput :number-format="true" v-model="form.amount">
          <template #prefix>
            <span class="flex items-center pl-2"> RD$ </span>
          </template>
          <template #suffix>
            <NDropdown
              trigger="click"
              :options="options"
              key-field="name"
              :on-select="handleOptions"
            >
              <LogerButtonTab> <i class="fa fa-ellipsis-v"></i></LogerButtonTab>
            </NDropdown>
          </template>
        </AtInput>
      </AtField>

      <section v-if="form.target_type == 'spending'">
        <AtButtonGroup
          v-model="form.frequency"
          :options="budgetFrequencies"
          class="text-sm"
          selected-class="text-white bg-primary"
        />

        <AtField
          label="Every"
          v-if="['MONTHLY', 'WEEKLY'].includes(form.frequency)"
          :errors="errors"
          :field="frequencyUnit.field"
        >
          <NSelect
            filterable
            clearable
            size="large"
            v-model:value="form[frequencyUnit.field]"
            :default-expand-all="true"
            :options="frequencyUnit.options"
          />

          <div class="flex mt-2 space-x-2">
            <div
              v-for="instance in monthInstanceCount"
              class="w-full h-2 bg-primary"
              :key="instance"
            />
          </div>
        </AtField>
      </section>

      <AtField
            label="Date"
            class="w-full"
            v-if="isSavingBalance(form) || !['MONTHLY', 'WEEKLY'].includes(form.frequency)"
        >
        <NDatePicker
          type="date"
          size="large"
          v-model:value="form.frequency_date"
        />
      </AtField>

      <AtFieldCheck v-model="form.notify" label="Notify on AVG" />

      <div class="flex justify-between mt-4">
        <div class="flex font-bold">
          <at-button class="block h-full text-gray-500" @click="onCancel">
            Cancel
          </at-button>
        </div>
        <AtButton
          class="block h-full text-white rounded-md bg-primary"
          @click="onSubmit()"
        >
          Save
        </AtButton>
      </div>
    </div>

    <BudgetTargetCard
      :item="item"
      :category="category"
      :editable="editable"
      :is-processing="formComplete.processing"
      class="w-full"
      v-else-if="!compact"
      @edit="state.isEditing = true"
      @completed="markAsComplete(item)"
    />
  </section>
</template>

