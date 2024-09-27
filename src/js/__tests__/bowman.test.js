import Bowman from "../class/bowman";

test('Тестирование персонажа', () => {
    const result = new Bowman('TestChar');
    const correct = {
        name: 'TestChar',
        type: 'Bowman',
        level: 1,
        health: 100,
        attack: 25,
        defence: 25
    };
    expect(result).toEqual(correct);
});
