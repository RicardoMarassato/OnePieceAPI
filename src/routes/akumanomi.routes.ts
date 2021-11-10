import { Router } from "express";
import { AkumanomiRepository } from "../repositories/AkumanomiRepository";

const akumanomiRoutes = Router();
const akumanomiRepository = new AkumanomiRepository();

akumanomiRoutes.post("/", (request, response) => {
    const { name, meaning, type } = request.body;
    akumanomiRepository.create({ name, meaning, type });
    return response.status(201).send();
});

akumanomiRoutes.get("/", (request, response) => {
    const listAll = akumanomiRepository.list();
    return response.json(listAll);
})

export { akumanomiRoutes }