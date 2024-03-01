import { Text } from "@react-email/components";
import React, { FC } from "react";

export const Hello = ({name}: {name: string}) => {
  return (
      <Text>Hello {name}</Text>
  );
};