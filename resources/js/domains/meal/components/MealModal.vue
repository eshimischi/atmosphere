<template>
    <modal :show="show" :max-width="maxWidth" :closeable="closeable" @close="close">
        <div class="px-4 pt-5 pb-4 bg-base-lvl-1 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 class="text-lg">
                        <slot name="title">Add a new meal</slot>
                    </h3>

                    <div class="mt-2 text-left">
                        <slot name="content">
                            <div>
                                <at-field
                                    label="Title"
                                >
                                    <at-input v-model="form.name"/>
                                </at-field>
                                <at-field
                                    label="Description"
                                >
                                    <at-input v-model="form.description"/>
                                </at-field>

                            </div>
                        </slot>
                    </div>
                </div>
            </div>
        </div>

        <div class="px-6 py-4 space-x-3 text-right bg-base-lvl-1 flex justify-end">
            <AtButton type="secondary" rounded @click="close"> Cancel </AtButton>
            <AtButton class="text-white bg-primary" rounded @click="submit"> Save </AtButton>
        </div>
    </modal>
</template>

<script>
    import Modal from '@/Components/atoms/Modal.vue'
    import { useForm } from "@inertiajs/vue3"
    import { AtField, AtInput, AtButton } from "atmosphere-ui"
    import { reactive, toRefs } from '@vue/reactivity'

    export default {
        emits: ['close'],

        components: {
            Modal,
            AtField,
            AtInput,
            AtButton
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
        },
        setup(_props, { emit }) {
            const state = reactive({
                form: useForm({
                    name: ''
                })
            })

            const close = () =>  {
                emit('close')
            }

            const submit = () => {
                state.form.post(route('meals.store'))
            }

            return {
                ...toRefs(state),
                submit,
                close
            }
        }
    }
</script>
