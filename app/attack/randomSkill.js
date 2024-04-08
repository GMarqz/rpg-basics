// Skill rollDice vai rolar um dado. 
//Se tirar 1: Ganha um turno. 
//Se tirar 2: Ataca duas vezes.
//Se tirar 3: O próximo ataque que o player tomar vai ter o dano reduzido 3 vezes.
//Se tirar 4: Buffa o ataque em 40% mas reduz o precisão em 40%.
//Se tirar 5: Ganha 50g.
//Se tirar 6: Dobra o ataque da arma equipada até o fim da batalha. Não pode usar a rollDice skill novamente durante a batalha em que 6 é tirado.

const botao = document.getElementById('form__input')

// botao.addEventListener('click', setInterval(rollDice(getRandomInt()), 5000))


function getRandomInt(){
    return Math.floor(Math.random() * 7)
}

function rollDice(randomInt) {
    if(randomInt === 1){
        console.log('logica de ganhar um turno');
    }
    if(randomInt === 2){
        console.log('logica de atacar duas vezes');
    }
    if(randomInt === 3){
        console.log('logica do numero 3');
    }
    if(randomInt === 4){
        console.log('logica do numero 4');
    }
    if(randomInt === 5){
        console.log('logica do numero 5');
    }
    if(randomInt === 6){
        function horaDaVerdade(){
            return Math.floor(Math.random() * 101)
        }
        if(horaDaVerdade() >= 50){
                console.log('logica do numero 6')
        } else {
                console.log('logica do 5 porque o 6 falhou KKKK')
        }
    }
}

console.log(setInterval(rollDice(getRandomInt()), 5000))