"use server";

import { redirect } from "next/navigation";

import { APIError } from "better-auth/api";

import { errorMessages } from "@/config/error-messages";
import { auth } from "@/lib/auth";
import { ActionResponse } from "@/types/action-response";

export async function signInWithGoogleAction(): Promise<ActionResponse> {
  try {
    const data = await auth.api.signInSocial({
      body: { provider: "google", callbackURL: "/" },
    });

    if (data.url) {
      return redirect(data.url);
    }

    return {
      message: "Erro ao fazer login com Google",
      status: "error",
    };
  } catch (error) {
    if (error instanceof Error && error.message === "NEXT_REDIRECT") {
      throw error;
    }

    if (error instanceof APIError) {
      return {
        message:
          errorMessages[error.body?.code || ""] || "Erro desconhecido na API",
        status: "error",
      };
    }
    return {
      message: `Erro ao fazer login com Google: ${
        error instanceof Error ? error.message : "Erro desconhecido"
      }`,
      status: "error",
    };
  }
}
