import Gloves from "./backend/Equipment/Gloves.js";
import Helmet from "./backend/Equipment/Helmet.js";
import UpperBody from "./backend/Equipment/UpperBody.js";
import Shoes from "./backend/Equipment/Shoes.js";
import Sword from "./backend/Equipment/Sword.js";
import Character from "./app/Classes/Character.js";

const delmoreHelmet = new Helmet(20, 8, 6);
const delmoreBody = new UpperBody(45, 15, 8);
const delmoreShoes = new Shoes(12, 6, 10);
const delmoreGloves = new Gloves(10, 5, 14);
const almaSword = new Sword(25, 18);
const almaDagger = new Sword(10, 20);

const ninja = new Character(40, 35, 19, 20);

function buildCharacter(character, head, body, foot, hands, primaryWeapon, secondaryWeapon){
    const charTotalHp = character.hp + head.hp + body.hp + foot.hp + hands.hp;
    const charTotalAtk = character.atk + primaryWeapon.atk + secondaryWeapon.atk;
    const totalCritRate = character.critRate + primaryWeapon.critRate + secondaryWeapon.critRate;

    console.log("Esse personagem possui " + charTotalHp + " hp, " + charTotalAtk + " atk e " + totalCritRate + " taxa critica");

}

buildCharacter(ninja, delmoreHelmet, delmoreBody, delmoreShoes, delmoreGloves, almaSword, almaDagger);