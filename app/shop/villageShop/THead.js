import { father } from "../../functions/createElement.js";
import { createTable, createCaption, createTHead, createTr, createTh } from "../../functions/createTable.js";

export default class THead {

    constructor(parent){
        this.parent = parent
    }

    initTHead() {
        createTable(this.parent, "village__shop__table")
        createCaption(father(".village__shop__table"), "village__shop__table__caption", "Buy Items")
        createTHead(father(".village__shop__table"), "village__shop__table__head")
        
        createTr(father(".village__shop__table__head"), "village__shop__table__head__tr")
        createTh(father(".village__shop__table__head__tr"), "col", "village__shop__table__head__th", "Item's name")
        createTh(father(".village__shop__table__head__tr"), "col", "village__shop__table__head__th", "Description")
        createTh(father(".village__shop__table__head__tr"), "col", "village__shop__table__head__th", "Price")
        createTh(father(".village__shop__table__head__tr"), "col", "village__shop__table__head__th", "Quantity")
    }

}
