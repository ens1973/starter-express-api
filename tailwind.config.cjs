const typography = require('@tailwindcss/typography');
const forms = require('@tailwindcss/forms');

const config = {
    content: ['./src/**/*.{html,js,svelte,ts}'],

    
    theme: {
        extend: {
            fontFamily: {
                roboto: ["Roboto", "sans-serif"],
                inter: ["Inter", "sans-serif"],
            },
        },
    },

    plugins: [forms, typography]
};

module.exports = config;
