<template>
    <modal :show="show" :max-width="maxWidth" :closeable="closeable" @close="close">
        <div class="px-10 pt-5 pb-4">
            <h3 class="text-lg font-bold text-pink-500">
                <slot name="title">
                    {{ title }}
                </slot>
            </h3>
        </div>

        <div class="px-4 pb-4 bg-white sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <slot name="content">
                        <div>
                            <at-field
                                label="Search meal by name"
                            >
                                <at-input v-model="form.name"></at-input>
                            </at-field>
                            <meal
                                class="overflow-auto h-96"
                                :meals="meals"
                                :selected="selectedMeals"
                                @click="handleSelect"
                            />
                        </div>
                    </slot>
                </div>
            </div>
        </div>

        <div class="px-6 py-4 space-x-3 text-right bg-gray-100">
            <at-button type="secondary" @click="close"> Cancel </at-button>
            <at-button class="text-white bg-pink-400" @click="submit"> Save </at-button>
        </div>
    </modal>
</template>

<script>
    import Modal from '@/Jetstream/Modal'
    import { useForm } from "@inertiajs/inertia-vue3"
    import { AtField, AtInput, AtButton } from "atmosphere-ui"
    import { reactive, toRefs } from '@vue/reactivity'
    import Meal from './Meal.vue'

    export default {
        emits: ['close'],

        components: {
            Modal,
            AtField,
            AtInput,
            AtButton,
            Meal
        },

        props: {
            show: {
                default: false
            },
            maxWidth: {
                default: '2xl'
            },
            closeable: {
                default: true
            },
            meals: {
                type: Array,
                default() {
                    return []
                }
            },
            date: {
                default: new Date()
            },
            title: {
                type: String
            }
        },

        setup(props, { emit }) {
            const state = reactive({
                form: useForm({
                    name: ''
                }),
                selectedMeals: []
            })

            const close = () =>  {
                emit('close')
            }

            const handleSelect = (meal) => {
                const isSelected = state.selectedMeals.findIndex(selected => selected.id == meal.id)
                if (isSelected >= 0) {
                    state.selectedMeals.splice(isSelected, 1);
                } else {
                    state.selectedMeals.push(meal)
                }
            }

            const submit = () => {
                state.form
                .transform(()=> ({
                    date: props.date,
                    meals: state.selectedMeals.map(meal => ({
                        id: meal.id
                    })).filter(meal => meal.id )
                }))
                .post(route('meals.addPlan'), {
                    onSuccess: () => {
                        state.selectedMeals = [];
                        emit('close')
                    }
                })
            }

            return {
                ...toRefs(state),
                handleSelect,
                submit,
                close
            }
        }
    }
</script>