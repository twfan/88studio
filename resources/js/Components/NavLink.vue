<script setup>
import { computed, ref } from 'vue';
import { Link } from '@inertiajs/vue3';


const isOpen = ref(false);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const props = defineProps({
    href: {
        type: String,
        required: true,
    },
    active: {
        type: Boolean,
    },
    label : {
        type: String,
        required: true,
    },
    url: {
        typee: String,
        required: true,
    },
});

const classes = computed(() =>
    props.active
        ? 'inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out'
        : 'inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out'
);
</script>

<template>
    <Link :href="href" :class="classes">
        <slot />
    </Link>
</template>



<!-- ============ -->
<!-- <script setup>
import { ref } from 'vue';

const isOpen = ref(false);
const { props } = defineProps(['label', 'url']);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <div class="relative" @click="toggleDropdown">
    <button class="bg-blue-500 text-white px-4 py-2 rounded">
      {{ label }}
    </button>
    <div v-if="isOpen" class="absolute top-full left-0 mt-2 bg-white shadow-lg rounded">
      <slot></slot>
    </div>
  </div>
</template> -->