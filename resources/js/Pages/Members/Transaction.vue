<script setup>
import { ref, onMounted } from 'vue';
import { Head, Link, usePage, useForm } from '@inertiajs/vue3';
import 'vue3-carousel/dist/carousel.css';
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import WelcomeBanner from '@/Components/WelcomeBanner.vue';
import CartIcon from '@/Components/CartIcon.vue';
import Menu from '@/Components/Menu.vue'
import MemberLayout from '@/Layouts/MemberLayout.vue';
import Pagination from '@/Components/Pagination.vue';



const props = defineProps(['user', 'transactions']);

const form = useForm({});

const destroy = (id) => {
    console.log("tes", id)
    form.delete(route('cart.destroy', id), {
        onFinish: () => console.log("cart item deleted"),
    })
}

const checkout = () => {
    console.log("tes")
    form.post(route('cart.checkout'), {
        onFinish: () => console.log("tessssssssadsadsadadasdasdasdasdasd"),
    });
};

</script>

<template>
    <MemberLayout :user="user">
        <div class="mx-auto mt-10 flex flex-row w-3/4  ">
            <div class="flex flex-col w-full h-full justify-center content-center p-7">
                <h4 class="text-4xl font-bold text-white mb-7">Transactions</h4>
                <div class="flex flex-col gap-3 w-full h-full justify-center content-center">
                    <div v-for="transaction in transactions.data" class="grid grid-cols-9 bg-white rounded p-7">
                        <div class="flex flex-col">
                            <label class="text-gray-300 text-sm">Transaction ID</label>
                            <span>#{{transaction.id}}</span>
                        </div>
                        <div class="flex flex-col">
                            <label class="text-gray-300 text-sm">Subtotal</label>
                            <span>${{transaction.sub_total}}</span>
                        </div>
                        <div class="flex flex-col">
                            <label class="text-gray-300 text-sm">Discount</label>
                            <span>${{transaction.discount}}</span>
                        </div>
                        <div class="flex flex-col">
                            <label class="text-gray-300 text-sm">Grand Total</label>
                            <span>${{transaction.grand_total}}</span>
                        </div>  
                        <div class="flex flex-col col-span-2"> 
                            <label class="text-gray-300 text-sm">Status</label>
                            <span v-if="transaction.status == 'payment_pending'" class="rounded text-red-400">Pending Payment</span>    
                            <span v-else-if="transaction.status == 'payment_confirmation'" class="rounded text-gray-400">Waiting Confirmation</span>
                        </div>
                        <div class="flex flex-col"> 
                            <label class="text-gray-300 text-sm">Invoice</label>
                            <a :href="route('member.invoice', transaction.id)">
                                <span class="underline cursor-pointer">Download</span>
                            </a>
                        </div>
                        <div class="flex flex-col col-span-2 mt-3 items-end">
                            <div class="mt-1">
                                <Link v-if="transaction.status == 'payment_pending'" :href="route('member.payment-confirmation', transaction.id)">
                                    <span class="px-4 py-2 rounded border-2 text-green-500 rounded">Payment Confirmation</span>
                                </Link>
                                <span v-else class="px-4 py-2 rounded border-2 text-gray-400 rounded">Waiting Confirmation</span>
                            </div>
                        </div>
                    </div>
                    <Pagination :links="transactions.links"/>
                </div>
            </div>
        </div>
    </MemberLayout>
</template>