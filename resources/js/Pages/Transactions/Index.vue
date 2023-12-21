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


const props = defineProps(['products', 'transactions']);

const destroy = (id) => {
  console.log("id",id)
  showAlert(id)
  
}


</script>

<template>
    <Head title="Profile" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">Transactions</h2>
        </template>

        <div class="container w-3/4 p-5 mx-auto flex flex-col">
            <div class="w-full h-full bg-white p-3 rounded-lg shadow">
                <table class="table-fixed w-full border-collapse rounded-md">
                    <thead>
                      <tr>
                        <th class="rounded-s-md bg-slate-100 text-slate-500 text-left p-3">Transaction Id</th>
                        <th class="bg-slate-100 text-slate-500 text-left p-3">Sub Total</th>
                        <th class="bg-slate-100 text-slate-500 text-left p-3">Discount</th>
                        <th class="bg-slate-100 text-slate-500 text-left p-3">Grand Total</th>
                        <th class="bg-slate-100 text-slate-500 text-left p-3">Status</th>
                        <th class="rounded-e-md bg-slate-100 text-slate-500 text-left p-3">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-if="transactions" v-for="transaction in transactions">
                        <td class="px-3 py-5 border-b-8 border-white">
                          #{{transaction.id}}
                        </td>
                        <td class="px-3 py-5 border-b-8 border-white">{{transaction.sub_total}}</td>
                        <td class="px-3 py-5 border-b-8 border-white">{{transaction.discount}}</td>
                        <td class="px-3 py-5 border-b-8 border-white">{{transaction.grand_total}}</td>
                        <td class="px-3 py-5 border-b-8 border-white">{{transaction.status}}</td>
                        <td class="px-3 py-5 border-b-8 border-white">
                          <div class="flex">
                            <!-- <Link :href="route('transactions.show', transaction.id)"> -->
                              <button class="btn btn-primary btn-sm">View</button>
                            <!-- </Link> -->
                          </div>
                        </td>
                      </tr>
                      <tr v-else>
                        <td class="px-3 py-5 border-b-8 border-white col-span-5 text-center">
                            There is no data
                        </td>
                      </tr>
                    </tbody>
                  </table>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
