module.exports = {
    root: true,
    extends: ["plugin:tailwindcss/recommended"],
    parser: "@typescript-eslint/parser",
    settings: {
      tailwindcss: {
        callees: ["lint"],
        config: "./tailwind-config.js",
      },
    },
  };