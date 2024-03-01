import type { Context as NetlifyContext } from "@netlify/edge";
import { render } from "@react-email/render";
import { Hono, LinearRouter, SmartRouter, TrieRouter } from "hono";
import { handle } from "hono/netlify";
import React from "react";
import { GoodbyeEmail } from "../../src/templates/GoodbyeEmail.tsx";
import { HelloEmail } from "../../src/templates/HelloEmail.tsx";

export type Env = {
  Bindings: {
    context: NetlifyContext;
  };
};

const app = new Hono<Env>({
  // Quick Router: https://hono.dev/api/presets#hono-quick
  router: new SmartRouter({
    routers: [new LinearRouter(), new TrieRouter()],
  }),
});

app.get("/country", (c) => {
  return c.text("Hello Hono!");
});
app.get("/", (c) => {
  return c.text("Hello tester!");
});

app.get("/welcome-email", (c) => {
  return c.html(render(<HelloEmail />));
});

app.get("/goodbye-email", (c) => {
  return c.html(render(<GoodbyeEmail />));
});

export default handle(app);
