// import callTheCreateFunctions from "./createHtmlFunction.js";
import initTable from "./villageShopTable.js";

const shopBtn = document.getElementById('shop');
let shopBtnMode = false;
const itensOnDisplay = [
    itens.armour[1], 
    itens.head[1], 
    itens.gloves[0], 
    itens.shoes[0], 
    itens.sword[0]
]

console.log(itens.armour[1].hp)

shopBtn.addEventListener('click', () => {
    const selectSection = document.querySelector('.village__shop__table')
    if (shopBtnMode === false && !selectSection) {
        initTable(itensOnDisplay)
        return shopBtnMode = true
    } else if (selectSection) {
        selectSection.remove()
        return shopBtnMode = false
    }
})

//////////////////////////////THIS CODE WAS MADE WHEN I WAS TRYING TO CREATE A DINAMYC TABLE USING DOM, I DECIDED TO SWITCH BACK TO A HTML PAGE INSTEAD OF JS DINAMYC PAGE. I'LL BE BACK WHEN I HAVE MORE TIME.///////////////////////////////////////