import Swordsman from "../class/swordsman";

test('Тестирование персонажа', () => {
    const result = new Swordsman('TestChar');
    const correct = {
        name: 'TestChar',
        type: 'Swordsman',
        level: 1,
        health: 100,
        attack: 40,
        defence: 10
    };
    expect(result).toEqual(correct);
});
