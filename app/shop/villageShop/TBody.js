import { father, createDiv } from "../../functions/createElement.js"
import { createTBody, createTr, createTh, createTd } from "../../functions/createTable.js"

export default class TBody {
    constructor(parent, item){
        this.parent = parent
        this.item = item
    }

    initTBody() {
        createTBody(father(this.parent), "village__shop__table__body")
        createTr(father(".village__shop__table__body"), "village__shop__table__body__tr")
    }

    initBlock() {
        const templateDivClassName = `village__shop__table__body__tr__div__${this.item.id}`
        const stringDivClassName = templateDivClassName.toString()

        const templateParentClassName = `.village__shop__table__body__tr__div__${this.item.id}` 
        const stringParentClassName = templateParentClassName.toString()

        console.log(stringDivClassName)
        createDiv(father(this.parent), stringDivClassName);
        createTh(father(stringParentClassName), "row", "village__shop__table__body__th", `${this.item.name}`)
        createTd(father(stringParentClassName), "village__shop__table__body__td", `${this.item.id}`)
        createTd(father(stringParentClassName), "village__shop__table__body__td", `${this.item.hp}`)
      
    }
}

