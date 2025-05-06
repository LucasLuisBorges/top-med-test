import { env } from "@/config/env";
import { PrismaClient } from "@/lib/db/generated";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const db = globalForPrisma.prisma ?? new PrismaClient();

if (env.NODE_ENV !== "production") globalForPrisma.prisma = db;
