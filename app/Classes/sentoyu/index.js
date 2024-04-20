import Character from "../Character.js";
import { itens } from "../../dataBase/listaItens.js";
import { father, createSection ,createDiv, createHeading, createParagraph, createList } from "../../functions/createElement.js";

export class Sentoyu extends Character {
    constructor(id, name, hp, atk, def, critRate = 10, helmet, armour, gloves, shoes, primaryWeapon, secundaryWeapon){
        super(id, name, hp, atk, def, critRate = 10, helmet, armour, gloves, shoes, primaryWeapon, secundaryWeapon)
    }
    
    toString() {
        return `Character: ${this.name}\nHP: ${this.hp}\nATK: ${this.atk}\nDEF: ${this.def}\nCRIT Rate: ${this.critRate}`;
    }
}

const novoSentoyu = new Sentoyu(1, 'Sentoyu', 20, 39, 12, 60, itens["hg51jrzr0"], itens["n3wfp013t"], itens["ewxfyo30l"], itens["677421388a5da"], itens["bitpu6paw"], null)

console.log(novoSentoyu)

let btnMode = false;

const statBtn = document.getElementById('showStats')

function showCharacterStats(){
    createDiv(document.body, "div__show__stats")
    createHeading(father(".div__show__stats"), "H1","div__show__stats", "CHARACTER STATS")

    createList(father(".div__show__stats"), "OL", "div__show__status__list")

    createList(father(".div__show__status__list"), "LI", "div__show__status__list__item", `HP: ${novoSentoyu.hp}`);
    createList(father(".div__show__status__list"), "LI", "div__show__status__list__item", `ATK: ${novoSentoyu.atk}`);
    createList(father(".div__show__status__list"), "LI", "div__show__status__list__item", `DEF: ${novoSentoyu.def}`);
    createList(father(".div__show__status__list"), "LI", "div__show__status__list__item", `Crit. Rate: ${novoSentoyu.critRate}`);
}

statBtn.addEventListener('click', () => {
    const div = document.querySelector(".div__show__stats")
    if(btnMode === false && !div){
        showCharacterStats()
        return btnMode = true;
    } else if(div) {
        div.remove()
        return btnMode = false;
    }
})