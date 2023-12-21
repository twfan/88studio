<!-- src/components/DropdownMenu.vue -->
<template>
    <div v-if="isOpen" @click="toggleDropdown" class="absolute  mt-2 w-48 bg-white border rounded shadow-lg">
        <Link :href="route('member.transactions')" method="get">
            <div class="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                Transactions
            </div>
        </Link>
        <Link :href="route('logout')" method="post">
            <div class="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                Log Out
            </div>
        </Link>
    </div>
</template>
  
<script setup>
    import { Link } from '@inertiajs/vue3';
    import { ref } from 'vue';

    const props = defineProps(['isOpen']);

    const data = ref({
        isOpen: false,
    });
    
    const toggleDropdown = () => {
      emit('update:isOpen', !props.isOpen);
    };
    
    const logout = () => {
        // Implement your logout logic here
        console.log('Logging out...');
        // You might want to emit an event to your parent component or perform a router navigation
    };
</script>