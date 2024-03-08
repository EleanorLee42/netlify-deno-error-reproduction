# netlify-deno-error-reproduction

## Issue: When using netlify-cli@17.13.1, the dev server continuously reloads

### Context

Initial issue: When using `netlify-cli@17.13.0`, the dev server doesn't hot reload on save for files that're several levels of imports away from index.tsx.

When using `netlify-cli@17.13.1` (which fixes this issue ^) or above, the dev server continuously reloads.

### To test

1. Clone this repo
2. Install netlify-cli@17.13.1
3. Run `npm dev` or `pnpm dev`
4. Verify that the CLI continuously reloads edge functions, and that navigating to another page in localhost returns "There was an error with an Edge Function."
