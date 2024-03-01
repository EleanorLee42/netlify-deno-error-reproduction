import React from "react";
import { Email } from "../Email.tsx";
import { Message } from "../Message.tsx";
import { PaddedSection } from "../PaddedSection.tsx";
import { Title } from "../Title.tsx";

export const GoodbyeEmail = () => {
  return (
    <Email>
      <PaddedSection>
        <Title
          text="Goodbye from the test emails"
          as="h2"
          fontClassName="text-2xl text-blue-400"
        />
        <Message name="Sandy" type="goodbye" />
      </PaddedSection>
    </Email>
  );
};
