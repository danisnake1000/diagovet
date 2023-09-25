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
  try {
    const getAnimalId = await prisma.animal.findFirst({
      where: {
        id: +req.params.id,
      },
    });
    if (!getAnimalId) {
      return res.status(404).json({ message: "animal not found!!!" });
    }
    return res.json(getAnimalId);
  } catch (error) {
    return res.json({ messenger: "Animal notfound" });
  }
};

export const deleteAnimal = async (req, res) => {
  try {
    const deletAnimal = await prisma.animal.delete({
      where: {
        id: parseInt(req.params.id),
      },
    });
    
    if (!deletAnimal) {
      return res.status(404).json({ message: "animal not found" });
    }
    return res.json(deletAnimal);
  } catch (error) {
    return res.send(error.meta);
  }
};

export const updateAnimal = async (req, res) => {
  try {
    const updateAnimal = await prisma.animal.update({
      where: {
        id: parseInt(req.params.id),
      },
      data: req.body,
    });
    return res.json(updateAnimal);
  } catch (error) {
    return res.send(error.meta);
  }
};
