const typography = require('@tailwindcss/typography');
// const forms = require('@tailwindcss/forms');

// const config = {
//     content: ['./src/**/*.{html,js,svelte,ts}'],

    
//     theme: {
//         extend: {
//             fontFamily: {
//                 roboto: ["Roboto", "sans-serif"],
//                 inter: ["Inter", "sans-serif"],
//             },
//         },
//     },

//     plugins: [forms, typography]
// };

const flowbite = require('flowbite/plugin')

const config = {
    content: [
        "./src/**/*.{html,js,svelte,ts}",
        "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
    ],

    theme: {
        extend: {},
    },

    plugins: [
        flowbite
    ],
    darkMode: 'class',
};

module.exports = config;
