# netlify-deno-error-reproduction

#### Reproducing a dev server bug for Netlify!

## To test:
1. Clone this repo
2. Cd into `hono-deno-netlify`
3. Run `pn dev` (which is just `netlify dev` but aliased)
4. Verify that saving `index.tsx` or `Email.tsx` triggers a reload, but saving `Hello.tsx` or `Message.tsx` doesn't.