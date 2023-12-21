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
        <div class="mx-auto mt-10 flex flex-row w-3/4  bg-white rounded">
            <div class="flex flex-col w-full h-full justify-center content-center items-center">
                <div class="w-full border-b-2 p-7">
                    <span>Dashboard</span>
                </div>
                <div class="grid grid-cols-4 w-full">
                    <div class="col-span-1 flex flex-col text-start">
                        <div class="p-7">
                            <span>Profile</span>
                        </div>
                        <div class="p-7">
                            <span>Transactions</span>
                        </div>

                        <div class="p-7">
                            <Link :href="route('logout')" method="post" as="button">
                                Log Out
                            </Link>
                        </div>
                    </div>
                    <div class="col-span-3 p-7 flex flex-col  border-l-2">
                        <span>Contents</span>
                    </div>
                </div>
                <hr />
                <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
                    {{ status }}
                </div>
               
            </div>
        </div>
    </MemberLayout>
</template>