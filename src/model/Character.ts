import { v4 as uuidV4 } from "uuid";

class Character {

    id?: string;
    name: string;
    age: number;
    status: string;
    debut: string;
    origin: string;
    residence: string;
    epithet: string;
    height: string;
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }

}


export { Character }