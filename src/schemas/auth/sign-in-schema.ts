import type * as z from "zod";

import { userSchema } from "@/schemas/user-base";

export const signInSchema = userSchema
  .pick({
    email: true,
    password: true,
  })
  .refine(
    (data) => {
      if (data.email) {
        data.email = data.email.toLowerCase().trim();
      }

      return true;
    },
    {
      message: "O email não pode conter espaços no início ou no final.",
      path: ["email"],
    }
  )
  .refine(
    (data) => {
      if (data.password && data.password.trim() !== data.password) {
        return false;
      }
      return true;
    },
    {
      message: "A senha não pode conter espaços no início ou no final.",
      path: ["password"],
    }
  );

export type SignInSchema = z.infer<typeof signInSchema>;
