<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, Link, router } from '@inertiajs/vue3';
import Swal from 'sweetalert2';

const showAlert = (id) => {
  Swal.fire({
    title: 'Delete Icon',
    text: 'Do you wa  nt to delete this icon?',
    icon: 'info',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Confirm'
  }).then((result) => {
    if (result.isConfirmed) {
      router.delete('/products/'+id, {
        onSuccess: (page) => {
          Swal.fire('Confirmed!', 'You clicked Confirm!', 'success');
        },
        onError: (errors) => {
        }
      })
    }
  });
};


const props = defineProps(['products']);

const destroy = (id) => {
  console.log("id",id)
  showAlert(id)
  
}


</script>

<template>
    <Head title="Profile" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">Products</h2>
        </template>

        <div class="container w-3/4 p-5 mx-auto flex flex-col">
            <div class="w-full flex flex-row-reverse mb-3">
                <Link :href="route('products.create')">
                    <button type="button" class="px-3 py-2 text-sm bg-slate-400 rounded text-white flex flex-row items-center content-center gap-1"><i class="w-4 h-4" data-feather="plus"></i> Create a new product</button>
                </Link>
            </div>
            <div class="w-full h-full bg-white p-3 rounded-lg shadow">
                <table class="table-fixed w-full border-collapse rounded-md">
                    <thead>
                      <tr>
                        <th class="rounded-s-md bg-slate-100 text-slate-500 text-left p-3">Image</th>
                        <th class="bg-slate-100 text-slate-500 text-left p-3">Category</th>
                        <th class="bg-slate-100 text-slate-500 text-left p-3">Price</th>
                        <th class="rounded-e-md bg-slate-100 text-slate-500 text-left p-3">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="product in products">
                        <td class="px-3 py-5 border-b-8 border-white">
                          <div class="w-20 h-20">
                            <img :src="product.image" />
                          </div>
                        </td>
                        <td class="px-3 py-5 border-b-8 border-white">{{product.category.name}}</td>
                        <td class="px-3 py-5 border-b-8 border-white">{{product.price}}</td>
                        <td class="px-3 py-5 border-b-8 border-white">
                          <div class="flex flex-row gap-2">
                            <Link :href="route('products.edit', product.id)">
                              <i class="w-4 h-4" data-feather="edit-2"></i>
                            </Link>
                            <button @click="destroy(product.id)">
                              <i class="w-4 h-4" data-feather="trash"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
