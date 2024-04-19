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
    if(randomInt === 0){
        randomInt++;
    } else if(randomInt === 1){
        console.log('Você ganhou mais um turno.');
    } else if(randomInt === 2){
        console.log('No próximo turno você poderá atacar duas vezes.');
    } else if(randomInt === 3){
        console.log('O próximo ataque que você levar terá dano reduzido');
    } else if(randomInt === 4){
        console.log('Ataque aumentado em 40%. Precisão reduzida em 40%.');
    } else if(randomInt === 5){
        console.log('Você ganhou 50g.');
    }
    while(randomInt === 6){
        function horaDaVerdade(){
            return Math.floor(Math.random() * 101)
        }
        if(horaDaVerdade() >= 50){
                console.log('O ataque da sua arma foi dobrado. Você não pode mais usar o Roll Dice nessa batalha.')
                break;
        } else {
                console.log('Você ganhou 25g.')
                break;
        }
    }
}

console.log(setInterval(rollDice(getRandomInt()), 5000))