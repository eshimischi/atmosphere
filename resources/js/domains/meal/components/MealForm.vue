<script setup lang="ts">
    import { router, useForm } from "@inertiajs/vue3"
    import { AtField } from "atmosphere-ui"
    import { nextTick } from '@vue/runtime-core'
    import LogerInput from "@/Components/atoms/LogerInput.vue";
    import MealFormLine from "./MealFormLine.vue";

    defineEmits(['close']);
    const props = defineProps({
        meal: {
            type: Object,
            default: () => ({
                name: '',
            }),
        }
    });

    const form = useForm({
        ...{
            name: props.meal?.name,
        },
        ingredients: props.meal ? [...props.meal.ingredients, {}]: [{}]
    })

    const submit = async (redirectTo: string = "") => {
        const method = props.meal ? 'put' : 'post';
        const url = props.meal ? `/meals/${props.meal.id}` : '/meals';
        form
            .transform(data => ({
                ...data,
                ingredients: data.ingredients.filter( ingredient => ingredient.name)
        }))
        [method](url, {
            preserveScroll: true,
            preserveState: false,
            onSuccess: async () => {
                if (method == 'post') {
                    await nextTick()
                    form.reset()
                    if (redirectTo) {
                        router.visit(redirectTo)
                    }
                }
            }
        })
    }

    const checkIngredients = (index, value) => {
        if (form.ingredients.length == index + 1 && value) {
            form.ingredients.push({
                unit: 'unit',
                quantity: 1,
                product_id: "",
                name: ''
            })
        }
    }

    const removeIngredient = (index) => {
        form.ingredients.splice(index, 1);
        const len = form.ingredients.length - 1;
        nextTick(() => {
            checkIngredients(len, form.ingredients[len].name);
        })
    }

    defineExpose({
        submit,
    })
</script>

<template>
    <div class="text-body">
        <AtField
            label="Title"
        >
            <LogerInput v-model="form.name" rounded />
        </AtField>

        <AtField
            label="Ingredients"
        >
            <MealFormLine v-for="(ingredient, index) in form.ingredients"
                :key="`${ingredient.id}-${index}`"
                :meal="meal"
                :index="index"
                :ingredient="ingredient"
                @check="checkIngredients(index, $event)"
            />
        </AtField>
        <AtField
            label="Tags"
        >
            <LogerInput v-model="form.tags" rounded />
        </AtField>
        <AtField
            label="Link"
        >
            <LogerInput v-model="form.link" rounded />
        </AtField>
        <AtField
            label="Dish"
        >
            <LogerInput v-model="form.dish" rounded />
        </AtField>
        <AtField
            label="Time"
        >
            <LogerInput v-model="form.time" rounded />
        </AtField>
    </div>
</template>
