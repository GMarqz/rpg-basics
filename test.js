import GoldenArmour from "./app/dataBase/items/body/GoldenArmour.js";

const itens = {
    "9y0bcl7gu": new GoldenArmour("9y0bcl7gu", "Golden Armour", 80, 35, 4)
}
//Por algum motivo, shoes ainda tá recebendo crit rate como parametro
// Acredito que seja porque o valor de critRate tem o valor padrão, e como eu não alterei, ele manteve o padrão. Talvez se eu fizer critRate = null no constructor deve mudar.


console.log(itens["9y0bcl7gu"].name);