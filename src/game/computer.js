export default class Computer {
  constructor(name, enemyBoard) {
    this.name = name;
    this.enemyBoard = enemyBoard;
    this.shots = new Set();
  }

  attackEnemy() {
    const [x, y] = this.attackRandom();
    this.enemyBoard.receiveAttack(x, y);
    return [x, y];
  }

  hasEnemyLost() {
    return this.enemyBoard.allSunk();
  }

  attackRandom() {
    let random = () => Math.floor(Math.random() * 10);
    let x = random();
    let y = random();
    while (this.shots.has(`${x}${y}`)) {
      x = random();
      y = random();
    }
    this.shots.add(`${x}${y}`);
    return [x, y];
  }
}
