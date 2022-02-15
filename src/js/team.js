export default class Team {
  constructor() {
    this.team = [];
  }

  add(obj) {
    this.team.push(obj);
  }

  * [Symbol.iterator]() {
    for (let item = 0; item < this.team.length; item += 1) {
      yield this.team[item];
    }
  }
}
