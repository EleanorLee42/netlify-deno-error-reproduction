import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    extend: {
      maxWidth: {
        page: "604px",
      },
      colors: {
        gray: {
          background: {
            DEFAULT: "#F4F5F7",
          },
          text: {
            light: "#404040",
          },
        },
      },
    },
  },
};

export default config;
