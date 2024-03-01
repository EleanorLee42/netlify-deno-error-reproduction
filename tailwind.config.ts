import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    extend: {
      maxWidth: {
        email: "604px",
      },
      },
    },
};

export default config;
