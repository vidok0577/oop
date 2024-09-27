import Character from "./character";

export default class Bowman extends Character {
    type = 'Bowman';
    attack = 25;
    defence = 25;
    constructor (...arg) {
        super(...arg);
    }
}