import { itens } from "../dataBase/listaItens.js";

//Só queria dizer que enquanto eu fuçava os protótipos eternos dos mil objetos do javascript eu descobri a existência do "ondrop" que é um evento de clicar e arrastar, favor pesquisar no MDN ou w3s porque isso aí vai ser útil pra clicar e arrastar os itens pro inventário.
//Fiz um teste pra ver se o console retornaria o helmet e body equipado, o código tá em [../../mdFiles/testeDeEquipamento.md] e precisa de importar itens da listaItens.js pra poder funcionar, e claro, precisa ser nesse arquivo aqui, só copiar e colar.
//Ao invés de vários if no método sumHP eu descobri a existência do reduce(). Explicação sobre ele em: [mdfiles/reduce.md]
export default class Character {
    constructor(id, name, hp, atk, def, critRate = 10, helmet, armour, gloves, shoes, primaryWeapon, secundaryWeapon){
        this.id = id
        this.name = name
        this.hp = hp
        this.atk = atk
        this.def = def
        this.critRate = critRate
        this.helmet = helmet
        this.armour = armour
        this.gloves = gloves
        this.shoes = shoes
        this.primaryWeapon = primaryWeapon
        this.secundaryWeapon = secundaryWeapon
    }

    sumHP(helmet, armour, gloves, shoes, secundaryWeapon){
 
        const items = [helmet, armour, gloves, shoes, secundaryWeapon];

        return items.reduce((totalHP, items) => totalHP + (items && items.hp ? items.hp : 0), this.hp)
    }

    calcularDano(sword) {

        let totalDmg = this.atk;
        if (sword && sword.atk) {
            totalDmg += sword.atk;
        }
        return totalDmg;
    }
}

const archer = new Character("9ke12u219", "Teena", 12, 18, 10, 23)

console.log(archer.sumHP(itens["52315rb33"], null, null, null, null))