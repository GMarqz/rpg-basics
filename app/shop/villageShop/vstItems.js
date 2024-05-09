import { father, createDiv } from "../../functions/createElement.js"
import { createTh, createTd } from "../../functions/createTable.js"


export class Item {
    constructor(item){
        this.item = item
    }

    initBlock() {
        const templateDivClassName = `village__shop__table__body__tr__div__${this.item.id}`
        const stringDivClassName = templateDivClassName.toString()

        const templateParentClassName = `.village__shop__table__body__tr__div__${this.item.id}` 
        const stringParentClassName = templateParentClassName.toString()

        console.log(stringDivClassName)
        createDiv(father(".village__shop__table__body__tr"), stringDivClassName);
        createTh(father(stringParentClassName), "row", "village__shop__table__body__th", `${this.item.name}`)
        createTd(father(stringParentClassName), "village__shop__table__body__td", `${this.item.id}`)
        createTd(father(stringParentClassName), "village__shop__table__body__td", `${this.item.hp}`)
      
    }
}

