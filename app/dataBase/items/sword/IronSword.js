import Sword from "../../Equipment/Sword.js";

export default class IronSword extends Sword {
    constructor(id, name, atk, critRate){
        super(101, "Iron Sword", 21, 10)
    }
}