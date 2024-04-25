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

    head: [
        new KamuiTuban("52315rb33", "Kamui Tuban", 5, 8, 19),
        new UsanGlasses("hg51jrzr0", "Usan Glasses", 0, 8, 13, 20)
    ],

    armour: [
        new IronArmour("n3wfp013t", "Iron Armour", 75, 32, 0),
        new GoldenArmour("9y0bcl7gu", "Golden Armour", 80, 35, 4),
        new ZombieArmour("jy2h487pa", "Zombie Armour", 1, 50, 0)
    ],

    gloves: [
        new Luva("ewxfyo30l", "Luva", 4, 7, 15)
    ],

    shoes: [
        new WingShoes("677421388a5da", "Wing Shoes", 6, 7, 10)
    ],

    sword: [
        new IronSword("bitpu6paw", "Iron Sword", 21, 8)
    ]
}

