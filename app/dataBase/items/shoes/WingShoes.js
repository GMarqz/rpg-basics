import Shoes from "../../Equipment/Shoes.js";

export default class WingShoes extends Shoes {
    constructor(id, name, hp, def, speed){
        super(90, "Wing Shoes", 10, 8, 15)
    }
}