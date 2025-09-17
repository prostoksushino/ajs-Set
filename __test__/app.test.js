import Team from '../src/app.js';


describe('Team class', () => {
  test('добавление нового персонажа в команду', () => {
    const team = new Team();
    const archer = { name: 'Лучник' };

    team.add(archer);

    expect(team.toArray()).toContain(archer);
    expect(team.toArray().length).toBe(1);
  });

  test('ошибка при повторном добавлении одного и того же персонажа', () => {
    const team = new Team();
    const mage = { name: 'Маг' };

    team.add(mage);

    expect(() => team.add(mage)).toThrow('Такой персонаж уже в команде');
  });

  test('addAll добавляет несколько разных персонажей и игнорирует дубликаты', () => {
    const team = new Team();
    const warrior = { name: 'Воин' };
    const archer = { name: 'Лучник' };

    team.addAll(warrior, archer, warrior);

    const members = team.toArray();

    expect(members).toContain(warrior);
    expect(members).toContain(archer);
    expect(members.length).toBe(2);
  });

  test('toArray возвращает массив со всеми персонажами', () => {
    const team = new Team();
    const mage = { name: 'Маг' };

    team.add(mage);

    const arr = team.toArray();

    expect(Array.isArray(arr)).toBe(true);
    expect(arr).toEqual([mage]);
  });
});
