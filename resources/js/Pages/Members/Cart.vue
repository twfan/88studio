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


const props = defineProps(['user', 'cart', 'cartTotal']);

const form = useForm({});

const destroy = (id) => {
    form.delete(route('cart.destroy', id), {
        onFinish: () => console.log("cart item deleted"),
    })
}

const checkout = () => {
    form.post(route('cart.checkout'), {
        onFinish: () => console.log("tessssssssadsadsadadasdasdasdasdasd"),
    });
};

</script>

<template>
    <MemberLayout :user="user">
        <div class="mx-auto mt-10 flex flex-row w-3/4  bg-white rounded p-7">
            <table class="table-fixed w-2/3 border-collapse rounded-md">
                <thead>
                  <tr>
                    <th class="rounded-s-md bg-slate-100 text-slate-500 text-left p-3">Item Detail</th>
                    <th class="bg-slate-100 text-slate-500 text-left p-3">Price</th>
                    <th class="rounded-e-md bg-slate-100 text-slate-500 text-left p-3">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-if="props.cart.length !== 0" v-for="item in cart">
                    <td class="px-3 py-5 border-b-8 border-white">
                      <div class="w-20 h-20 flex flex-row">
                        <img :src="item.product.image" />
                      </div>
                    </td>
                    <td class="px-3 py-5 border-b-8 border-white">${{item.product.price}}</td>
                    <td class="px-3 py-5 border-b-8 border-white">
                      <div class="flex flex-row gap-2">
                        <button @click="destroy(item.id)">
                          <i class="w-4 h-4" data-feather="trash"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr v-else>
                    <td colspan="3" class="text-center text-sm text-slate-300">
                        There is no item in your cart
                        <br />
                        <Link :href="route('ych-comission')" class="text-sm underline   "> Choose items </Link>
                    </td>
                  </tr>
                </tbody>
            </table>
            <div class="w-1/3 flex flex-col">
                <div class="w-full flex flex-col justify-between mx-3 bg-slate-100 rounded">
                    <div class="flex flex-col">
                        <div class="p-5">
                            <span>Order Summary</span>
                        </div>
                        <hr /> 
                        <div class="flex flex-col mt-3">
                            <div class="flex flex-row px-5 py-3">
                                <span>Subtotal</span>
                                <span class="ml-auto">${{cartTotal}}</span>
                            </div>
                            <div class="flex flex-col px-5 py-3">
                                <span>Coupon Code</span>
                                <input type="text" class="w-3/4 rounded text-sm border border-gray-200" placeholder="Enter coupon code" />
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <hr/>
                        <div class="flex flex-row p-5">
                            <div>Grand Total</div>
                            <div class="ml-auto">${{cartTotal}}</div>
                        </div>
                    </div>
                </div>
                <button @click="checkout" class="mx-3 py-3 mt-3 w-full rounded bg-88-orange text-white uppercase">
                    Checkout
                </button>
            </div>
        </div>
    </MemberLayout>
</template>