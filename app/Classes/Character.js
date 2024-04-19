

//Só queria dizer que enquanto eu fuçava os protótipos eternos dos mil objetos do javascript eu descobri a existência do "ondrop" que é um evento de clicar e arrastar, favor pesquisar no MDN ou w3s porque isso aí vai ser útil pra clicar e arrastar os itens pro inventário.
//Fiz um teste pra ver se o console retornaria o helmet e body equipado, o código tá em [../../mdFiles/testeDeEquipamento.md] e precisa de importar itens da listaItens.js pra poder funcionar, e claro, precisa ser nesse arquivo aqui, só copiar e colar.
//Ao invés de vários if no método sumHP eu descobri a existência do reduce(). Explicação sobre ele em: [mdfiles/reduce.md]
export default class Character {
    constructor(id, name, hp, atk, def, critRate = 10, helmet, armour, gloves, shoes, primaryWeapon, secundaryWeapon){
        this.id = id
        this.name = name
        this.helmet = helmet
        this.armour = armour
        this.gloves = gloves
        this.shoes = shoes
        this.primaryWeapon = primaryWeapon
        this.secundaryWeapon = secundaryWeapon

        this.hp = this.sumHP()
        this.atk = this.sumAtk()
        this.def = this.sumDef()
        this.critRate = this.sumCritRate()
    }

    sumHP(){
        const items = [this.helmet, this.armour, this.gloves, this.shoes, this.primaryWeapon, this.secundaryWeapon];
        return items.reduce((totalHP, item) => totalHP + (item && item.hp ? item.hp : 0), this.hp || 0);
    }

    sumAtk(){
        const items = [this.helmet, this.armour, this.gloves, this.shoes, this.primaryWeapon, this.secundaryWeapon];
        return items.reduce((totalAtk, item) => totalAtk + (item && item.atk ? item.atk : 0), this.atk || 0);
    }

    sumDef(){
        const items = [this.helmet, this.armour, this.gloves, this.shoes, this.primaryWeapon, this.secundaryWeapon];
        return items.reduce((totalDef, item) => totalDef + (item && item.def ? item.def : 0), this.def || 0);
    }

    sumCritRate(){
        const items = [this.helmet, this.armour, this.gloves, this.shoes, this.primaryWeapon, this.secundaryWeapon];
        return items.reduce((totalCritRate, item) => totalCritRate + (item && item.critRate ? item.critRate : 0), this.critRate || 0);
    }

}
