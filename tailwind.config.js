module.exports = {
    purge: {
        content: [
            "./resources/**/*.antlers.html",
            "./resources/**/*.blade.php",
            "./content/**/*.md",
        ],
    },
    darkMode: false, // or 'media' or 'class'
    important: true,
    theme: {
        extend: {},
    },
    variants: {},
    plugins: [],
};