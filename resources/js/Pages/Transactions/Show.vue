<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, Link, router } from '@inertiajs/vue3';

const props = defineProps(['transaction','orders']);


</script>

<template>
    <Head title="Profile" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">Transaction Detail</h2>
        </template>

        <div class="container w-3/4 p-5 mx-auto flex flex-col gap-3">
            <div class="w-full h-full bg-white p-3 rounded-lg shadow">
                <div class="grid grid-cols-5">
                    <div class="flex flex-col">
                        <span class="text-sm text-gray-400">Transaction ID</span>
                        <span>#{{transaction.id}}</span>
                    </div>
                    <div class="flex flex-col">
                        <span class="text-sm text-gray-400">Subtotal</span>
                        <span>${{transaction.sub_total}}</span>
                    </div>
                    <div class="flex flex-col">
                        <span class="text-sm text-gray-400">Discount</span>
                        <span>${{transaction.discount}}</span>
                    </div>
                    <div class="flex flex-col">
                        <span class="text-sm text-gray-400">Grand Total</span>
                        <span>${{transaction.grand_total}}</span>
                    </div>
                    <div class="flex flex-col">
                        <span class="text-sm text-gray-400">Status</span>
                        <span>{{transaction.status}}</span>
                    </div>
                </div>
            </div>
            <div class="w-full h-full bg-white p-3 rounded-lg shadow flex flex-col gap-5">
                <div class="flex flex-col">
                    <span class="text-gray-400">Order Quantity</span>
                    <div class="grid grid-cols-10 mt-1">
                        {{orders.length}}
                    </div>
                </div>
                <div class="flex flex-col">
                    <span class="text-gray-400">List Orders</span>
                    <div class="grid grid-cols-10 mt-1">
                        <div v-for="order in orders" class="flex flex-col">
                            <span class="text-sm text-gray-400">{{order.product.category.name}}</span>
                            <div class="w-24 h-24 mb-1">
                                <img :src="order.product.image" />
                            </div>
                            <!-- <span>#{{order['product'].image}}</span> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
