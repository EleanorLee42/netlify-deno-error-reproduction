import { Email } from "../Email.tsx"
import React from "react";
import { Text } from "@react-email/components"
import { PaddedSection } from "../PaddedSection.tsx";
import { Title } from "../Title.tsx";
import { Message } from "../Message.tsx";


export const TestEmail = () => {
    return (
        <Email>
            <PaddedSection>
                <Title text="Welcome to the test email" as="h1" fontClassName="text-red-500"/>
            <Text>Here is some text!</Text>
            <Message/>
            </PaddedSection>
        </Email>
    )
}