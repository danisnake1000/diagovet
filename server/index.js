import express, { json } from "express";
import animal from "./src/routers/animal.router.js";
import analysis from "./src/routers/analysis.router.js";
const app = express();

app.use(json());
app.use(analysis);
app.use(animal);

app.listen(9000);

console.log(`Server listening on `, 9000);
