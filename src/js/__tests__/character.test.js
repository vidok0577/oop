import Zombie from "../class/zombie";

const damageList = [
    [50, 55],
    [110, 1],
    [115, 0],
]

test('тестирование ограничения имени', () => {
    expect(() => (new Zombie('T'))).toThrow('2');
    expect(() => (new Zombie('T1234567890'))).toThrow('10');
});

test.each(damageList)('Тестирование damage персонажа', (damage, expected) => {
    const char = new Zombie('TestChar');
    char.damage(damage);
    expect(char.health).toBe(expected);
});

test('Тестирование levelUp персонажа', () => {
    const char = new Zombie('TestChar');
    const correct = {
        name: 'TestChar',
        type: 'Zombie',
        level: 2,
        health: 100,
        attack: 48,
        defence: 12
    };
    char.health = 45;
    char.levelUp();
    expect(char).toEqual(correct);
});

test('Тестирование levelUp персонажа c 0 health', () => {
    const char = new Zombie('TestChar');
    char.health = 0;
    expect(() => char.levelUp()).toThrow();
});
