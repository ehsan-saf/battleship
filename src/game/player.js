class Player {
  constructor(enemyBoard) {
    this.enemyBoard = enemyBoard;
  }

  attackEnemy(x, y) {
    this.enemyBoard.receiveAttack(x, y);
  }

  hasLost() {
    return this.enemyBoard.allSunk();
  }
}
