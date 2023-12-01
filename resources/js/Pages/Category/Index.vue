<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, Link } from '@inertiajs/vue3';
import Swal from 'sweetalert2';

const showAlert = () => {
  Swal.fire({
    title: 'Custom Title',
    text: 'This is a custom message',
    icon: 'info',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Confirm'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire('Confirmed!', 'You clicked Confirm!', 'success');
    }
  });
};

const props = defineProps(['categories']);

</script>

<template>
    <Head title="Profile" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">Categories</h2>
        </template>

        <div class="container w-3/4 p-5 mx-auto flex flex-col">
            <div class="w-full flex flex-row-reverse mb-3">
                <Link :href="route('categories.create')">
                    <button type="button" class="px-3 py-2 text-sm bg-slate-400 rounded text-white flex flex-row items-center content-center gap-1"><i class="w-4 h-4" data-feather="plus"></i> Create a new category</button>
                </Link>
            </div>
            <div class="w-full h-full bg-white p-3 rounded-lg shadow">
                <table class="table-fixed w-full border-collapse rounded-md">
                    <thead>
                      <tr>
                        <th class="bg-slate-100 text-slate-500 text-left p-3">Name</th>
                        <th class="rounded-e-md bg-slate-100 text-slate-500 text-left p-3">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="category in categories">
                        <td class="px-3 py-5 border-b-8 border-white">{{category.name}}</td>
                        <td class="px-3 py-5 border-b-8 border-white flex flex-row gap-2">
                          <Link :href="route('categories.edit', category.id)">
                            <i class="w-4 h-4" data-feather="edit-2"></i> 
                          </Link>
                          <button @click="showAlert"> 
                            <i class="w-4 h-4" data-feather="trash"></i>
                          </button>

                        </td>
                      </tr>
                    </tbody>
                  </table>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
