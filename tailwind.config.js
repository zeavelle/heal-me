/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "var(--color-primary)",
        "putih": "var(--text-primary)",
        "putih-darker": "var(--text-primary-darker)",
        "secondary": "var(--color-secondary)",
        "secondary-darker": "var(--color-secondary-darker)",
        "accent": "var(--color-accent)",
        "accent-darker": "var(--color-accent-darker)",
        "muted": "var(--color-muted)",
        "muted-background": "var(--color-muted-background)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
