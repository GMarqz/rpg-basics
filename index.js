import Espada from "./itens.js";


const firstSword = new Espada(12, 8)

console.log(firstSword)



const ataque = document.getElementById('ataque');

export default class Player {
    constructor(hp, atk, def){
        this.hp = hp
        this.atk = atk
        this.def = def
    }

    atacar(inimigo, espada){
        const danoResultante = this.atk + espada.atk - inimigo.def;
        const hpResultante = inimigo.hp - danoResultante;
        return hpResultante;
    }
}

const ze = new Player(100, 20, 14);
const vilao = new Player(100, 13, 14)

function retornaHP(retorno) {
    const pegaTextoHP = document.querySelector('.hp');
    pegaTextoHP.innerHTML = `${retorno}`
}

const secaoDmg = document.querySelector('.secao__damage');

function informaDano(element, dano) {
    //element.classList.add("my-class")
    
    const paragrah = document.createElement("P");
    secaoDmg.appendChild(paragrah);
    paragrah.classList.add("informa__dano");
    paragrah.textContent = `vilão tomou ${dano} de dano`
}

// async function exemplo() {
//     let promessa = new Promise((resolve, reject) => {
//         setTimeout(() => resolve("finalizado"), 1000);
//     });

//     let resultado = await promessa;
//     console.log(resultado); // "finalizado"
// }

// exemplo();

ataque.addEventListener('click', () => {
    const danoResultante = ze.atk + firstSword.atk - vilao.def
    informaDano(secaoDmg, danoResultante)
    retornaHP(ze.atacar(vilao, firstSword))    
})

// retornaHP(ze.atacar(vilao));

console.log(vilao.def)