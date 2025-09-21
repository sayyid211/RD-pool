import { PrismaClient } from "@prisma/client";

declare global {
  // This prevents new PrismaClient instances from being created on hot reloads in dev
  var prisma: PrismaClient | undefined;
}

export const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") global.prisma = prisma;
