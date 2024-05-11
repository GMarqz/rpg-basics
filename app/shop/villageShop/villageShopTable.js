import THead from "./THead.js";
import TBody from "./TBody.js";
import TFoot from "./TFoot.js";

function initTable(shopItens){
    new THead(document.body).initTHead()
    new TBody(".village__shop__table").initTBody()

    for(const item of shopItens){
        new TBody(".village__shop__table__body__tr", item).initBlock()
        
        const templateParentClassName = `.village__shop__table__body__tr__div__${item.id}` 
        const stringParentClassName = templateParentClassName.toString()
        const getDivClassName = document.querySelector(stringParentClassName)
        getDivClassName.style.display = "flex";
    }

    new TFoot(".village__shop__table").initTFoot() 
}

export default initTable;