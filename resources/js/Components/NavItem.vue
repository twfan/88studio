<script setup>
const { props } = defineProps(['label', 'url']);
</script>

<template>
    <a :href="url" class="block px-4 py-2 text-gray-800 hover:bg-gray-200">
        {{ label }}
      </a>
</template>
