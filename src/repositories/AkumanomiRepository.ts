import { Akumanomi } from "../model/Akumanomi";

interface ICreateAkumanomiDTO {
    name: string;
    meaning: string;
    type: string;
}

class AkumanomiRepository {
    private akumanomi: Akumanomi[];

    constructor() {
        this.akumanomi = [];
    }

    create({ name, meaning, type }: ICreateAkumanomiDTO): void {
        const createAkumanomi = new Akumanomi;

        Object.assign(createAkumanomi, {
            name,
            meaning,
            type,
            created_at: new Date()
        });

        this.akumanomi.push(createAkumanomi);
    }

    list(): Akumanomi[] {
        return this.akumanomi;
    }
}

export { AkumanomiRepository }