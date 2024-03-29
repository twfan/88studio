import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            backgroundImage: {
                'welcome' : "url(/images/banner.png)"  ,
                'trans-vtuber' : "url(/images/trans-vtuber.png)",
                'vtuber' : "url(/images/vtuber.png)",
            },
            colors: {
                '88-orange' : '#EBAA00',
                '88-yellow' : '#FFDF00',
                '88-cream' : '#EBE1D0'
            },
            fontFamily: {
                sans: ['Lilita One', 'Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [forms],
};
