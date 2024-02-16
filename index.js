const ataque = document.getElementById('ataque');

class Player {
    constructor(hp, atk, def){
        this.hp = hp
        this.atk = atk
        this.def = def
    }

    atacar(inimigo){
        const danoResultante = this.atk - inimigo.def;
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
    const danoResultante = ze.atk - vilao.def
    informaDano(secaoDmg, danoResultante)
    retornaHP(ze.atacar(vilao))    
})

// retornaHP(ze.atacar(vilao));

console.log(vilao.def)
console.log(document.querySelector('.hp'))