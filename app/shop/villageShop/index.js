import { itens } from "../../dataBase/listaItens.js";
import callTheCreateFunctions from "./createHtmlFunction.js";

const itensDaLoja = itens['52315rb33', '9y0bcl7gu', 'ewxfyo30l', '677421388a5da'];
const shopBtn = document.getElementById('shop');
let shopBtnMode = false;

shopBtn.addEventListener('click', () => {
    const selectSection = document.querySelector('.oi')
    if(shopBtnMode === false && !selectSection) {
        callTheCreateFunctions()
        return shopBtnMode = true
    } else if(selectSection) {
        selectSection.remove()
        return shopBtnMode = false
    }
})
