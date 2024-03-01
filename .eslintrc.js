module.exports = {
    root: true,
    extends: ["plugin:tailwindcss/recommended"],
    plugins: ["react"],
    parser: "@typescript-eslint/parser",
    settings: {
      tailwindcss: {
        callees: ["lint"],
        config: "tailwind.config.ts",
      },
    },
  };