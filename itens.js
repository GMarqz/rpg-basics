import {Player} from "./index.js";

console.log('working')

export default class Espada {
    constructor(atack, critRate){
        this.atack = atack
        this. critRate = critRate
    }
}

const ele = new Player(100, 24, 17)
const troll = new Player(80, 21, 20)
const greatsword = new Espada(15, 4)

function damageTeste(){
    const totalAtk = ele.atk + greatsword.atk;
    const damageDealt = totalAtk - troll.def;
    return damageDealt - troll.hp;
}

damageTeste()

//Bom, to indo dormir, não entendo porque tá retornando NaN. Agora o novo erro: Uncaught SyntaxError: The requested module './index.js' does not provide an export named 'Player' (at itens.js:1:9).
//Acho que tem a ver com o modo de importação, favor checar se a sintaxe está correta.