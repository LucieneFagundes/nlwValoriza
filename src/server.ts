import express from "express";
import { router } from "./routes";
import "reflect-metadata";
import "./database";

const app = express();
app.use(express.json());

app.get("/", (request, response) => {
    response.send("Primeira Rota");
})

app.use(router);


//http://localhost:8090
app.listen(8090, () => console.log('Server is running'));