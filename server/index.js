console.clear()

import express from "express";
import animal from "./src/routers/animal.router.js";
import analysis from "./src/routers/analysis.router.js";

const app = express();
const PORT = 9000
app.use(express.json());
app.use(analysis);
app.use(animal);

app.listen(PORT,()=>console.log(`Server listening on ${PORT}`))

