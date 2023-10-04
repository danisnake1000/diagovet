import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createAnalysis = async (req, res) => {
  const createAnalysiss = await prisma.analysis.create({
    data: req.body,
  });
  res.json(createAnalysiss);
};

export const getAnalysis = async (req, res) => {
  const getAnalysis = await prisma.analysis.findMany();
  res.json(getAnalysis);
};

export const getAnalysisId = async (req, res) => {
  try {
    const getAnalysisIds = await prisma.analysis.findFirst({
      where: {
        id: parseInt(req.params.id)
      },
    });
    if (!getAnalysisIds) {
      return res.status(404).json({ messenger: "Analysis not found" });
    }
    res.json(getAnalysisIds);
  } catch (error) {
    return res.json({error});
  }
};

export const deleteAnalysis = async (req, res) => {
  try {
    const deleteAnalysiss = await prisma.analysis.delete({
      where: {
        id: parseInt(req.params.id)
      },
    });
    if (!deleteAnalysiss) {
      return res.status(404).json({ messenger: "Analysis deleted not found" });
    }
    return res.json(deleteAnalysiss);
  } catch (error) {
    return res.send(error.meta)
  }
};

export const updateAnalysis = async (req, res) => {
    try {
      const actualizarAnalysiss = await prisma.analysis.update({
        where: {
          id: +req.params.id,
        },
        data: req.body,
      })
      return res.json(actualizarAnalysiss)
    } catch (error) {
      return res.send(error.meta)
    }
}
