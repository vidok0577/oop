import Character from "./character";

export default class Undead extends Character {
    type = 'Undead';
    attack = 25;
    defence = 25;
    constructor (...arg) {
        super(...arg);
    }
}