import React from "react";
import { Message } from "../Message.tsx";
import { PaddedSection } from "../PaddedSection.tsx";
import { Page } from "../Page.tsx";
import { Title } from "../Title.tsx";

export type HelloPage = {
  name: string;
};
export const HelloPage = ({ name }: HelloPage) => {
  return (
    <Page>
      <PaddedSection>
        <Title
          text="Welcome to our test repo"
          as="h1"
          fontClassName="text-2xl text-red-500 my-8"
        />
        <Message name={name ?? "Bob"} type="hello" />
      </PaddedSection>
    </Page>
  );
};
