import React from "react";
import { messagesEndpoints } from "./messages.tsx";

export type Page<T> = {
  Template: React.FC<T>;
  exampleData: Record<string, T>;
};

export type Slug = keyof typeof messagesEndpoints;

export type EndpointMap = {
  // deno-lint-ignore no-explicit-any
  [key in Slug]: Page<any>;
};

const uniqueEndpoints = (endpointMaps: EndpointMap) => {
  const keys = Object.keys(endpointMaps);
  if (new Set(keys).size !== keys.length) {
    throw new Error(
      `Duplicate endpoint slug found. Please remove one of the endpoints.`
    );
  }
  return endpointMaps;
};

export default uniqueEndpoints({
  ...messagesEndpoints,
});
