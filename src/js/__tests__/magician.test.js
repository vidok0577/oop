import Magician from "../class/magician";

test('Тестирование персонажа', () => {
    const result = new Magician('TestChar');
    const correct = {
        name: 'TestChar',
        type: 'Magician',
        level: 1,
        health: 100,
        attack: 10,
        defence: 40
    };
    expect(result).toEqual(correct);
});
