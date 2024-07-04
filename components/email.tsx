import React from "react";
import {
  Html,
  Head,
  Body,
  Container,
  Heading,
  Text,
  Button,
} from "@react-email/components";

const EmailTemplate = () => (
  <Html lang="en">
    <Head />
    <Body className="light bg-background text-foreground p-6">
      <Container className="bg-content1 rounded-lg p-6 border-2 border-content2">
        <Heading className="text-primary-DEFAULT mb-4">
          Welcome to Galzzy! Exciting Times Ahead!
        </Heading>
        <Text className="text-foreground mb-2">Hi there,</Text>
        <Text className="text-foreground mb-2">
          Thanks for joining the Galzzy fam! 🎉 We&apos;re super excited to have
          you on board.
        </Text>
        <Text className="text-foreground mb-2">
          You&apos;ll be notified about our platform launch, updates, and other
          exciting news. If you have any questions, feel free to contact me at
          my personal email.
        </Text>
        <Button
          className="bg-primary-DEFAULT text-primary-foreground py-2 px-4 rounded-md mt-4"
          href="mailto:mdizaan67@gmail.com"
        >
          Contact Me
        </Button>
        <Text className="text-foreground mt-6 italic">
          Best regards,
          <br />
          Izaan
        </Text>
      </Container>
    </Body>
  </Html>
);

export default EmailTemplate;
