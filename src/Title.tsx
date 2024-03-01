import { Heading } from "@react-email/components";
import React from "react";


export type Title = {
  text: string;
  fontClassName: string;
  as: "h1" | "h2" | "h3" | "h4" | "h5";
  classname?: string;
};

export const Title = ({
  text,
  as,
  fontClassName,
}: Title) => {
  

  return (
    <Heading as={as} className={`my-4 ${fontClassName}`}>

          <span className="inline">
           {text}
          </span>
    </Heading>
  );
};
