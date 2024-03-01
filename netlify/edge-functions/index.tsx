import type { Context as NetlifyContext } from "@netlify/edge";
import { Column, Link, Row } from "@react-email/components";
import { render } from "@react-email/render";
import { Hono, LinearRouter, SmartRouter, TrieRouter } from "hono";
import { handle } from "hono/netlify";
import React from "react";
import { PaddedSection } from "../../src/PaddedSection.tsx";
import routes, { Slug } from "../routes/index.ts";

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

app.get("/", (c) =>
  c.html(
    render(
      <PaddedSection>
        <Row>
          <Column>Page</Column>
          <Column>Link</Column>
        </Row>
        {Object.keys(routes).map((contentUrl) => (
          <Row>
            <Column>{contentUrl}</Column>
            <Column>
              <Link href={`${contentUrl}/preview`}>
                {Object.keys(routes[contentUrl as Slug].exampleData)[0]}
              </Link>
            </Column>
          </Row>
        ))}
      </PaddedSection>
    )
  )
);

export default handle(app);
