// fazer a logica do gerador de numero aleatorio pra aplicar na taxa critica

// ```
// 61 x 8 = 488;

// 488 / 100 = 4.88;
// ```

// Resultado: 8% de 61 é 4.88.
// Agora é só adicionar o 4.88 aos 61.

// const generateLowerNumberPlease = parseInt(Math.random() * 100 + 1);
// const generateHigherNumberPlease = parseInt(Math.random() * 100 + 1);


function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function critDmg(){
    if(getRandomInt === 100){
        return character.atk * 2;
    }
}

function criticalHit(character, sword){
    const critMath = character.critRate + sword.critRate;
    if(critMath <= 50){
        return getRandomInt(1, 50);
    } else {
        return getRandomInt(51, 100);
    }
}

const numero = 13
const mensagem = 'deu bom chefe'

console.assert(numero * 2 === 30, mensagem)

export default criticalHit;

// Se a taxa do personagem for maior que 50 => Sortear um número entre 50 e 101. Se o número sorteado for menor que 70, sortear um número entre 1 e 4. Se cair acima de 3.5 é crítico.
// Se o número sorteado for entre 70 e 80, sortear um número entre 1 e 3. Se cair acima de 2.5 é crítico.
// Se o número sorteado for entre 80 e 90, sortear um número entre 1 e 2. Acima de 1.5 é crítico.
// Se o número sorteado for entre 90 e 100 é crítico.