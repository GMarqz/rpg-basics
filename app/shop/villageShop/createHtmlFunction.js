import { father, createSection, createDiv, createHeading, createParagraph } from "../../functions/createElement.js";

function callTheCreateFunctions(){
    createSection(document.body, 'oi')
    createDiv(father('.oi'), 'oi-div')
    createHeading(father('.oi-div'), 'H1' ,'oi-div-heading', 'Village Shop')
    createHeading(father('.oi-div'), 'H2' ,'oi-div-heading', 'Welcome to our item shop, take your time!')
    createParagraph(father('.oi-div'), 'oi-paragraph' ,'TESTANDO A UTILIDADE DE VARIAS FUNÇÕES EXPORTADAS')
}

export default callTheCreateFunctions;