import React from "react";
import { Email } from "../Email.tsx";
import { Message } from "../Message.tsx";
import { PaddedSection } from "../PaddedSection.tsx";
import { Title } from "../Title.tsx";

export type GoodbyePage = {
  name: string;
};

export const GoodbyePage = ({ name }: GoodbyePage) => {
  return (
    <Email>
      <PaddedSection>
        <Title
          text="Goodbye from the test repo. Thanks for visiting!"
          as="h2"
          fontClassName="text-2xl text-blue-400"
        />
        <Message name={name} type="goodbye" />
      </PaddedSection>
    </Email>
  );
};
