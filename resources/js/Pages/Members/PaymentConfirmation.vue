<script setup>
import { ref, onMounted } from 'vue';
import { Head, Link, usePage, useForm } from '@inertiajs/vue3';
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import WelcomeBanner from '@/Components/WelcomeBanner.vue';
import CartIcon from '@/Components/CartIcon.vue';
import Menu from '@/Components/Menu.vue'
import MemberLayout from '@/Layouts/MemberLayout.vue';
import InputLabel from '@/Components/InputLabel.vue';
import TextInput from '@/Components/TextInput.vue';


const props = defineProps(['user', 'transaction']);

const form = useForm({
    id: props.transaction.id,
    paypal_email: null,
    image: null,
});


const handleFileChange = (event) => {
  // Update the selected file when the input changes
  form.image = event.target.files[0];
};


const confirmation = () => {
    console.log("form payment confirmation", form)
    form.post(route('member.submit-confirm-payment', form.id), {
        onFinish: () => console.log("tessssssssadsadsadadasdasdasdasdasd"),
    });
};

</script>

<template>
    <MemberLayout :user="user">
        <div class="mx-auto mt-10 flex flex-row w-3/4  ">
            <div class="flex flex-col w-full h-full justify-center content-center p-7">
                <h4 class="text-4xl font-bold text-white mb-7">Payment Confirmation</h4>
                <div class="flex flex-col w-full h-full justify-center content-center">
                    <div class="grid grid-cols-8 bg-white rounded p-7 mb-5">
                        <div class="flex flex-col">
                            <label class="text-gray-300 text-sm">Transaction ID</label>
                            <span>#{{ transaction.id }}</span>
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
                            <span v-else-if="transaction.status == 'payment_confirmation'" class="rounded text-gray-400">Payment Confirmation</span>
                        </div>
                        <div class="flex flex-col"> 
                            <label class="text-gray-300 text-sm">Invoice</label>
                            <span class="underline cursor-pointer">Download</span>    
                        </div>
                    </div>
                    <form @submit.prevent="confirmation" class="grid grid-cols-6">
                        <div class="bg-white rounded p-7 flex flex-col gap-3 col-span-2 ">
                            <div class="w-full">
                                <div class="flex flex-col">
                                    <label class="text-sm text-slate-400">Paypal Email</label>
                                    <TextInput
                                        id="paypal_email"
                                        type="email"
                                        class="mt-1 block w-full"
                                        v-model="form.paypal_email"
                                        required
                                    />
                                </div>
                            </div>
                            <div class="w-full mb-3">
                                <div class="flex flex-col">
                                    <div class="flex flex-col">
                                        <label class="text-sm text-slate-400">Image Product</label>
                                        <input @change="handleFileChange" type="file" class="text-sm border-gray-300 text-sm" />
                                    </div>
                                </div>
                            </div>
                            <div class="w-full">
                                <div class="flex flex-col">
                                    <div class="flex flex-col ">
                                        <button type="submit" class="bg-88-orange text-white rounded py-3">
                                            Request confirmation
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </MemberLayout>
</template>