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
          Welcome to Galzzy!
        </Heading>
        <Text className="text-foreground mb-2">Hi there,</Text>

        <Text className="text-foreground mb-2">
          Big thanks for signing up to get updates about Galzzy! You&apos;re
          officially on the VIP list, which means you&apos;ll be among the first
          to know when we launch.
        </Text>
        <Text className="text-foreground mb-2">
          I&apos;m working hard to create something amazing for you. If you have
          any ideas or just want to say hi, feel free to hit reply. Or email me
          on my personal email.
        </Text>
        <Button
          className="bg-[#3d1eff] text-white hover:text-zinc-200 duration-200 py-2 px-4 rounded-md mt-4"
          href="mailto:mdizaan67@gmail.com"
        >
          Say Hii
        </Button>
        <Text className="text-foreground mt-6 italic">
          Stay tuned!
          <br />
          Cheers,
          <br />
          Izaan
          <br />
          The One-Person Dream Team at Galzzy 🚀
        </Text>
      </Container>
    </Body>
  </Html>
);

export default EmailTemplate;
