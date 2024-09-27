export default class Character {
    // types = {
    //     'Bowman': [25, 25],
    //     'Swordsman': [40, 10],
    //     'Magician': [10, 40],
    //     'Daemon': [10, 40],
    //     'Undead': [25, 25],
    //     'Zombie': [40, 10]
    // }

    constructor(name, type, attack, defence){
        this._name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
        this.attack = attack;
        this.defence = defence;
    }

    get _name() {
        return this.name;
    }

    set _name(value) {
        if (value.length <= 2) {
            throw new Error('Слишком короткое имя, должно быть минимум 2 символа');
        } else if (value.length >= 10) {
            throw new Error('Слишком длинное имя, должно быть максимум 10 символов');
        }
        this.name = value;
    }

    levelUp() {
        if (this.health == 0) throw new Error('Нельзя повысить левел умершего');
        this.level += 1;
        this.attack += this.attack * 0.2;
        this.defence += this.defence * 0.2;
        this.health = 100;
    }

    damage(points) {
        const healthTemp = this.health - points * (1 - this.defence / 100);
        this.health = (healthTemp > 0) ? healthTemp : 0;
    }
}