/**
 * Prisma client singleton for database operations.
 * This module ensures a single Prisma instance is shared across the application.
 * In development, it enables query logging for debugging purposes.
 * 
 * @module
 */
import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

/**
 * Singleton Prisma client instance.
 * Creates a new client if one doesn't exist, or reuses the existing instance.
 * Enables query logging in non-production environments.
 */
export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ["query"],
  });

// Prevent multiple instances during hot reloading in development
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;
