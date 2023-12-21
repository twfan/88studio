<script setup>
    import ApplicationLogo from '@/Components/ApplicationLogo.vue'
    import DropdownMenu from '@/components/DropdownMenu.vue';   
    import { Link} from '@inertiajs/vue3';
    import { ref } from 'vue';
    
    const isUserDropdownOpen = ref(false);

    defineProps({
        user: Object
    })

    const toggleUserDropdown = () => {
        // You can perform additional logic here if needed
        // For example, close other open dropdowns before opening this one
        isUserDropdownOpen.value = !isUserDropdownOpen.value;
    };
    </script>
    <template>
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
                <div @click="toggleUserDropdown" class="cursor-pointer">
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
    </template>

