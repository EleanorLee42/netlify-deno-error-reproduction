import React from "react";
import { GoodbyePage } from "../../src/templates/GoodbyePage.tsx";
import { HelloPage } from "../../src/templates/HelloPage.tsx";
import { Email } from "./index.ts";

const hello: Email<HelloPage> = {
  Template: HelloPage,
  exampleData: {
    example: {
      name: "Stephanie",
    },
  },
};

const goodbye: Email<GoodbyePage> = {
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
