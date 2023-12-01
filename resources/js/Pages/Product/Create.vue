<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, Link, router } from '@inertiajs/vue3';
import { ref, reactive } from 'vue';


const props = defineProps(['categories']);

const formProduct = reactive({
    name: '',
    image: null,
    transparentBg: null,
    category: 1,
    price:0,
    youtube:''
})

const handleFileChange = (event) => {
  // Update the selected file when the input changes
  formProduct.image = event.target.files[0];
};

const handleFileChangedTransparent = (event) => {
  // Update the selected file when the input changes
  formProduct.transparentBg = event.target.files[0];
};

const create = () => {
    console.log("formProduct", formProduct)
    router.post('/products', formProduct, {
        onSuccess: (page) => {
        },
        onError: (errors) => {
        }
    })
}


</script>

<template>
    <Head title="Profile" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">Create a new product</h2>
        </template>

        <div class="container w-3/4 p-5 mx-auto flex flex-col">
            <div class="w-full flex flex-row-reverse mb-3">
                <Link :href="route('products')">
                    <button type="button" class="px-3 py-2 text-sm bg-slate-400 rounded text-white flex flex-row items-center content-center gap-1">Back</button>
                </Link>
            </div>
            <div class="w-full h-full bg-white py-10 rounded-lg shadow">
                <div class="container mx-auto">
                    <form @submit.prevent="create" class="flex flex-col items-center gap-3">
                        <!-- <div class="flex flex-col w-96">
                            <label class="text-sm text-slate-400">Name Product</label>
                            <input v-model="formProduct.name" placeholder="Name" type="text" class="text-sm border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md" />
                        </div> -->
                        <div class="flex flex-col w-96">
                            <label for="countries" class="text-sm text-slate-400">Category Product</label>
                            <select v-model="formProduct.category" id="categories" class="text-sm rounded block w-full p-2.5 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md">
                                <option value="1" class="capitalize" selected disabled>Select category</option>
                                <option v-for="category in categories" :key="category.value" :value="category" class="text-sm capitalize">{{ category.name }}</option>
                            </select>
                        </div>
                        <div class="flex flex-col w-96">
                            <label class="text-sm text-slate-400">Image Product</label>
                            <input @change="handleFileChange" type="file" multiple="multiple" class="text-sm border-gray-300 text-sm" />
                        </div>
                        <div v-if="formProduct.category.value === 'adopt-vtuber'" class="flex flex-col w-96">
                            <label class="text-sm text-slate-400">Transparent Background Image Product</label>
                            <input @change="handleFileChangedTransparent" type="file" multiple="multiple" class="text-sm border-gray-300 text-sm" />
                        </div>
                        <div v-if="formProduct.category.value === 'adopt-vtuber'" class="flex flex-col w-96">
                            <label class="text-sm text-slate-400">Youtube Link</label>
                            <input v-model="formProduct.youtube" placeholder="Youtube Link" class="text-sm border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md  " />
                        </div>
                        <div class="flex flex-col w-96">
                            <label class="text-sm text-slate-400">Price Product</label>
                            <input v-model="formProduct.price" placeholder="Price product" type="number" min="0" class="text-sm border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md" />
                        </div>
                        <div class="flex flex-col w-96">
                            <button type="submit" class="bg-blue-400 text-white rounded py-3">
                                Create Product
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
