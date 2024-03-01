import { Text } from "@react-email/components";
import React from "react";
import { Hello } from "./Hello.tsx";

export const Message = () => {
  return (
    <>
    <Hello name="Bob" />
      <Text>This is a message!</Text>
    </>
  );
};