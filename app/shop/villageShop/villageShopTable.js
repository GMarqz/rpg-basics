import { father } from "../../functions/createElement.js";
import { createTable, createCaption, createTHead, createTr, createTh, createTBody, createTd, createTFoot } from "../../functions/createTable.js";

function initTable(shopItens){

    createTable(document.body, "village__shop__table")
    createCaption(father(".village__shop__table"), "village__shop__table__caption", "Buy Itens")
    createTHead(father(".village__shop__table"), "village__shop__table__head")

    createTr(father(".village__shop__table__head"), "village__shop__table__head__tr")
    createTh(father(".village__shop__table__head__tr"), "col", "village__shop__table__head__th", "Item's name")
    createTh(father(".village__shop__table__head__tr"), "col", "village__shop__table__head__th", "Description")
    createTh(father(".village__shop__table__head__tr"), "col", "village__shop__table__head__th", "Price")
    createTh(father(".village__shop__table__head__tr"), "col", "village__shop__table__head__th", "Quantity")

    createTBody(father(".village__shop__table"), "village__shop__table__body")
    createTr(father(".village__shop__table__body"), "village__shop__table__body__tr")

    for(const item of shopItens){
        createTh(father(".village__shop__table__body__tr"), "row", "village__shop__table__body__th", `${item.name}`)
        createTd(father(".village__shop__table__body__tr"), "village__shop__table__body__td", `${item.hp}`)
        createTd(father(".village__shop__table__body__tr"), "village__shop__table__body__td", `${item.id}`)
    }

    createTFoot(father(".village__shop__table"), "village__shop__table__foot")
    createTr(father(".village__shop__table__foot"), "village__shop__table__foot__tr")
    createTh(father(".village__shop__table__foot__tr"), "row", "village__shop__table__foot__th", "Total")
    createTd(father(".village__shop__table__foot__tr"), "village__shop__table__foot__td", "??")
    createTd(father(".village__shop__table__foot__tr"), "village__shop__table__foot__td", "??")
    
    
}

export default initTable;