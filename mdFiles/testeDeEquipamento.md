```

function mostraStatsEEquips() {
    const nome = "Marqz"

    const warrior = new Character("aqlm3jd19", `${nome}`, 40, 10, 8, 6, null, itens["9y0bcl7gu"], null, null, null, null)

    const p = document.createElement("P")
    document.body.appendChild(p)
    p.innerHTML = `
        Nome: ${warrior.name},
        HP: ${warrior.hp},
        atk: ${warrior.atk},
        def: ${warrior.def},
        Crit Rate: ${warrior.critRate}!
    `

    console.log(warrior)
}

function mostraSoHelmet() {
    const nome = "Marqz"
    // const head = itens["52315rb33"]
    //poderia guardar o itens["52315rb33"] num variavel como acima pra poder melhorar a legibilidade, mas deixei assim pra mostrar que ta funcionando
    // const dracoHelmet = new DracoHelmet("xtajjr7ha", "Draco Helmet", 30, 12, 7)

    const warrior = new Character("aqlm3jd19", `${nome}`, 40, 10, 8, 6, itens["52315rb33"], itens["9y0bcl7gu"], null, null, null, null)

    if(warrior.helmet === null){
        const q = document.createElement("P")
        document.body.appendChild(q)
        q.innerHTML = `
            Cê tá sem helmet meu parsa
        `
    } else if (warrior.helmet === itens["52315rb33"]){

        let totalHp = warrior.hp += itens["52315rb33"].hp;

        const q = document.createElement("P")
        document.body.appendChild(q)
        q.innerHTML = `
            Helmet equipado. Total HP: ${totalHp}
        `
    }
}

mostraStatsEEquips()
mostraSoHelmet();

console.log(mostraSoHelmet())

// const nome = "Marqz"

// const warrior = new Character("aqlm3jd19", `${nome}`, 40, 10, 8, 6, null, GoldenArmour, null, null, null, null)

// console.log(warrior.verificaHelmet(DracoHelmet))


```