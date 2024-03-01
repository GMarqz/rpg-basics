
export default class Character {
    constructor(hp, atk, def, critRate = 10){
        this.hp = hp
        this.atk = atk
        this.def = def
        this.critRate = critRate
    }

    calcularDano(sword) {

        let totalDmg = this.atk;
        if (sword && sword.atk) {
            totalDmg += sword.atk;
        }
        return totalDmg;
    }
}

