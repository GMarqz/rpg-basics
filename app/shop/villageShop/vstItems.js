import { father, createDiv } from "../../functions/createElement.js"
import { createTh, createTd } from "../../functions/createTable.js"


// for(const item of shopItens){

//     createDiv(father(".village__shop__table__body__tr"), "village__shop__table__body__tr__div")

//     createTh(father(".village__shop__table__body__tr__div"), "row", "village__shop__table__body__th", `${item.name}`)
//     createTd(father(".village__shop__table__body__tr__div"), "village__shop__table__body__td", `${item.id}`)
//     createTd(father(".village__shop__table__body__tr__div"), "village__shop__table__body__td", `${item.hp}`)
// // }

// export class Item {
//     constructor(father, cssClassName, row, item){
//         this.father = father
//         this.cssClassName = cssClassName
//         this.row = row
//         this.item = item
//     }

//     initBlock() {
//         createDiv(father(".village__shop__table__body__tr"), "village__shop__table__body__tr__div");
//         createTh(father(".village__shop__table__body__tr__div"), "row", "village__shop__table__body__th", `${item.name}`)
//         createTd(father(".village__shop__table__body__tr__div"), "village__shop__table__body__td", `${item.id}`)
//         createTd(father(".village__shop__table__body__tr__div"), "village__shop__table__body__td", `${item.hp}`)
//     }
// }

export class Item {
    constructor(item){

        this.item = item
    }

    initBlock() {
        createDiv(father(".village__shop__table__body__tr"), "village__shop__table__body__tr__div");
        createTh(father(".village__shop__table__body__tr__div"), "row", "village__shop__table__body__th", `${this.item.name}`)
        createTd(father(".village__shop__table__body__tr__div"), "village__shop__table__body__td", `${this.item.id}`)
        createTd(father(".village__shop__table__body__tr__div"), "village__shop__table__body__td", `${this.item.hp}`)
    }
}


///////////////create the div then add each item stat to the div
/////////////// then, create a new div where a new item shall be added
