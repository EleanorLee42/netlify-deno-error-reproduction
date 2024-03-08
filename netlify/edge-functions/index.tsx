import type { Context as NetlifyContext } from "@netlify/edge";
import {
  Column,
  Html,
  Link,
  Row,
  Section,
  Tailwind,
} from "@react-email/components";
import { render } from "@react-email/render";
import { Hono, LinearRouter, SmartRouter, TrieRouter } from "hono";
import { handle } from "hono/netlify";
import React from "react";
import { GoodbyePage } from "../../src/templates/GoodbyePage.tsx";
import { HelloPage } from "../../src/templates/HelloPage.tsx";
import config from "../../tailwind.config.ts";
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
      <Html lang="en" dir="ltr">
        <Tailwind config={config}>
          <Section className="mt-10 max-w-md">
            <Row>
              <Column className="text-center text-3xl font-bold">
                Welcome to our website
              </Column>
            </Row>
            <Row className="mb-2 mt-4 text-2xl font-bold">
              <Column className="text-left">Page</Column>
              <Column className="text-right">Link</Column>
            </Row>
            {Object.keys(routes).map((contentUrl) => (
              <Row>
                <Column className="text-left">{contentUrl}</Column>
                <Column className="text-right">
                  <Link href={`${contentUrl}/preview`}>
                    {Object.keys(routes[contentUrl as Slug].exampleData)[0]}
                  </Link>
                </Column>
              </Row>
            ))}
          </Section>
        </Tailwind>
      </Html>
    )
  )
);

app.get("/:content_url/preview", (c) => {
  const url = c.req.param("content_url");
  if (url === "hello") {
    return c.html(
      render(<HelloPage {...routes[url as Slug].exampleData.example} />)
    );
  } else {
    return c.html(
      render(<GoodbyePage {...routes[url as Slug].exampleData.example} />)
    );
  }
});

export default handle(app);
