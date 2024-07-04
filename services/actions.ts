"use server";

import { Resend } from "resend";
import { z } from "zod";
import { eq } from "drizzle-orm";
import { config } from "dotenv";

import { db } from "@/drizzle/";
import { UsersTable } from "@/drizzle/schema";
import EmailTemplate from "@/components/email";
config();

const resend = new Resend(process.env.RESEND_API_KEY);

export async function saveEmail(prevState: any, formData: FormData) {
  const schema = z.object({ email: z.string().email() });

  try {
    const body = schema.parse({ email: formData.get("email") });
    const [emailExsists] = await db
      .select()
      .from(UsersTable)
      .where(eq(UsersTable.email, body.email));

    if (!emailExsists) {
      await db.insert(UsersTable).values({
        email: body.email,
      });
    }
    const { error } = await resend.emails.send({
      from: process.env.MY_EMAIL!,
      to: [body.email],
      subject: "Thank You for Joining Us at Galzzy!",
      react: EmailTemplate(),
    });

    if (error) {
      return { message: error.message, status: 500 };
    }

    return { message: "success", status: 201 };
  } catch (error: any) {
    console.error(error);
    const message = error?.message || "Something went wrong. Please try again!";

    return { message: message, status: 500 };
  }
}
