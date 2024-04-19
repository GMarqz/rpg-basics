import KamuiTuban from './items/head/KamuiTuban.js';
import UsanGlasses from './items/head/UsanGlasses.js';
import IronArmour from './items/body/IronArmour.js';
import GoldenArmour from './items/body/GoldenArmour.js';
import ZombieArmour from './items/body/ZombieArmour.js';
import Luva from './items/gloves/Luva.js';
import WingShoes from './items/shoes/WingShoes.js';
import IronSword from './items/sword/IronSword.js';

// {
//     "id": ,
//     "name": , 
//     "type": ,
//     "hp": ,
//     "def": ,
//     "critRate": ,
//     "price": ,
//     "description": 
// },

export const itens = {
    //head
    "52315rb33": new KamuiTuban("52315rb33", "Kamui Tuban", 5, 8, 19),
    "hg51jrzr0": new UsanGlasses("hg51jrzr0", "Usan Glasses", 0, 8, 13, 20),

    //armour
    "n3wfp013t": new IronArmour("n3wfp013t", "Iron Armour", 75, 32, 0),
    "9y0bcl7gu": new GoldenArmour("9y0bcl7gu", "Golden Armour", 80, 35, 4),
    "jy2h487pa": new ZombieArmour("jy2h487pa", "Zombie Armour", 1, 50, 0),

    //gloves
    "ewxfyo30l": new Luva("ewxfyo30l", "Luva", 4, 7, 15),

    //shoes

    "677421388a5da": new WingShoes("677421388a5da", "Wing Shoes", 6, 7, 10),

    //sword
    "bitpu6paw": new IronSword("bitpu6paw", "Iron Sword", 21, 8)
}

