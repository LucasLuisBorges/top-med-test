import { z } from "zod";

export const userSchema = z.object({
  name: z
    .string({
      required_error: "O nome é obrigatório.",
      invalid_type_error: "O nome deve ser uma string.",
    })
    .min(2, {
      message: "O nome deve ter pelo menos 2 caracteres.",
    })
    .max(32, { message: "O nome deve ter no máximo 32 caracteres." }),
  email: z
    .string({
      required_error: "O email é obrigatório.",
      invalid_type_error: "O email deve ser uma string.",
    })
    .email({
      message: "Por favor, insira um email válido.",
    }),
  password: z
    .string({
      required_error: "A senha é obrigatória.",
      invalid_type_error: "A senha deve ser uma string.",
    })
    .min(8, {
      message: "A senha deve ter pelo menos 8 caracteres.",
    })
    .max(32, { message: "A senha deve ter no máximo 32 caracteres." }),
  image: z
    .string({
      required_error: "A URL da imagem é obrigatória.",
      invalid_type_error: "A URL da imagem deve ser uma string.",
    })
    .url({
      message: "A URL da imagem deve ser válida.",
    }),
});
