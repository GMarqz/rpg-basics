import Helmet from "./backend/Equipment/Helmet.js";
import UpperBody from "./backend/Equipment/UpperBody.js";
import LowerBody from "./backend/Equipment/LowerBody.js";
import Gloves from "./backend/Equipment/Gloves.js";
import Shoes from "./backend/Equipment/Shoes.js";

const demonHelmet = new Helmet(12, 6, 3);
const dragonScale = new UpperBody(15, 20, 7);
const chimeraBottom = new LowerBody(8, 10, 4);
const rookGloves = new Gloves(3, 4, 14);
const rabbitShoes = new Shoes(2, 5, 15);

//Por algum motivo, shoes ainda tá recebendo crit rate como parametro
// Acredito que seja porque o valor de critRate tem o valor padrão, e como eu não alterei, ele manteve o padrão. Talvez se eu fizer critRate = null no constructor deve mudar.


console.log(demonHelmet, dragonScale, chimeraBottom, rookGloves, rabbitShoes);