import { Container, Html, Tailwind } from "@react-email/components";
import React from "react";
import config from "../tailwind.config.ts";
import { Footer } from "./Footer.tsx";
import { Header } from "./Header.tsx";

export const Page = ({ children }: { children: React.ReactNode }) => {
  return (
    <Html lang="en" dir="ltr">
      <Tailwind config={config}>
        <Container className="w-full max-w-page px-5 py-9 font-sans text-base">
          <Header showBanner={true} />
          {children}
          <Footer />
        </Container>
      </Tailwind>
    </Html>
  );
};
