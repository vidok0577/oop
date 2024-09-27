import Character from "./character";

export default class Daemon extends Character {
    type = 'Daemon';
    attack = 10;
    defence = 40;
    constructor (...arg) {
        super(...arg);
    }
}