import React from "react";
import { GoodbyePage } from "../../src/templates/GoodbyePage.tsx";
import { HelloPage } from "../../src/templates/HelloPage.tsx";
import { Page } from "./index.ts";

const hello: Page<HelloPage> = {
  Template: HelloPage,
  exampleData: {
    example: {
      name: "Stephanie",
    },
  },
};

const goodbye: Page<GoodbyePage> = {
  Template: GoodbyePage,
  exampleData: {
    example: {
      name: "Eleanor",
    },
  },
};

export const messagesEndpoints = {
  hello: hello,
  goodbye: goodbye,
};
