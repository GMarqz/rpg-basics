import DracoHelmet from "./items/head/DracoHelmet.js";
import KamuiTuban from "./items/head/KamuiTuban.js";
import UsanGlasses from "./items/head/UsanGlasses.js";
import IronArmour from "./items/body/IronArmour.js";
import GoldenArmour from "./items/body/GoldenArmour.js";
import ZombieArmour from "./items/body/ZombieArmour.js";
import Luva from "./items/gloves/Luva.js";


export const itens = {
    //head
    "xtajjr7ha": new DracoHelmet("xtajjr7ha", "Draco Helmet", 30, 12, 7),
    "52315rb33": new KamuiTuban("52315rb33", "Kamui Tuban", 5, 8, 19),
    "hg51jrzr0": new UsanGlasses("hg51jrzr0", "Usan Glasses", 0, 8, 13, 20),

    //body
    "n3wfp013t": new IronArmour("n3wfp013t", "Iron Armour", 75, 32, 0),
    "9y0bcl7gu": new GoldenArmour("9y0bcl7gu", "Golden Armour", 80, 35, 4),
    "jy2h487pa": new ZombieArmour("jy2h487pa", "Zombie Armour", 1, 50, 0),

    //gloves
    "ewxfyo30l": new Luva("ewxfyo30l", "Luva", 4, 7, 15)

}

console.log(itens["hg51jrzr0"])

console.log(itens.hg51jrzr0.evasion)

