"use server";

import { headers } from "next/headers";

import { auth } from "@/lib/auth";
import { User } from "@/types/user";

export async function authServer() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const userId = session?.user.id;

  return { session: session?.session, user: session?.user as User, userId };
}
