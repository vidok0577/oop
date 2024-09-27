import Character from "./character";

export default class Zombie extends Character {
    type = 'Zombie';
    attack = 40;
    defence = 10;
    constructor (...arg) {
        super(...arg);
    }
}