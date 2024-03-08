import React from "react";
import { Message } from "../Message.tsx";
import { PaddedSection } from "../PaddedSection.tsx";
import { Page } from "../Page.tsx";
import { Title } from "../Title.tsx";

export type GoodbyePage = {
  name: string;
};

export const GoodbyePage = ({ name }: GoodbyePage) => {
  return (
    <Page>
      <PaddedSection>
        <Title
          text="Goodbye from the test repo. Thanks for&nbsp;visiting!"
          as="h2"
          fontClassName="text-2xl text-blue-400 my-8 text-center"
        />
        <Message name={name} type="goodbye" />
      </PaddedSection>
    </Page>
  );
};
