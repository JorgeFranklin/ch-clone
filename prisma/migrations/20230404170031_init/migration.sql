-- CreateTable
CREATE TABLE "Teste" (
    "id" SERIAL NOT NULL,
    "img" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "details" TEXT NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "Teste_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Teste_slug_key" ON "Teste"("slug");
