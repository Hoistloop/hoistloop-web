import tailwindcss from "@tailwindcss/typography";
import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "icon-gradient":
          "linear-gradient(229deg, rgba(84,60,222,0.25) -76%, rgba(60,222,219,0.005) 31%), linear-gradient(180deg, #242424 0%, rgba(36,36,36,0) 100%)",
      },
      screens: {
        desktop: "1920px",
        laptop: "1440px",
        mobile: "390px",
      },
      colors: {
        fill: "#242424",
        desc: "#E6E6E6",
      },
    },
  },
  daisyui: {
    themes: [
      {
        hoistloop: {
          "primary": "#1C088C",
          "secondary": "#543CDE",
          "accent": "#3CDEDB",
          "base-100": "#191919",
        },
      },
    ],
  },
  plugins: [tailwindcss, daisyui],
};
