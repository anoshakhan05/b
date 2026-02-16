import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "var(--color-primary)",
                secondary: "var(--color-secondary)",
                accent: {
                    red: "var(--color-accent-red)",
                },
                text: {
                    primary: "var(--color-text-primary)",
                    muted: "var(--color-muted-text)",
                },
            },
            fontFamily: {
                sans: ["var(--font-manrope)", "sans-serif"],
            },
        },
    },
    plugins: [],
};
export default config;
