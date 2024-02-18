import BaseStats from "./BaseStats.js";

export default class Shoes extends BaseStats {
    constructor(hp, def, speed){
        super(hp, def, speed);
        this.speed = speed;
    }
    
}