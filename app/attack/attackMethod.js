

function atacar(atacante, espada, atacado){
    const danoResultante = (atacante.atk + espada.atk) - atacado.def;
    const hpResultante = atacado.hp - danoResultante;
    return hpResultante;
}

export default atacar;



// async function exemplo() {
//     let promessa = new Promise((resolve, reject) => {
//         setTimeout(() => resolve("finalizado"), 1000);
//     });

//     let resultado = await promessa;
//     console.log(resultado); // "finalizado"
// }

// exemplo();