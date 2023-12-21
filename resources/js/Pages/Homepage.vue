<script setup>
import { ref, onMounted } from 'vue';
import { Head, Link, usePage } from '@inertiajs/vue3';
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import WelcomeBanner from '@/Components/WelcomeBanner.vue';

const stringArrayImage = ref(['ych-static-01.png', 'ych-static-02.png', 'ych-static-03.png', 'ych-static-04.png', 'ych-static-05.png', 'ych-static-06.png', 'ych-static-07.png', 'ych-static-08.png', 'ych-static-09.png', 'ych-static-10.png']);
const stringArrayImageAnimated = ref(['animated-emote-01.png', 'animated-emote-02.png', 'animated-emote-03.png', 'animated-emote-04.png', 'animated-emote-05.png', 'animated-emote-06.png', 'animated-emote-07.png', 'animated-emote-08.png', 'animated-emote-09.png', 'animated-emote-10.png']);
const stringArrayImageDance = ref(['dance-01.png', 'dance-02.png', 'dance-03.png', 'dance-04.png', 'dance-05.png']);
const stringArrayImageLick = ref(['lick-01.png', 'lick-02.png', 'lick-03.png', 'lick-04.png', 'lick-05.png']);
const stringArrayImageRave = ref(['rave-01.png', 'rave-02.png', 'rave-03.png', 'rave-04.png', 'rave-05.png']);


const carouselDiscount = ref(null)


const prevDiscount = () => {
    console.log("tes prev")
    carouselDiscount.value.prev()
};
const nextDiscount = () => {
    console.log("tes next")
    carouselDiscount.value.next()
};

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

defineProps({
    user: {
        type: Object,  
    },
    canLogin: {
        type: Boolean,
    },
    canRegister: {
        type: Boolean,
    },
    laravelVersion: {
        type: String,
        required: true,
    },
    phpVersion: {
        type: String,
        required: true,
    },
});


</script>

<!--Start of Tawk.to Script-->
<script type="text/javascript">
        var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
        (function(){
        var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
        s1.async=true;
        s1.src='https://embed.tawk.to/654b4815f2439e1631ed02fe/1hen135fj';
        s1.charset='UTF-8';
        s1.setAttribute('crossorigin','*');
        s0.parentNode.insertBefore(s1,s0);
        })();
