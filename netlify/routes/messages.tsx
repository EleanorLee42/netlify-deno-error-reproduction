import { GoodbyeEmail } from "../../src/templates/GoodbyeEmail.tsx";
import { HelloEmail } from "../../src/templates/HelloEmail.tsx";
import { Email } from "./index.ts";

const hello: Email<HelloEmail> = {
  Template: HelloEmail,
  exampleData: {
    example: {
      name: "Stephanie",
    },
  },
};

const goodbye: Email<GoodbyeEmail> = {
  Template: GoodbyeEmail,
  exampleData: {
    example: {
      name: "Eleanor",
    },
  },
};

export const messagesEndpoints = {
  "hello-email": hello,
  "goodbye-email": goodbye,
};
