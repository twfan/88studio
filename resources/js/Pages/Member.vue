<script setup>
import Checkbox from '@/Components/Checkbox.vue';
import GuestLayout from '@/Layouts/GuestLayout.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { ref, onMounted } from 'vue';
import { Head, Link, usePage, useForm } from '@inertiajs/vue3';
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import ApplicationLogo from '@/Components/ApplicationLogo.vue';



const form = useForm({
    email: '',
    password: '',
    remember: false,
});

const submit = () => {
    form.post(route('login'), {
        onFinish: () => form.reset('password'),
    });
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

<template>
    <Head>
        <title>EightyEight</title>
        <link rel="icon" type="image/x-icon" href="icon-01.png">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Lilita+One&display=swap" rel="stylesheet">
    </Head>
    <body>
        <div class="bg-88-orange w-screen h-screen bg-welcome bg-no-repeat bg-center bg-cover">
            <div class="flex flex-col h-full justify-center content-center items-center">
                <div class="w-96 ">
                    <ApplicationLogo />
                </div>
                <Head title="Log in" />
                <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
                    {{ status }}
                </div>
    
                <form @submit.prevent="submit">
                    <div>
                        <InputLabel for="email" value="Email" />
                        <TextInput
                            id="email"
                            type="email"
                            class="mt-1 block w-full"
                            v-model="form.email"
                            required
                            autofocus
                            autocomplete="username"
                        />
    
                        <InputError class="mt-2" :message="form.errors.email" />
                    </div>
    
                    <div class="mt-4">
                        <InputLabel for="password" value="Password" />
    
                        <TextInput
                            id="password"
                            type="password"
                            class="mt-1 block w-full"
                            v-model="form.password"
                            required
                            autocomplete="current-password"
                        />
    
                        <InputError class="mt-2" :message="form.errors.password" />
                    </div>
    
                    <div class="block mt-4">
                        <label class="flex items-center">
                            <Checkbox name="remember" v-model:checked="form.remember" />
                            <span class="ms-2 text-sm text-gray-600">Remember me</span>
                        </label>
                    </div>
    
                    <div class="flex items-center mt-4">
                        <!-- <PrimaryButton class="text-center grow" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                            Log in
                        </PrimaryButton> -->
                        <button type="submit" class="px-3 py-2 w-full bg-gray-800 text-white hover:bg-gray-700 rounded text-center bg">Log In</button>
                    </div>
                </form>
                <span class="text-sm my-3">Or</span>
                <Link class="text-sm" :href="route('member.register')">
                    Register an account
                </Link>
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
