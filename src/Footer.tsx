import { Img, Link, Section, Text } from "@react-email/components";
import React from "react";

export const Footer = () => {
  const currentYearEST = new Date().toLocaleDateString("en-US", {
    timeZone: "America/New_York",
    year: "numeric",
  });

  return (
    <Section className="mx-auto mt-10 w-full bg-gray-background px-4 pb-7 pt-5">
      <Text className="mb-3 text-center text-xs text-gray-text-light">
        Footer © {currentYearEST}
      </Text>
    </Section>
  );
};
