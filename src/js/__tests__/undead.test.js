import Undead from "../class/undead";

test('Тестирование персонажа', () => {
    const result = new Undead('TestChar');
    const correct = {
        name: 'TestChar',
        type: 'Undead',
        level: 1,
        health: 100,
        attack: 25,
        defence: 25
    };
    expect(result).toEqual(correct);
});
