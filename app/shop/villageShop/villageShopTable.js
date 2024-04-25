import { father } from "../../functions/createElement.js";
import { createTable, createCaption, createTHead, createTr, createTh, createTBody, createTd, createTFoot } from "../../functions/createTable.js";

function initTable(){

    createTable(document.body, "village__shop__table")
    createCaption(father(".village__shop__table"), "village__shop__table__caption", "Buy Itens")
    createTHead(father(".village__shop__table"), "village__shop__table__head")

    createTr(father(".village__shop__table__head"), "village__shop__table__head__tr")
    createTh(father(".village__shop__table__head__tr"), "col", "village__shop__table__head__th", "Item's name")
    createTh(father(".village__shop__table__head__tr"), "col", "village__shop__table__head__th", "Description")
    createTh(father(".village__shop__table__head__tr"), "col", "village__shop__table__head__th", "Price")
    createTh(father(".village__shop__table__head__tr"), "col", "village__shop__table__head__th", "Quantity")

    
}

export default initTable;