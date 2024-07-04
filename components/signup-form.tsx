"use client";

import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { useFormState, useFormStatus } from "react-dom";
import { toast } from "sonner";

import { saveEmail } from "@/services/actions";

export function SignupForm() {
  const [state, action] = useFormState(saveEmail, {
    status: 200,
    message: null,
  });

  if (state.status === 500) {
    toast.error(JSON.stringify(state?.message));
    state.status = 200;
  }

  if (state.status === 201) {
    toast.success("Yay! you are now part of the team");
    state.status = 200;
  }

  return (
    <div className="mx-auto w-full max-w-sm space-y-2">
      <form action={action} className="flex space-x-2">
        <Input
          required
          className="max-w-lg flex-1 text-white"
          color="primary"
          name="email"
          placeholder="Enter your email"
          type="email"
        />
        <Submit>Sign up</Submit>
      </form>
      <p className="text-xs">
        Sign up to get notified when we launch.
        <Link className="underline underline-offset-2" href="#">
          Terms & Conditions
        </Link>
      </p>
    </div>
  );
}

function Submit({ children }: { children: string }) {
  const { pending } = useFormStatus();

  return (
    <Button
      color="primary"
      isDisabled={pending}
      isLoading={pending}
      type="submit"
    >
      {children}
    </Button>
  );
}
