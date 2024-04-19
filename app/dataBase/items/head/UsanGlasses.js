import Helmet from "../../Equipment/Helmet.js";

export default class UsanGlasses extends Helmet {
    constructor(id, name, hp, def, critRate, evasion){
        super(id, name, hp, def, critRate)
        this.evasion = evasion
    }
}