</script>
<!--End of Tawk.to Script-->

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
            <div class="flex items-center w-full bg-black h-20 text-white text-2xl text-center justify-center">
                <a href="#">
                    <div class="flex">
                        <span>sign up now</span>
                        <button class="ml-2 border-2 border-solid border-yellow-400 rounded-full px-3">50% off</button>
                    </div> 
                </a>
            </div>
            <WelcomeBanner :user="user"/>
            <div class="mt-24 flex flex-col justify-center w-3/4 container mx-auto relative">
                <carousel ref="carouselDiscount" :items-to-show="1" :wrap-around="true">
                  <slide v-for="slide in 10" :key="slide">
                    <img :src="`/images/discount.jpeg`" />
                  </slide>
                </carousel>
                <div class="flex absolute items-center justify-between w-full h-full">
                    <div class="relative">
                        <div class="absolute -left-5">
                            <button @click="prevDiscount" class="w-full h-full bg-slate-800 text-white rounded-full">
                                <i class="w-10 h-10" data-feather="chevron-left"></i>
                            </button>
                        </div>
                    </div>
                    <div class="relative">
                        <div class="absolute -left-5">
                            <button @click="nextDiscount" class="w-full h-full bg-slate-800 text-white rounded-full">
                                <i class="w-10 h-10" data-feather="chevron-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col justify-center w-3/4 container mx-auto mt-14 h-96">
                <h1 class="uppercase text-3xl mb-6">Popular YCH Comission</h1>
                <div class="flex justify-between">
                    <div class="flex flex-col text-center">
                        <Link :href="route('ych-comission')">
                            <div class="w-48 h-48 flex items-center content-center justify-center relative">
                                <div class="w-48 h-48 rounded-full bg-88-cream flex items-center justify-center content-center absolute z-0">
                                </div>
                                <div class="w-32 h-32 flex">
                                    <carousel class="h-full" :autoplay="3000" :wrap-around="true" :transition="1000" :items-to-show="1">
                                        <slide v-for="(item, index) in stringArrayImage" :key="index">
                                            <img class="" :src="`/images/comission/static-emote/${item}`" />
                                        </slide>
                                    </carousel>
                                </div>
                            </div>
                        </Link>
                        <span class="uppercase mt-3">Static emote</span>
                    </div>  
                    <div class="flex flex-col text-center">
                        <a href="#">
                            <div class="w-48 h-48 flex items-center content-center justify-center relative">
                                <div class="w-48 h-48 rounded-full bg-88-cream flex items-center justify-center content-center absolute z-0">
                                </div>
                                <div class="w-32 h-32 flex">
                                    <carousel class="h-full" :autoplay="3000" :wrap-around="true" :transition="1000" :items-to-show="1">
                                        <slide v-for="(item, index) in stringArrayImageAnimated" :key="index">
                                            <img class="" :src="`/images/comission/animated-emote/${item}`" />
                                        </slide>
                                    </carousel>
                                </div>
                            </div>
                        </a>
                        <span class="uppercase mt-3">animated emote</span>
                    </div>
                    <div class="flex flex-col text-center">
                        <a href="#">
                            <div class="w-48 h-48 flex items-center content-center justify-center relative">
                                <div class="w-48 h-48 rounded-full bg-88-cream flex items-center justify-center content-center absolute z-0">
                                </div>
                                <div class="w-32 h-32 flex">
                                    <carousel class="h-full" :autoplay="3000" :wrap-around="true" :transition="1000" :items-to-show="1">
                                        <slide v-for="(item, index) in stringArrayImageDance" :key="index">
                                            <img class="" :src="`/images/comission/dance-collection/${item}`" />
                                        </slide>
                                    </carousel>
                                </div>
                            </div>
                        </a>
                        <span class="uppercase mt-3">dance collection</span>
                    </div>
                    <div class="flex flex-col text-center">
                        <a href="#">
                            <div class="w-48 h-48 flex items-center content-center justify-center relative">
                                <div class="w-48 h-48 rounded-full bg-88-cream flex items-center justify-center content-center absolute z-0">
                                </div>
                                <div class="w-32 h-32 flex">
                                    <carousel class="h-full" :autoplay="3000" :wrap-around="true" :transition="1000" :items-to-show="1">
                                        <slide v-for="(item, index) in stringArrayImageLick" :key="index">
                                            <img class="" :src="`/images/comission/lick-collection/${item}`" />
                                        </slide>
                                    </carousel>
                                </div>
                            </div>
                        </a>
                        <span class="uppercase mt-3">lick collection</span>
                    </div>
                    <div class="flex flex-col text-center">
                        <a href="#">
                            <div class="w-48 h-48 flex items-center content-center justify-center relative">
                                <div class="w-48 h-48 rounded-full bg-88-cream flex items-center justify-center content-center absolute z-0">
                                </div>
                                <div class="w-32 h-32 flex">
                                    <carousel class="h-full" :autoplay="3000" :wrap-around="true" :transition="1000" :items-to-show="1">
                                        <slide v-for="(item, index) in stringArrayImageRave" :key="index">
                                            <img class="" :src="`/images/comission/rave/${item}`" />
                                        </slide>
                                    </carousel>
                                </div>
                            </div>
                        </a>
                        <span class="uppercase mt-3">rave collection</span>
                    </div>
                    <div class="flex flex-col text-center">
                        <a href="#">
                            <div class="w-48">
                                <img class="w-full" src="/images/comission/rave/rave-01.png" />
                            </div>
                        </a>
                        <span class="uppercase mt-3">Panel</span>
                    </div>
                </div>
            </div>
            <div class="flex flex-col justify-center w-3/4 container mx-auto mt-16  ">
                <h1 class="uppercase text-3xl mb-6">Ready to Adopt Vtuber</h1>
            </div>
            <div class="flex flex-col justify-center relative">
                <div class="grid divide-x-4 grid-cols-3 text-center h-[55rem]">
                    <div class="h-full w-full bg-88-orange bg-trans-vtuber relative bg-no-repeat bg-top bg-cover flex flex-col gap-3">
                        <div class="h-[80%] w-full mt-20 absolute z-20 flex flex-col">
                            <div class="h-full w-full relative">
                                <div class="mx-auto h-full w-3/5 rounded-t-full flex flex-col border-black border-x-4 border-t-4 px-3 pt-3">
                                    <div class="bg-black w-full h-full rounded-t-full">
                                        <div class="flex flex-col text-center text-white pt-10">
                                            <span>Nama</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="grow w-full absolute bottom-0">
                                    <img class="w-full object-scale-down" src='images/vtuber.png' />
                                </div>
                            </div>
                            <div class="border-black border-x-4 border-b-4 rounded-b-2xl p-3 mx-auto w-3/5">
                                <div class="bg-black text-white text-center rounded-full">
                                    <span class="uppercase text-2xl">Show Detail</span>
                                </div>
                            </div>
                        </div>
                        <div class="h-full w-full absolute top-0 z-10 bg-gradient-to-b from-transparent to-88-orange ...">
                        </div>
                    </div>
                    <div class="h-full w-full bg-88-orange bg-trans-vtuber relative bg-no-repeat bg-top bg-cover flex flex-col gap-3">
                        <div class="h-[80%] w-full mt-20 absolute z-20 flex flex-col">
                            <div class="h-full w-full relative">
                                <div class="mx-auto h-full w-3/5 rounded-t-full flex flex-col border-black border-x-4 border-t-4 px-3 pt-3">
                                    <div class="bg-black w-full h-full rounded-t-full">
                                        <div class="flex flex-col text-center text-white pt-10">
                                            <span>Nama</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="grow w-full absolute bottom-0">
                                    <img class="w-full object-scale-down" src='images/vtuber.png' />
                                </div>
                            </div>
                            <div class="border-black border-x-4 border-b-4 rounded-b-2xl p-3 mx-auto w-3/5">
                                <div class="bg-black text-white text-center rounded-full">
                                    <span class="uppercase text-2xl">Show Detail</span>
                                </div>
                            </div>
                        </div>
                        <div class="h-full w-full absolute top-0 z-10 bg-gradient-to-b from-transparent to-88-orange ...">
                        </div>
                    </div>
                    <div class="h-full w-full bg-88-orange bg-trans-vtuber relative bg-no-repeat bg-top bg-cover flex flex-col gap-3">
                        <div class="h-[80%] w-full mt-20 absolute z-20 flex flex-col">
                            <div class="h-full w-full relative">
                                <div class="mx-auto h-full w-3/5 rounded-t-full flex flex-col border-black border-x-4 border-t-4 px-3 pt-3">
                                    <div class="bg-black w-full h-full rounded-t-full">
                                        <div class="flex flex-col text-center text-white pt-10">
                                            <span>Nama</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="grow w-full absolute bottom-0">
                                    <img class="w-full object-scale-down" src='images/vtuber.png' />
                                </div>
                            </div>
                            <div class="border-black border-x-4 border-b-4 rounded-b-2xl p-3 mx-auto w-3/5">
                                <div class="bg-black text-white text-center rounded-full">
                                    <span class="uppercase text-2xl">Show Detail</span>
                                </div>
                            </div>
                        </div>
                        <div class="h-full w-full absolute top-0 z-10 bg-gradient-to-b from-transparent to-88-orange ...">
                        </div>
                    </div>
                </div>
                <div class="w-full absolute z-30 -bottom-24">
                    <img src='images/asset-03.png' />
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
