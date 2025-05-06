import type * as z from "zod";

import { capitalize } from "@/lib/utils";
import { userSchema } from "@/schemas/user-base";

export const signUpSchema = userSchema
  .pick({
    email: true,
    name: true,
    password: true,
  })
  .refine(
    (data) => {
      if (data.email) {
        data.email = data.email.toLowerCase().trim();
      }
      if (data.name) {
        data.name = capitalize(data.name);
      }

      return true;
    },
    {
      message:
        "O email e o nome não podem conter espaços no início ou no final.",
      path: ["email", "name"],
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

export type SignUpSchema = z.infer<typeof signUpSchema>;
