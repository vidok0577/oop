import Zombie from "../class/zombie";

test('Тестирование персонажа', () => {
    const result = new Zombie('TestChar');
    const correct = {
        name: 'TestChar',
        type: 'Zombie',
        level: 1,
        health: 100,
        attack: 40,
        defence: 10
    };
    expect(result).toEqual(correct);
});
