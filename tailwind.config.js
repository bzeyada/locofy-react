/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "gray-50": "#fafafa",
        "gray-700": "#414651",
        "brand-600": "#006a9a",
        white: "#fff",
      },
      borderRadius: {
        "radius-8": "8px",
        "button-md": "8px",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
