import { v4 as uuidV4 } from "uuid";

class Akumanomi {

    id?: string;
    name: string;
    meaning: string;
    type: string;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }

}

export { Akumanomi }