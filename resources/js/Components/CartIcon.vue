<script setup>

const props = defineProps({
    isFilled: {
        default: false,
    },
});

</script>


<template>
    <i class="w-4 h-4" :class="{ 'fill-black': isFilled, 'w-4': isFilled, 'h-4': isFilled }" data-feather="shopping-cart"></i>
</template>