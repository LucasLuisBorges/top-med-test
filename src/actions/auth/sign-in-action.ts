"use server";

import { headers } from "next/headers";

import { APIError } from "better-auth/api";

import { errorMessages } from "@/config/error-messages";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { type SignInSchema, signInSchema } from "@/schemas/auth/sign-in-schema";
import type { ActionResponse } from "@/types/action-response";
import { Role } from "@/types/user";

export async function signInAction(
  values: SignInSchema
): Promise<ActionResponse<{ role: Role }>> {
  try {
    const validatedFields = signInSchema.safeParse(values);

    if (!validatedFields.success) {
      return { message: "Campos inválidos", status: "error" };
    }

    const { email, password } = validatedFields.data;

    const user = await db.user.findUnique({ where: { email } });
    if (!user) {
      return { message: "Credenciais inválidas", status: "error" };
    }

    await auth.api.signInEmail({
      body: { email, password },
      headers: await headers(),
    });

    return {
      message: "Login realizado com sucesso",
      status: "success",
      data: {
        role: user.role as Role,
      },
    };
  } catch (error) {
    console.error("error", error);
    if (error instanceof APIError) {
      return {
        message: errorMessages[error.body?.code || ""],
        status: "error",
      };
    }
    return { message: "Erro ao fazer login", status: "error" };
  }
}
