import { Container, Html, Tailwind } from "@react-email/components";
import React from "react";
import config from "../tailwind.config.ts";
import { Message } from "./Message.tsx";

interface Email {
  children: React.ReactNode;
}

export const Email = ({ children }: Email) => {
  return (
    <Html lang="en" dir="ltr">
      <Tailwind config={config}>
        <Container className="w-full max-w-email px-5 py-9 font-sans text-base">
          <Message />
        </Container>
      </Tailwind>
    </Html>
  );
};