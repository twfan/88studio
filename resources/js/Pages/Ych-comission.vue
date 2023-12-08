<script setup>
import { ref, onMounted } from 'vue';
import { Head, Link, usePage, useForm } from '@inertiajs/vue3';
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import WelcomeBanner from '@/Components/WelcomeBanner.vue';
import CartIcon from '@/Components/CartIcon.vue';


const props = defineProps(['products', 'user', 'cart', 'productAdded', 'cartTotal']);

const cartForm = useForm({
    product: null,
    user: null,
})

const isFilled = ref(false);
const activeTab = ref('static');

const changeTab = (tab) => {
    activeTab.value = tab;
    loadFeatherIcons();
};

const toggleFill = () => {
    console.log("clicked", isFilled.value)
  isFilled.value = !isFilled.value;
};

const addToCart = (product) => {
    console.log(product);
    cartForm.product = product
    cartForm.user = props.user
    cartForm.post('/member/cart', {
        preserveScroll: true,
        onSuccess: (page) => {
            console.log(page)
        },
        onError: (errors) => {
        }
    })
}

const addedProduct = (product_id) => {
    if (props.productAdded.includes(product_id)) {
        return true
    } else {
        return false
    }
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
                <span class="text-xl">{{cart}}</span>
                <i class="w-10 h-10 text-white" data-feather="shopping-cart"></i>
            </div>
            <div class="flex flex-col text-center pt-3">
                <span class="text-md">Total Price</span>
                <span class="text-xl mb-5">${{cartTotal}}</span>
                <Link :href="route('cart.index')">
                    <span class="text-md border-l border-y rounded-l border-white cursor-pointer px-3 py-1">Checkout</span>
                </Link>
            </div>
        </div>
        <div class="flex flex-col">
            <WelcomeBanner :user="user" />
            <div class="h-full w-full container mx-auto">
                <div class="flex flex-col items-center content-center my-10">
                    <!-- <h3 class="uppercase text-4xl mb-3">{{productAdded}}</h3> -->
                    <h3 class="uppercase text-4xl mb-3">YCH Comission</h3>
                    <div class="flex flex-row divide-x-2 gap-3 text-center mb-10 mt-5 text-xl">
                        <div :class="activeTab === 'static' ? 'px-6 bg-88-orange rounded-full text-white' : 'px-6 hover:bg-88-orange hover:text-white hover:rounded-full'" class="cursor-pointer px-6 ease-in  transition-all hover:bg-88-orange hover:text-white hover:rounded-full" @click="changeTab('static')">Static Emote</div>
                        <div :class="activeTab === 'animate' ? 'px-6 bg-88-orange rounded-full text-white' : 'px-6 hover:bg-88-orange hover:text-white hover:rounded-full'"  class="cursor-pointer px-6 ease-in  transition-all hover:bg-88-orange hover:text-white hover:rounded-full" @click="changeTab('animate')">Animated Emote</div>
                        <div class="pl-3">Animated Collection</div>
                        <div class="pl-3">PANEL</div>
                    </div>
                    <div v-if="activeTab === 'static'" class="grid grid-cols-10 gap-10">
                        <div v-for="product in products" class="flex flex-col">
                            <div class="w-24 h-24 mb-1">
                                <img :src="product.image" />
                            </div>
                            <div class="flex flex-row justify-between">
                                <i class="w-4 h-4 hover:fill-red-400 hover:border-red-400" data-feather="heart"></i>
                                <button type='button' @click="addToCart(product)">
                                    <i class="w-4 h-4"  :class="{ 'fill-black': addedProduct(product.id)}"  data-feather="shopping-cart"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div v-if="activeTab === 'animate'">
                        animate
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
