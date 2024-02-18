import Helmet from "../Equipment/Helmet.js"

function createHelmets() {
    //1
    const demonHelmet = new Helmet(6, 6, 6);
    //2 
    const dragonHelmet = new Helmet(12, 15, 7)
    //3 
    const elixirHelmet = new Helmet(20, 12, 1)
}

export default createHelmets;