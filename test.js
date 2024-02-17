import Helmet from "./app/Equipment/Helmet.js";
import UpperBody from "./app/Equipment/UpperBody.js";
import LowerBody from "./app/Equipment/LowerBody.js";
import Gloves from "./app/Equipment/Gloves.js";
import Shoes from "./app/Equipment/Shoes.js";

const demonHelmet = new Helmet(12, 6, 3);
const dragonScale = new UpperBody(15, 20, 7);
const chimeraBottom = new LowerBody(8, 10, 4);
const rookGloves = new Gloves(3, 4, 14);
const rabbitShoes = new Shoes(2, 5, 15);

//Por algum motivo, shoes ainda tá recebendo crit rate como parametro


console.log(demonHelmet, dragonScale, chimeraBottom, rookGloves, rabbitShoes);