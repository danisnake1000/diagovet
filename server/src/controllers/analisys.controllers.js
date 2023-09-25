import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export const  createAnalysis = async(req,res)=>{
    const createAnalysis = await prisma.analysis.create({
        data: req.body
    })
    res.json(createAnalysis);
}
export const  getAnalysis = async(req,res)=>{
    const getAnalysis = await prisma.analysis.findMany()
    res.json(getAnalysis);
}
