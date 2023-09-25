
import express, { json } from "express"
import animal from "./src/routers/animal.router.js"
// import analysis from "./src/routers/analisys.router.js"

const app = express()

app.use(json())

// app.use("/api",analysis)
app.use(animal)


app.listen(9000) 

console.log(`Server listening on `, 9000);

