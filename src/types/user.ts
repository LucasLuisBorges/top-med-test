import {
  Account as AccountPrisma,
  UserGroup,
  User as UserPrisma,
} from "@/lib/db/generated";

export type User = UserPrisma;
export type Account = AccountPrisma;
export type UserWithGroups = User & { groups: UserGroup[] };

export enum Role {
  ADMIN = "admin",
  USER = "user",
}

export const roleValues = {
  [Role.ADMIN]: "Administrador",
  [Role.USER]: "Usuário",
};
