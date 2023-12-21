<script setup>
import { onMounted } from 'vue';
import ApplicationLogo from '@/Components/ApplicationLogo.vue';


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

</script>

<template>
    <div class="w-full flex flex-col bg-88-orange py-10">
        <div class="container mx-auto flex flex-row justify-between">
            <div class="w-1/5 flex flex-col">
                <ApplicationLogo />
            </div>
            <div class="flex flex-row">

            </div>
        </div>
    </div>
</template>
