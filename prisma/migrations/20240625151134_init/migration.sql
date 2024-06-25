-- CreateTable
CREATE TABLE "Propiedades" (
    "id" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,
    "precio" INTEGER NOT NULL,
    "tipodeAlquiler" TEXT NOT NULL,
    "dormitorios" INTEGER NOT NULL,
    "ambientes" INTEGER NOT NULL,
    "banos" INTEGER NOT NULL,
    "m2Totales" INTEGER NOT NULL,
    "m2Cubiertos" INTEGER NOT NULL,
    "descripcion" TEXT NOT NULL,
    "amoblado" BOOLEAN NOT NULL,
    "activo" BOOLEAN NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Propiedades_id_key" ON "Propiedades"("id");
