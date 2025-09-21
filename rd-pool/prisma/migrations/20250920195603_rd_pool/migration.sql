/*
  Warnings:

  - You are about to drop the column `domains` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `stage` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the `Organization` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "public"."ActorType" AS ENUM ('INDIVIDUAL', 'ORGANIZATION');

-- CreateEnum
CREATE TYPE "public"."RequestStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

-- DropForeignKey
ALTER TABLE "public"."Project" DROP CONSTRAINT "Project_ownerId_fkey";

-- DropForeignKey
ALTER TABLE "public"."User" DROP CONSTRAINT "User_organizationId_fkey";

-- AlterTable
ALTER TABLE "public"."Project" DROP COLUMN "domains",
DROP COLUMN "stage",
ALTER COLUMN "description" DROP NOT NULL;

-- DropTable
DROP TABLE "public"."Organization";

-- DropTable
DROP TABLE "public"."User";

-- CreateTable
CREATE TABLE "public"."Actor" (
    "id" TEXT NOT NULL,
    "type" "public"."ActorType" NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "bio" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Actor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ParticipationRequest" (
    "id" TEXT NOT NULL,
    "status" "public"."RequestStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "actorId" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,

    CONSTRAINT "ParticipationRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Partnership" (
    "id" TEXT NOT NULL,
    "aId" TEXT NOT NULL,
    "bId" TEXT NOT NULL,

    CONSTRAINT "Partnership_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Actor_email_key" ON "public"."Actor"("email");

-- AddForeignKey
ALTER TABLE "public"."Project" ADD CONSTRAINT "Project_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "public"."Actor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ParticipationRequest" ADD CONSTRAINT "ParticipationRequest_actorId_fkey" FOREIGN KEY ("actorId") REFERENCES "public"."Actor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ParticipationRequest" ADD CONSTRAINT "ParticipationRequest_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "public"."Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Partnership" ADD CONSTRAINT "Partnership_aId_fkey" FOREIGN KEY ("aId") REFERENCES "public"."Actor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Partnership" ADD CONSTRAINT "Partnership_bId_fkey" FOREIGN KEY ("bId") REFERENCES "public"."Actor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
