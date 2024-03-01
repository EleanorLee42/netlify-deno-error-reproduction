import { Text } from "@react-email/components";
import React from "react";
import { Email } from "../Email.tsx";
import { Message } from "../Message.tsx";
import { PaddedSection } from "../PaddedSection.tsx";
import { Table } from "../Table.tsx";
import { Title } from "../Title.tsx";

export const HelloEmail = () => {
  return (
    <Email>
      <PaddedSection>
        <Title
          text="Welcome to the test email"
          as="h1"
          fontClassName="text-red-500"
        />
        <Text>Here is some text!</Text>
        <Message name="Bob" type="hello" />
        <Table />
      </PaddedSection>
    </Email>
  );
};
