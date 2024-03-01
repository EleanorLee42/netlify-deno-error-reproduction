import { Section } from "@react-email/components";
import React from "react";

export const PaddedSection = ({
  children,
}: {
  children: React.ReactNode;
}) => <Section className="px-4">{children}</Section>;
