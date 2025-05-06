"use server";

import { headers } from "next/headers";

import { APIError } from "better-auth/api";

import { errorMessages } from "@/config/error-messages";
import { auth } from "@/lib/auth";
import type { ActionResponse } from "@/types/action-response";

export async function signOutAction(): Promise<ActionResponse> {
  try {
    await auth.api.signOut({ headers: await headers() });

    return { message: "Deslogado com sucesso", status: "success" };
  } catch (error) {
    console.error("error", error);
    if (error instanceof APIError) {
      return {
        message: errorMessages[error.body?.code || ""],
        status: "error",
      };
    }
    return { message: "Erro ao deslogar", status: "error" };
  }
}
