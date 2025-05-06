"use server";

import { headers } from "next/headers";

import { APIError } from "better-auth/api";

import { errorMessages } from "@/config/error-messages";
import { auth } from "@/lib/auth";
import { type SignUpSchema, signUpSchema } from "@/schemas/auth/sign-up-schema";
import type { ActionResponse } from "@/types/action-response";

export async function signUpAction(
  values: SignUpSchema
): Promise<ActionResponse> {
  try {
    const validatedFields = signUpSchema.safeParse(values);

    if (!validatedFields.success) {
      return { message: "Campos inválidos", status: "error" };
    }
    const { name, email, password } = validatedFields.data;

    await auth.api.signUpEmail({
      body: { email, password, name },
      headers: await headers(),
    });

    return {
      message: "Conta criada com sucesso",
      status: "success",
    };
  } catch (error) {
    console.error("error", error);
    if (error instanceof APIError) {
      return {
        message: errorMessages[error.body?.code || ""],
        status: "error",
      };
    }
    return { message: "Erro ao criar conta", status: "error" };
  }
}
