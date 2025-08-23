/** @type {import('tailwindcss').Config} */
export const darkMode = "class";
export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
    extend: {
        colors: {
            background: "hsl(var(--background))",
            foreground: "hsl(var(--foreground))",
        },
    },
};
export const plugins = [];
