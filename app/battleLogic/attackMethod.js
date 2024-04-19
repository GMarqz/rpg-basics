// function atacar(personagem, item) {
//     const danoTotal = personagem.calcularDano(item);
//     // Aqui você pode aplicar a lógica de ataque com o dano calculado
//     console.log(`Dano total do ataque: ${danoTotal}`);
//     // Por exemplo, subtrair o dano do HP do inimigo
//   }

// function atacar(atacante, espada, atacado){
//     const danoResultante = (atacante.atk + espada.atk) - atacado.def;
//     const hpResultante = atacado.hp - danoResultante;
//     return hpResultante;
// }

function atacar(atacante, sword, atacado){
    const danoResultante = atacante.calcularDano(sword) - atacado.def;
    const hpResultante = atacado.hp - danoResultante;
    return hpResultante;
}

export default atacar;
