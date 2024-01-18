import { handle } from 'hono/netlify';
import { Hono, LinearRouter, SmartRouter, TrieRouter } from 'hono';
import { render } from "@react-email/render";
import React from 'react';
import { Email } from '../../src/Email.tsx';


const app = new Hono({
  // Quick Router: https://hono.dev/api/presets#hono-quick
  router: new SmartRouter({
    routers: [new LinearRouter(), new TrieRouter()],
  }),
});

app.get('/country', (c) => {
  return c.text('Hello Hono!')
})
app.get('/', (c) => {
  return c.text('Hello tester!')
})

app.get('/render', (c) => {
  return c.html(render(<Email />))
})

export default handle(app)
