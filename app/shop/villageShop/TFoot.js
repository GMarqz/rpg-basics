import { father } from "../../functions/createElement.js";
import { createTFoot, createTr, createTh, createTd } from "../../functions/createTable.js";

export default class TFoot {
    constructor(parent){
        this.parent = parent
    }

    initTFoot() {
        createTFoot(father(this.parent), "village__shop__table__foot")
        createTr(father(".village__shop__table__foot"), "village__shop__table__foot__tr")
        createTh(father(".village__shop__table__foot__tr"), "row", "village__shop__table__foot__th", "Total")
        createTd(father(".village__shop__table__foot__tr"), "village__shop__table__foot__td", "??")
        createTd(father(".village__shop__table__foot__tr"), "village__shop__table__foot__td", "??")
    }
}
