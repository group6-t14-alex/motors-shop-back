-- CreateTable
CREATE TABLE "cars" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "description" TEXT NOT NULL,
    "km" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "price" REAL NOT NULL,
    "price_fipe" REAL NOT NULL,
    "image_url" TEXT NOT NULL,
    "model" VARCHAR(100) NOT NULL,
    "color" VARCHAR(50) NOT NULL,
    "brand" VARCHAR(50) NOT NULL,
    "fuel" VARCHAR(50) NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "cars_pkey" PRIMARY KEY ("id")
);
