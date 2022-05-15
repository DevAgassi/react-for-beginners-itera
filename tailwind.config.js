module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        colors: {
            primary: "var(--primary-color)",
            second: "var(--second-color)",
            white: "var(--white)",
            black: {
                300: "var(--black-300-color)"
            },
        },
        fontFamily: {
            sans: "Montserrat, system-ui, sans-serif",
        },
        container: {
            center: true,
            screens: {
                sm: "640px",
                md: "768px",
                lg: "1024px",
                xl: "1200px",
            },
        },
        extend: {
            boxShadow: {
                '3xl': '0 0 6px 4px rgba(48, 47, 42, 1)',
            }
        },
    },
    plugins: [],
};
