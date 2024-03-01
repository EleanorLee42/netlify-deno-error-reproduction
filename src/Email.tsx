import { Container, Html, Tailwind } from "@react-email/components";
import React from "react";
import config from "../tailwind.config.ts";
import { Message } from "./Message.tsx";
import { Header } from "./Header.tsx";
import { Footer } from "./Footer.tsx";

export const Email = ({children}: React.ReactNode) => {
  return (
    <Html lang="en" dir="ltr">
      <Tailwind config={config}>
        <Container className="w-full max-w-email px-5 py-9 font-sans text-base">
          <Header /> 
            {children}
          < Footer /> 
        </Container>
      </Tailwind>
    </Html>
  );
};