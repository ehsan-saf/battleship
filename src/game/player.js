export default class Player {
  constructor(name, enemyBoard) {
    this.name = name;
    this.enemyBoard = enemyBoard;
  }

  attackEnemy(x, y) {
    this.enemyBoard.receiveAttack(x, y);
  }

  hasEnemyLost() {
    return this.enemyBoard.allSunk();
  }
}
