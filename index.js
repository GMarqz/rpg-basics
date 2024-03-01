import Character from "./app/Classes/Character.js";
import Sword from "./backend/Equipment/Sword.js";
import atacar from "./app/attack/attackMethod.js";
import stringReturnDmg from "./app/attack/stringReturnDmg.js";
import criticalHit from "./rng.js";

const ze = new Character(100, 20, 14, 30);
const vilao = new Character(100, 13, 14);
const lightSword = new Sword(17, 8);

function retornaHP(retorno) {
    const pegaTextoHP = document.querySelector('.hp');
    pegaTextoHP.innerHTML = `${retorno}`
}

function equipment(character, sword){
    const atk = character.atk + sword.atk;
    return atk;
}

ataque.addEventListener('click', () => {
    // const danoResultante = equipment(ze, lightSword) - vilao.def
    // stringReturnDmg(danoResultante)
    // retornaHP(atacar(ze, lightSword, vilao))    
})

console.log(ze)

console.log(criticalHit(ze, lightSword))

function generateUniqueId() {
    // Implementação para gerar um ID único (pode ser mais complexa dependendo das necessidades)
    return Math.random().toString(36).substr(2, 9);
  }
console.log(generateUniqueId())
//CRIAR A FUNÇÃO EQUIPA, QUE TEM COMO OBJETIVO SOMAR OS STATUS DA ESPADA COM O DO PERSONAGEM. 
//SE PÁ, DÁ PRA IMPORTAR CHARACTER E SWORD NESSA FUNÇÃO EQUIPA, E AQUI, IMPORTAR SOMENTE A FUNÇÃO EQUIPA, MAS TEM QUE PLANEJAR MELHOR