import BaseStats from "./BaseStats.js";

export default class Shoes extends BaseStats {
    constructor(id, name, hp, def, speed){
        super(id, name, hp, def, speed);
        this.speed = speed;
    }
    
}