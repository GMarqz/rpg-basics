import Character from "../Character.js";
import { itens } from "../../dataBase/listaItens.js";

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

    function createListItem(element, text){
        const listItem = document.createElement("LI");
        listItem.className = "div__show__status__list__item";
        element.appendChild(listItem)
        listItem.textContent = text
    }

    const createDivShowStatus = document.createElement("DIV");
    createDivShowStatus.className = "div__show__status";
    document.body.appendChild(createDivShowStatus);

    const createHeading = document.createElement("H1");
    createHeading.className = "div__show__status__heading";
    createDivShowStatus.appendChild(createHeading);
    createHeading.textContent = "CHARACTER STATUS";

    const createList = document.createElement("OL");
    createList.className = "div__show__status__list";
    createDivShowStatus.appendChild(createList);

    createListItem(createList, `HP: ${novoSentoyu.hp}`);
    createListItem(createList, `ATK: ${novoSentoyu.atk}`);
    createListItem(createList, `DEF: ${novoSentoyu.def}`);
    createListItem(createList, `Crit. Rate: ${novoSentoyu.critRate}`);
    


    console.log('working!')
}

statBtn.addEventListener('click', () => {
    const div = document.querySelector(".div__show__status")
    if(btnMode === false && !div){
        showCharacterStats()
        return btnMode = true;
    } else if(div) {
        div.remove()
        return btnMode = false;
    }
})