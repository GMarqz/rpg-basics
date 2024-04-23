import { itens } from "../../dataBase/listaItens.js";
// import callTheCreateFunctions from "./createHtmlFunction.js";

const itensDaLoja = Object.values(itens);
const shopBtn = document.getElementById('shop');
const htmlBody = document.body
let shopBtnMode = false;

function createTableHead() {
    htmlBody.innerHTML = `
    <table class="village__shop__table">
    <caption class="village__shop__table__caption">
        Buy Items
    </caption>
    <thead class="village__shop__table__head">
        <tr class="village__shop__table__head__tr">
            <th scope="col" class="village__shop__table__head__th">Item's Name</th>
            <th scope="col" class="village__shop__table__head__th">Description</th>
            <th scope="col" class="village__shop__table__head__th">Price</th>
            <th scope="col" class="village__shop__table__head__th">Quantity</th>
        </tr>
    </thead>
    `
}

function createTableFoot() {
    htmlBody.innerHTML = `
    <tfoot class="village__shop__table__foot">
    <tr class="village__shop__table__foot__tr">
        <th scope="row" colspan="2" class="village__shop__table__foot__th">Total</th>
        <td class="village__shop__table__foot__td">??</td>
        <td class="village__shop__table__foot__td">??</td>
    </tr>
    </tfoot>
    </table>
    `
}


function openShop(shopItems) {
    createTableHead()
    shopItems.forEach(item => {
        htmlBody.innerHTML += `
            <table class="village__shop__table">
                <caption class="village__shop__table__caption">
                    Buy Items
                </caption>
                <thead class="village__shop__table__head">
                    <tr class="village__shop__table__head__tr">
                        <th scope="col" class="village__shop__table__head__th">Item's Name</th>
                        <th scope="col" class="village__shop__table__head__th">Description</th>
                        <th scope="col" class="village__shop__table__head__th">Price</th>
                        <th scope="col" class="village__shop__table__head__th">Quantity</th>
                    </tr>
                </thead>
                <tbody class="village__shop__table__body">
                    <tr class="village__shop__table__body__tr">
                        <th scope="row" class="village__shop__table__body__th">${item.name}</th>
                        <td class="village__shop__table__body__td">${item.description}</td>
                        <td class="village__shop__table__body__td">${item.price}</td>
                        <td class="village__shop__table__body__td">0</td>
                    </tr>
                </tbody>
        `;
    });
    createTableFoot()
}

shopBtn.addEventListener('click', () => {
    const selectSection = document.querySelector('.oi')
    if (shopBtnMode === false && !selectSection) {
        openShop(itensDaLoja);
        return shopBtnMode = true
    } else if (selectSection) {
        selectSection.remove()
        return shopBtnMode = false
    }
})

