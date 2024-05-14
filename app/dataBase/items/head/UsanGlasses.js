import Helmet from "../../Equipment/Helmet.js";

export default class UsanGlasses extends Helmet {
    constructor(id, name, hp, def, critRate, evasion){
        super(60, "Usan Glasses", 5, 4, 12)
        this.evasion = 70
    }
}