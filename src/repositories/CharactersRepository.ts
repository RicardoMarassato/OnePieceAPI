import { Character } from "../model/Character";

interface ICreateCharacterDTO {
    name: string;
    age: number;
    status: string;
    debut: string;
    origin: string;
    residence: string;
    epithet: string;
    height: string;
}

class CharactersRepository {
    private characters: Character[];

    constructor() {
        this.characters = [];
    }

    create({ name, age, status, debut, origin, residence, epithet, height }: ICreateCharacterDTO): void {
        const character = new Character();

        Object.assign(character, {
            name,
            age,
            debut,
            origin,
            residence,
            epithet,
            status,
            created_at: new Date(),
            height
        });

        this.characters.push(character);
    }

    list(): Character[]{
        return this.characters;
    }
}

export { CharactersRepository }