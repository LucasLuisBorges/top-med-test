import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { nextCookies } from "better-auth/next-js";
import { admin, openAPI } from "better-auth/plugins";

import { env } from "@/config/env";
import { db } from "@/lib/db";

export const auth = betterAuth({
  database: prismaAdapter(db, { provider: "sqlserver" }),
  plugins: [
    openAPI(),
    admin({
      impersonationSessionDuration: 60 * 60 * 24 * 7,
    }),
    nextCookies(),
  ],
  secret: env.AUTH_SECRET,
  baseURL: env.NEXT_PUBLIC_APP_URL,
  user: {
    additionalFields: {
      role: {
        type: "string",
        required: false,
        defaultValue: "user",
        input: false,
      },
    },
  },
  socialProviders: {
    google: {
      clientId: env.GOOGLE_CLIENT_ID as string,
      clientSecret: env.GOOGLE_CLIENT_SECRET as string,
    },
  },
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false,
    minPasswordLength: 8,
    resetPasswordTokenExpiresIn: 60 * 60 * 24,
  },
});
