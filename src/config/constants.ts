import { Role } from "@/types/user";

export type SiteConfig = typeof siteConfig;

export enum Paths {
  HOME = "/",
  SIGN_IN = "/sign-in",
  SIGN_UP = "/sign-up",

  SUCCESS = "/success",
}

export const PUBLIC_ROUTES = ["/", "/sign-in", "/sign-up"];

export const siteConfig = {
  name: "TopMed Test",
  description: "Plataforma topmed test",
  logo: "/logo.svg",
  authors: [
    {
      name: "Lucas Borges",
      url: "https://www.linkedin.com/in/lucasluisborges/",
      email: "lucasluisborges1205@gmail.com",
    },
  ],
  keywords: ["TopMed Test"],
};

export const ROLES: Role[] = [Role.ADMIN, Role.USER];

export const ROLE_TRANSLATIONS: Record<Role, string> = {
  [Role.ADMIN]: "Administrador",
  [Role.USER]: "Usuário",
};
