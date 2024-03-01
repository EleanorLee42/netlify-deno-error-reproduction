import { Section } from "@react-email/components";
import React from "react";

export const Header = ({showBanner}: {showBanner?: boolean}) => {
  
  return (
    <>
      <Section
        className=
          "mx-auto w-full border-b border-solid border-gray-line-soft"
      >
        <div className="mx-auto w-fit">
          <div className="my-6 text-center">
           HEADER
          </div>
        </div>
      </Section>
      {showBanner ? <Section className="bg-pink-300 text-center">a banner!</Section> : null}
    </>
  );
};
