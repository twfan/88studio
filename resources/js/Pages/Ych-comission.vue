<script setup>
import { ref, onMounted } from 'vue';
import { Head, Link, usePage } from '@inertiajs/vue3';
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import WelcomeBanner from '@/Components/WelcomeBanner.vue';


const props = defineProps(['products', 'user']);

const addToCart = (product) => {
    console.log(product);
}

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
        <div class="flex flex-col gap-3 text-center items-center divide-y-2 fixed pl-3 py-3 top-1/2 right-0 border-black border-2 rounded-r-none rounded-l-md bg-black text-white z-30">
            <div class="flex flex-col text-center">
                <span class="text-xl">6</span>
                <i class="w-10 h-10 text-white" data-feather="shopping-cart"></i>
            </div>
            <div class="flex flex-col text-center pt-3">
                <span class="text-md">Total Price</span>
                <span class="text-xl">$0.00</span>
            </div>
        </div>
        <div class="flex flex-col">
            <WelcomeBanner :user="user" />
            <div class="h-full w-full container mx-auto">
                <div class="flex flex-col items-center content-center my-10">
                    <h3 class="uppercase text-4xl mb-3">YCH Comission</h3>
                    <div class="flex flex-row divide-x-2 gap-3 text-center mb-10 mt-5 text-xl">
                        <div class="px-6 bg-88-orange rounded-full text-white">Static Emote</div>
                        <div class="px-6 ease-in  transition-all hover:bg-88-orange hover:text-white hover:rounded-full">Animated Emote</div>
                        <div class="pl-3">Animated Collection</div>
                        <div class="pl-3">PANEL</div>
                    </div>
                    <div class="grid grid-cols-10 gap-10">
                        <div v-for="product in products" class="flex flex-col">
                            <div class="w-24 h-24 mb-1">
                                <img :src="product.image" />
                            </div>
                            <div class="flex flex-row justify-between">
                                <i class="w-4 h-4 hover:fill-red-400 hover:border-red-400" data-feather="heart"></i>
                                <button @click="addToCart(product)">
                                    <i class="w-4 h-4" data-feather="shopping-cart"></i>
                                </button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>


            
            <div class="w-full flex flex-col bg-88-orange mt-28 py-10   ">
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
