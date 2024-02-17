
export default class Character {
    constructor(hp, atk, def, critRate = 10){
        this.hp = hp
        this.atk = atk
        this.def = def
        this.critRate = critRate
    }

    // equipment(sword){
    //     this.atk + sword.atack
    // }

    // atacar(inimigo){
    //     const danoResultante = this.atk - inimigo.def;
    //     const hpResultante = inimigo.hp - danoResultante;
    //     return hpResultante;
    // }
}

