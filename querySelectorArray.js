
function damageTeste(){
    const totalAtk = ele.atk + greatsword.atack;
    const damageDealt = totalAtk - troll.def;
    return troll.hp - damageDealt;
}

console.log(damageTeste())
