import { itens } from "../../dataBase/listaItens.js";


const shopBtn = document.getElementById('shop');
const returnBtn = document.getElementById('village__shop__return__main__page__button');

shopBtn.addEventListener('click', () => {
    window.location.href = "../../../pages/villageShopTable.html"
})

returnBtn.addEventListener('click', () => {
    window.location.href = "../../index.html"
})
