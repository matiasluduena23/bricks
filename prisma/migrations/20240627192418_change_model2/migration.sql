/*
  Warnings:

  - The `tipodeAlquiler` column on the `Propiedades` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `activo` column on the `Propiedades` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `amoblado` on the `Propiedades` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "TipodeAlquiler" AS ENUM ('temporal', 'permanente');

-- CreateEnum
CREATE TYPE "Amoblado" AS ENUM ('si', 'no');

-- AlterTable
ALTER TABLE "Propiedades" DROP COLUMN "tipodeAlquiler",
ADD COLUMN     "tipodeAlquiler" "TipodeAlquiler" NOT NULL DEFAULT 'permanente',
DROP COLUMN "amoblado",
ADD COLUMN     "amoblado" "Amoblado" NOT NULL,
DROP COLUMN "activo",
ADD COLUMN     "activo" BOOLEAN NOT NULL DEFAULT true;
