import Character from "./app/Classes/Character.js";
import Sword from "./app/Classes/Sword.js";
import atacar from "./app/attack/attackMethod.js";
import stringReturnDmg from "./app/attack/stringReturnDmg.js";

const ze = new Character(100, 20, 14);
const vilao = new Character(100, 13, 14);
const lightSword = new Sword(12, 8);

function retornaHP(retorno) {
    const pegaTextoHP = document.querySelector('.hp');
    pegaTextoHP.innerHTML = `${retorno}`
}

ataque.addEventListener('click', () => {
    const danoResultante = (ze.atk + lightSword.atack) - vilao.def
    stringReturnDmg(danoResultante)
    retornaHP(atacar(ze, lightSword, vilao))    
})

console.log(vilao.def)

//CRIAR A FUNÇÃO EQUIPA, QUE TEM COMO OBJETIVO SOMAR OS STATUS DA ESPADA COM O DO PERSONAGEM. 
//SE PÁ, DÁ PRA IMPORTAR CHARACTER E SWORD NESSA FUNÇÃO EQUIPA, E AQUI, IMPORTAR SOMENTE A FUNÇÃO EQUIPA, MAS TEM QUE PLANEJAR MELHOR