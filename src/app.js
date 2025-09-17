export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Такой персонаж уже в команде');
    }
    this.members.add(character);
  }

  addAll(...characters) {
    characters.forEach((ch) => this.members.add(ch));
  }

  toArray() {
    return [...this.members];
  }
}