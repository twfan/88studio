<script setup>
import ApplicationLogo from '@/Components/ApplicationLogo.vue'
    import DropdownMenu from '@/components/DropdownMenu.vue';   
    import { Link} from '@inertiajs/vue3';
    import { ref } from 'vue';

defineProps({
    user: Object
})

const isUserDropdownOpen = ref(false);

    const toggleUserDropdown = () => {
        // You can perform additional logic here if needed
        // For example, close other open dropdowns before opening this one
        isUserDropdownOpen.value = !isUserDropdownOpen.value;
    };
</script>
<template>
    <div class="flex flex-col relative items-center justify-center">
        <div class="flex w-3/4 items-center absolute z-10 top-5 bg-white rounded-full px-7">
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
                <div @click="toggleUserDropdown" v-if="user" class="cursor-pointer">
                    <div class="bg-red flex flex-row gap-1 z-50 mx-4 text-center justify-center items-center uppercase">
                        <i data-feather="user"></i><span>{{user.name}}</span>
                    </div>
                    <DropdownMenu :isOpen="isUserDropdownOpen" @update:isOpen="isUserDropdownOpen = $event" @logout="handleLogout" />
                </div>
                <Link v-if="!user" :href="route('member.login')">
                    <div class="bg-red z-50 mx-4 text-center justify-center flex flex-row gap-1 items-center uppercase">
                        <i data-feather="user"></i><span>Login</span>
                    </div>
                </Link>
            </div>
            
        </div>
        <div class="w-full h-[47rem] bg-welcome bg-no-repeat bg-center bg-cover flex flex-col justify-center content-center">
            <div class="flex flex-col absolute w-[30rem] top-72 left-72">
                <div class="flex flex-col text-left">
                    <h1 class="text-6xl uppercase text-white mb-2">Grow With Fun</h1>
                    <p class="mb-5">Officia eu dolor proident voluptate anim pariatur proident culpa occaecat ea. Voluptate officia tempor irure esse anim et quis veniam exercitation nulla dolor et duis duis.</p>
                    <a href="#">
                        <span class="text-white rounded-full px-3 py-2 bg-black uppercase opacity-60">See more ych Comission</span>
                    </a>
                </div>
            </div>
        </div>
        <div class="absolute z-20 top-0 right-0 w-[60rem] pointer-events-none">
            <img class="" src="asset-02.png" />
        </div>
    </div>
</template>