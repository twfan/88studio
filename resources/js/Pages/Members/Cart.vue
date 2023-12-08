<script setup>
import { ref, onMounted } from 'vue';
import { Head, Link, usePage, useForm } from '@inertiajs/vue3';
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import WelcomeBanner from '@/Components/WelcomeBanner.vue';
import CartIcon from '@/Components/CartIcon.vue';


const props = defineProps(['user', 'cart', 'cartTotal']);


const loadFeatherIcons = () => {
    // Load JavaScript from CDN
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js';
    script.onload = () => {
        // Call feather.replace() when the script is loaded
        feather.replace();
    };
    document.body.appendChild(script);

    // Clean up the script tag when the component is unmounted
    return () => {
        document.body.removeChild(script);
    };
};

onMounted(loadFeatherIcons);

const form = useForm({});

const checkout = () => {
    console.log("tes")
    form.post(route('cart.checkout'), {
        onFinish: () => console.log("tessssssssadsadsadadasdasdasdasdasd"),
    });
};

</script>

<template>
    <Head>
        <title>EightyEight</title>
        <link rel="icon" type="image/x-icon" href="icon-01.png">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Lilita+One&display=swap" rel="stylesheet">
    </Head>
    <body>
        <div class="flex flex-col">
            <div class="flex flex-col relative items-center justify-center">
                <div class="flex w-3/4 items-center bg-white rounded-full px-7">
                    <div class="w-96">
                        <Link :href="route('homepage')">
                            <ApplicationLogo class="block h-16 w-full" />
                        </Link>
                    </div>
                    <div class="flex justify-between w-full">
                        <div class="flex divide-x-2">
                            <Link :href="route('ych-comission')">
                                <div class="mx-4 text-center justify-center flex items-center uppercase">
                                    <span>YCH Comission</span>
                                </div>
                            </Link>
                            <a href="#">
                                <div class="mx-4 text-center justify-center flex items-center uppercase">
                                    <span>Shop</span>
                                </div>
                            </a>
                            <a href="#">
                                <div class="mx-4 text-center justify-center flex items-center uppercase">
                                    <span>Ready to Adopt</span>
                                </div>
                            </a>
                            <a href="#">
                                <div class="mx-4 text-center justify-center flex items-center uppercase">
                                    <span>About us</span>
                                </div>
                            </a>
                        </div>
                        <Link v-if="user" :href="route('member.dashboard')">
                            <div class="bg-red flex flex-row gap-1 z-50 mx-4 text-center justify-center items-center uppercase">
                                <i data-feather="user"></i><span>{{user.name}}</span>
                            </div>
                        </Link>
                        <Link v-if="!user" :href="route('member.login')">
                            <div class="bg-red z-50 mx-4 text-center justify-center flex flex-row gap-1 items-center uppercase">
                                <i data-feather="user"></i><span>Login</span>
                            </div>
                        </Link>
                    </div>
                    
                </div>
                <div class="w-full h-screen bg-welcome bg-no-repeat bg-center bg-cover flex flex-col content-center">
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
                              <tr v-for="item in cart">
                                <td class="px-3 py-5 border-b-8 border-white">
                                  <div class="w-20 h-20 flex flex-row">
                                    <img :src="item.product.image" />
                                  </div>
                                </td>
                                <td class="px-3 py-5 border-b-8 border-white">${{item.product.price}}</td>
                                <td class="px-3 py-5 border-b-8 border-white">
                                  <div class="flex flex-row gap-2">
                                    <button @click="destroy(product.id)">
                                      <i class="w-4 h-4" data-feather="trash"></i>
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                        </table>
                        <div class="w-1/3 flex flex-col">
                            <div class="w-full h-1/2 flex flex-col justify-between mx-3 bg-slate-100 rounded">
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
                </div>
            </div>
            <div class="w-full flex flex-col bg-88-orange py-10">
                <div class="container mx-auto flex flex-row justify-between">
                    <div class="w-1/5 flex flex-col">
                        <ApplicationLogo />
                    </div>
                    <div class="flex flex-row">

                    </div>
                </div>
            </div>
        </div>
    </body>
</template>

<style>
.bg-dots-darker {
    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(0,0,0,0.07)'/%3E%3C/svg%3E");
}
@media (prefers-color-scheme: dark) {
    .dark\:bg-dots-lighter {
        background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E");
    }
}
</style>
