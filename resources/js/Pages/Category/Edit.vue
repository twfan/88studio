<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, Link, router } from '@inertiajs/vue3';
import { ref, reactive, watchEffect } from 'vue';
import { useNotification } from "@kyvg/vue3-notification";

const { notify } = useNotification()

const props = defineProps(['category']);


const idCategory = ref(props.category.id)


const formCategory = reactive({
    name: props.category.name
})

const showNotification = (type) => {
    console.log("tess")
    if (type === 'error') {
        notify({
            title: 'Notification Title',
            text: 'This is a notification message.',
            duration: 5000, // Display duration in milliseconds
            type: 'error', // Can be 'success', 'error', 'info', 'warning'
        });
    } else if (type === 'success') {
        notify({
            title: 'Notification Title',
            text: 'This is a notification message.',
            duration: 5000, // Display duration in milliseconds
            type: 'success', // Can be 'success', 'error', 'info', 'warning'
        });
    }
};

const update = () => {
    // console.log("formCategory", formCategory)
    router.put('/categories/' + idCategory.value, formCategory, {
        onSuccess: (page) => {
            showNotification('success')
        },
        onError: (errors) => {
            showNotification('error')
        }
    })
}


</script>

<template>
    <Head title="Profile" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">Edit category</h2>
        </template>

        <div class="container w-3/4 p-5 mx-auto flex flex-col">
            <div class="w-full flex flex-row-reverse mb-3">
                <Link :href="route('categories')">
                    <button type="button" class="px-3 py-2 text-sm bg-slate-400 rounded text-white flex flex-row items-center content-center gap-1">Back</button>
                </Link>
            </div>
            <div class="w-full h-full bg-white py-10 rounded-lg shadow">
                <div class="container mx-auto">
                    <form @submit.prevent="update" class="flex flex-col items-center gap-3">
                        <div class="flex flex-col w-96">
                            <label class="text-sm text-slate-400">Name Category</label>
                            <input v-model="formCategory.name" placeholder="Name" type="text" class="text-sm border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md" />
                        </div>
                        <div class="flex flex-col w-96">
                            <button type="submit" class="bg-blue-400 text-white rounded py-3">
                                Update Category
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>

