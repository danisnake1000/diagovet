import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createAnimal = async (req, res) => {
  const newAnimal = await prisma.animal.create({
    data: req.body,
  });
  res.json(newAnimal);
};

export const getAnimals = async (req, res) => {
  const getAnimal = await prisma.animal.findMany();
  res.json(getAnimal);
};

export const getAnimal = async (req, res) => {
  const getAnimalId = await prisma.animal.findFirst({
    where: {
      id: +req.params.id,
    },
  });
  return res.json(getAnimalId);
};

export const deleteAnimal = async (req, res) => {
  const deletAnimal = await prisma.animal.delete({
    where: {
      id: +req.params.id,
    },
  });
  if (!deletAnimal)  res.status(404).json({ error: "Animal not found" });

  res.json(deletAnimal);
};

export const updateAnimal = async (req, res) => {
  const getAnimal = await prisma.animal.findMany();
  res.json(getAnimal);
};
