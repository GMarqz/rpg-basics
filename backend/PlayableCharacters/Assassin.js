import Character from "../../app/Classes/Character.js"

export default class Assassin extends Character {
    constructor(hp, atk, def, critRate = 10){
        super(hp, atk, def, critRate = 30)
    }

    neckCut(){
        atk = 20 + this.atk,
        crit = 70 + this.critRate,
        speedBonus = 15
        if(crit === 100){
            atk = atk * 2;
            return atk;
        }
    }
}

// O que eu quero? Uma forma de chamar funções em um único lugar, de forma que, Personagem, Esquipamentos, Skills, e Lógica de Ataque sejam chamados de uma vez.