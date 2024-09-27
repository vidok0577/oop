import Character from "./character";

export default class Magician extends Character {
    type = 'Magician';
    attack = 10;
    defence = 40;
    constructor (...arg) {
        super(...arg);
    }
}