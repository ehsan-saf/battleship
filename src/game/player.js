class Player {
  constructor(enemyBoard) {
    this.enemyBoard = enemyBoard;
  }

  attackEnemy(x, y) {
    this.enemyBoard.receiveAttack(x, y);
  }

  hasEnemyLost() {
    return this.enemyBoard.allSunk();
  }
}
