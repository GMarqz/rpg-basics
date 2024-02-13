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

// Se o player atacar, o seguinte cálculo acontece: player.atk - inimigo.def 
// Então o resultado será aplicado no hp do inimigo, assim: inimigo.hp - resultado
// Isso resultará em uma função que retorna um novo valor para HP, assim: function retornaHP(retorno){
// const pegaTextoHP = document.querySelector('hp')
// pegaTextoHP.innerHTML = `${retorno}`
// }

function retornaHP(retorno) {
    const pegaTextoHP = document.querySelector('.hp');
    pegaTextoHP.innerHTML = `${retorno}`
}

ataque.addEventListener('click', () => {
    alert("vilão recebeu 6 de dano")
    retornaHP(ze.atacar(vilao))
})

// retornaHP(ze.atacar(vilao));

console.log(vilao.def)
console.log(document.querySelector('.hp'))