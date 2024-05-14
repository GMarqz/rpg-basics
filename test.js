import Character from "./app/Classes/Character.js";
import GoldenArmour from "./app/dataBase/items/body/GoldenArmour.js";
import Luva from "./app/dataBase/items/gloves/Luva.js";
import UsanGlasses from "./app/dataBase/items/head/UsanGlasses.js";
import WingShoes from "./app/dataBase/items/shoes/WingShoes.js";
import IronSword from "./app/dataBase/items/sword/IronSword.js";

const listandoEquips = [
  new GoldenArmour(),
  new Luva(),
  new UsanGlasses(),
  new WingShoes(),
  new IronSword()
]

const enemyEquips = {
  armour: {
    hp: 100,
    atk: 42,
    def: 20,
    evasion: 20,
    speed: 10,
    critRate: 80
  },

  head: {
    hp: 10,
    atk: 42,
    def: 20,
    evasion: 20,
    speed: 10,
    critRate: 80
  }
}

const horyu = new Character(1, "Horyu", 40, 31, 26, 0, 5, 60, listandoEquips[2], listandoEquips[0], listandoEquips[1], listandoEquips[3], listandoEquips[4], listandoEquips[4])

/// Por algum motivo, a instancia da classe NÃO está contando os stats definidos da classe, como hp 40 por exemplo

console.log(horyu.hp)