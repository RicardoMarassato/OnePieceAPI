import { Router } from "express";
import { CharactersRepository } from "../repositories/CharactersRepository";

const charactersRoutes = Router();
const charactersRepository = new CharactersRepository();


charactersRoutes.post("/", (request, response) => {

	const { name, age, debut, origin, residence, epithet, status, height } = request.body;

	charactersRepository.create({ name, age, debut, origin, residence, epithet, status, height });

	return response.status(201).send();

});

charactersRoutes.get("/", (request, response) => {

	const listAll = charactersRepository.list();

	return response.json(listAll);

});

export { charactersRoutes }