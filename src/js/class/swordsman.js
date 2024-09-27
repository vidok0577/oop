import Character from "./character";

export default class Swordsman extends Character {
    type = 'Swordsman';
    attack = 40;
    defence = 10;
    constructor (...arg) {
        super(...arg);
    }
}