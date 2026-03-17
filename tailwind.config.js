/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        page: "#030303",
        navy: "#050505",
        deep: "#0f0f10",
        sky: "#38BDF8",
        mist: "#E2F3FF",
        panel: "rgba(9, 9, 9, 0.86)",
        border: "rgba(148, 163, 184, 0.18)",
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      boxShadow: {
        glow: "0 30px 80px rgba(56, 189, 248, 0.14)",
        card: "0 18px 50px rgba(8, 17, 32, 0.28)",
      },
      backgroundImage: {
        "hero-glow": "radial-gradient(circle at top left, rgba(56, 189, 248, 0.16), transparent 38%), radial-gradient(circle at bottom right, rgba(30, 77, 183, 0.18), transparent 34%), linear-gradient(135deg, #020202 0%, #070707 48%, #0d0d0d 100%)",
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        pulseSoft: "pulseSoft 2.8s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.7" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
