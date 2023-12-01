<template>
    <img :src="logoUrl" alt="Logo" class="w-full h-full fill-current text-gray-500">
</template>


<script setup>
import { ref } from 'vue';

const logoUrl = ref('http://88studio.test/logo.png');
</script>