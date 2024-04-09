class computer {
  constructor(enemyBoard) {
    this.enemyBoard = enemyBoard;
    this.shots = new Set();
  }

  attackEnemy() {
    let [x, y] = this.attackRandom();
    this.enemyBoard.receiveAttack(x, y);
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
