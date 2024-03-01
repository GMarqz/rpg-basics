import Helmet from "../../../../backend/Equipment/Helmet.js";

export default class extends Helmet {
    constructor(id, name, hp, def, critRate){
        super(id, name, hp, def, critRate)
    }
}