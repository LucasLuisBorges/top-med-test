import {
  Social as SocialPrisma,
  SocialProvider as SocialProviderPrisma,
} from "@/lib/db/generated";

export type SocialProvider = SocialProviderPrisma;
export const Social = SocialPrisma;
