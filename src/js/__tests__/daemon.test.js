import Daemon from "../class/daemon";

test('Тестирование персонажа', () => {
    const result = new Daemon('TestChar');
    const correct = {
        name: 'TestChar',
        type: 'Daemon',
        level: 1,
        health: 100,
        attack: 10,
        defence: 40
    };
    expect(result).toEqual(correct);
});
