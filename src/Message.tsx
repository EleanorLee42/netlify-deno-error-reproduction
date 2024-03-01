import { Text } from "@react-email/components";
import React from "react";
import { Goodbye } from "./Goodbye.tsx";
import { Hello } from "./Hello.tsx";

export const Message = ({
  name,
  type,
}: {
  name: string;
  type: "hello" | "goodbye";
}) => {
  return (
    <>
      {type === "hello" ? <Hello name={name} /> : <Goodbye name={name} />}
      <Text>This is a message!</Text>
    </>
  );
};
