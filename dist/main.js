/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom/controls.js":
/*!*****************************!*\
  !*** ./src/dom/controls.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initControls)\n/* harmony export */ });\n/* harmony import */ var _game_randomfleet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game/randomfleet */ \"./src/game/randomfleet.js\");\n/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grid */ \"./src/dom/grid.js\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! .. */ \"./src/index.js\");\n\r\n\r\n\r\n\r\nlet inputGroup = null;\r\n\r\nlet player1Input = null;\r\nlet player2Input = null;\r\n\r\nlet startButton = null;\r\nlet computerMode = null;\r\n\r\nlet name1 = null;\r\nlet name2 = null;\r\n\r\nfunction initStartMenu() {\r\n  inputGroup = document.querySelector(\".input-group\");\r\n\r\n  player1Input = document.getElementById(\"player1-input\");\r\n  player2Input = document.getElementById(\"player2-input\");\r\n\r\n  computerMode = document.getElementById(\"computer-mode\");\r\n\r\n  startButton = document.querySelector(\".start-button\");\r\n\r\n  name1 = document.getElementById(\"name1\");\r\n  name2 = document.getElementById(\"name2\");\r\n\r\n  computerMode.addEventListener(\"change\", (e) => {\r\n    if (e.target.checked) {\r\n      player2Input.closest(\"label\").style.display = \"none\";\r\n    } else {\r\n      player2Input.closest(\"label\").style.display = \"flex\";\r\n    }\r\n  });\r\n\r\n  startButton.addEventListener(\"click\", () => {\r\n    (0,_grid__WEBPACK_IMPORTED_MODULE_1__.enableAttackGrid)(1);\r\n    inputGroup.classList.add(\"hide-animation\");\r\n    setTimeout(() => {\r\n      inputGroup.style.display = \"none\";\r\n    }, 2000);\r\n\r\n    if (player1Input.value.trim() !== \"\") {\r\n      name1.textContent = player1Input.value.trim();\r\n    }\r\n    if (player2Input.value.trim() !== \"\") {\r\n      name2.textContent = player2Input.value.trim();\r\n    }\r\n    if (computerMode.checked) {\r\n      name2.textContent = \"Computer\";\r\n    }\r\n    (0,___WEBPACK_IMPORTED_MODULE_2__.startGame)();\r\n  });\r\n}\r\n\r\nfunction initRandomButton() {\r\n  const btn = document.querySelector(\".random-button\");\r\n\r\n  btn.addEventListener(\r\n    \"click\",\r\n    (e) => {\r\n      e.preventDefault();\r\n\r\n      // Play pressing animation\r\n      btn.classList.remove(\"random-button-click\");\r\n      void btn.offsetWidth;\r\n      btn.classList.add(\"random-button-click\");\r\n\r\n      // Create random board\r\n      const randomFleet = new _game_randomfleet__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n      const board = randomFleet.randomBoard();\r\n      (0,_grid__WEBPACK_IMPORTED_MODULE_1__.printGrid)(board.grid, 1);\r\n    },\r\n    false\r\n  );\r\n}\r\n\r\nfunction initControls() {\r\n  initStartMenu();\r\n  initRandomButton();\r\n}\r\n\n\n//# sourceURL=webpack://template/./src/dom/controls.js?");

/***/ }),

/***/ "./src/dom/general.js":
/*!****************************!*\
  !*** ./src/dom/general.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initDom)\n/* harmony export */ });\n/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controls */ \"./src/dom/controls.js\");\n/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grid */ \"./src/dom/grid.js\");\n\r\n\r\n\r\nfunction initDom() {\r\n  (0,_grid__WEBPACK_IMPORTED_MODULE_1__.initGrids)();\r\n  (0,_controls__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n}\r\n\n\n//# sourceURL=webpack://template/./src/dom/general.js?");

/***/ }),

/***/ "./src/dom/grid.js":
/*!*************************!*\
  !*** ./src/dom/grid.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   enableAttackGrid: () => (/* binding */ enableAttackGrid),\n/* harmony export */   initGrids: () => (/* binding */ initGrids),\n/* harmony export */   printGrid: () => (/* binding */ printGrid)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ \"./src/index.js\");\n\r\n\r\nlet lockedSound = null;\r\n\r\nconst boards = document.querySelector(\".grids\");\r\n\r\nconst grids = [];\r\n\r\nfunction styleAttackedCell(cell, isEmpty) {\r\n  if (isEmpty) {\r\n    cell.textContent = \"⚫\";\r\n    cell.classList.add(\"empty-attack\");\r\n    //  if it's empty, disable and mark it as an empty attacked cell in css\r\n  } else {\r\n    cell.textContent = \"❌\";\r\n    cell.classList.add(\"ship-attack\");\r\n    //  if there is a ship, disable and mark it as an attacked ship\r\n  }\r\n}\r\n\r\nfunction cellHover(e) {\r\n  const cell = e.target;\r\n  const grid = cell.closest(\".grid\");\r\n  if (grid.classList.contains(\"attack\")) {\r\n    cell.classList.add(\"target-cell\");\r\n    lockedSound.currentTime = 0;\r\n    lockedSound.play();\r\n  }\r\n}\r\n\r\nfunction attackCell(e) {\r\n  const cell = e.target;\r\n  const x = Number(cell.dataset.x);\r\n  const y = Number(cell.dataset.y);\r\n  // Check whether it's an empty cell or has a ship on it\r\n  const board = (0,___WEBPACK_IMPORTED_MODULE_0__.targetBoard)();\r\n  console.log(board);\r\n  styleAttackedCell(cell, board.isCellEmpty(x, y));\r\n  (0,___WEBPACK_IMPORTED_MODULE_0__.play)(x, y);\r\n}\r\n\r\nfunction createCell() {\r\n  const cell = document.createElement(\"div\");\r\n  cell.classList.add(\"cell\");\r\n  cell.addEventListener(\"mouseover\", cellHover);\r\n  cell.addEventListener(\"mouseleave\", (e) => {\r\n    e.target.classList.remove(\"target-cell\");\r\n    lockedSound.pause();\r\n  });\r\n  cell.addEventListener(\"click\", attackCell);\r\n  return cell;\r\n}\r\n\r\nfunction createGridContainer(gridID) {\r\n  const gridName = document.createElement(\"div\");\r\n  const playerName = document.createElement(\"p\");\r\n  gridName.classList.add(\"grid-name\");\r\n  playerName.classList.add(\"player-name\");\r\n  playerName.id = `name${gridID}`;\r\n  playerName.textContent = `Player ${gridID}`;\r\n  gridName.appendChild(playerName);\r\n  return gridName;\r\n}\r\n\r\nfunction createGrid(gridID) {\r\n  lockedSound = new Audio(\"./sound/target-locked.mp3\");\r\n  const grid = document.createElement(\"div\");\r\n  grid.classList.add(\"grid\");\r\n  grids.push(grid);\r\n  grid.id = `grid${gridID}`;\r\n  for (let x = 0; x < 10; x += 1) {\r\n    for (let y = 0; y < 10; y += 1) {\r\n      const cell = createCell();\r\n      cell.dataset.x = x;\r\n      cell.dataset.y = y;\r\n      grid.appendChild(cell);\r\n    }\r\n  }\r\n  const gridNameContainer = createGridContainer(gridID);\r\n  gridNameContainer.appendChild(grid);\r\n  boards.appendChild(gridNameContainer);\r\n}\r\n\r\nfunction initGrids() {\r\n  createGrid(1);\r\n  createGrid(2);\r\n}\r\n\r\nfunction printGrid(array, gridID) {\r\n  const grid = document.getElementById(`grid${gridID}`);\r\n  const cells = grid.querySelectorAll(\".cell\");\r\n  cells.forEach((cell) => {\r\n    cell.classList.remove(\"ship\");\r\n  });\r\n  let x = 0;\r\n  let y = 0;\r\n  cells.forEach((cell) => {\r\n    if (array[x][y] !== 0) {\r\n      cell.classList.add(\"ship\");\r\n    }\r\n    y += 1;\r\n    if (y === 10) {\r\n      y = 0;\r\n      x += 1;\r\n    }\r\n  });\r\n}\r\n\r\nfunction enableAttackGrid(gridIndex) {\r\n  grids[gridIndex].classList.add(\"attack\");\r\n  grids[gridIndex].classList.remove(\"disable\");\r\n  const otherIndex = gridIndex === 0 ? 1 : 0;\r\n  grids[otherIndex].classList.remove(\"attack\");\r\n  grids[otherIndex].classList.add(\"disable\");\r\n}\r\n\n\n//# sourceURL=webpack://template/./src/dom/grid.js?");

/***/ }),

/***/ "./src/game/computer.js":
/*!******************************!*\
  !*** ./src/game/computer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Computer)\n/* harmony export */ });\nclass Computer {\r\n  constructor(enemyBoard) {\r\n    this.enemyBoard = enemyBoard;\r\n    this.shots = new Set();\r\n  }\r\n\r\n  attackEnemy() {\r\n    let [x, y] = this.attackRandom();\r\n    this.enemyBoard.receiveAttack(x, y);\r\n    return [x, y];\r\n  }\r\n\r\n  hasEnemyLost() {\r\n    return this.enemyBoard.allSunk();\r\n  }\r\n\r\n  attackRandom() {\r\n    let random = () => Math.floor(Math.random() * 10);\r\n    let x = random();\r\n    let y = random();\r\n    while (this.shots.has(`${x}${y}`)) {\r\n      x = random();\r\n      y = random();\r\n    }\r\n    this.shots.add(`${x}${y}`);\r\n    return [x, y];\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://template/./src/game/computer.js?");

/***/ }),

/***/ "./src/game/gameboard.js":
/*!*******************************!*\
  !*** ./src/game/gameboard.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Gameboard)\n/* harmony export */ });\nclass Gameboard {\r\n  constructor() {\r\n    this.grid = Array(10)\r\n      .fill(10)\r\n      .map(() => Array(10).fill(0));\r\n    this.ships = {};\r\n  }\r\n\r\n  placeShip(coordinates, name) {\r\n    coordinates.forEach((co) => {\r\n      const [x, y] = co;\r\n      this.grid[x][y] = name;\r\n    });\r\n  }\r\n\r\n  receiveAttack(x, y) {\r\n    if (this.grid[x][y] === 0) {\r\n      this.grid[x][y] = 1;\r\n    } else {\r\n      this.ships[this.grid[x][y]].hit();\r\n    }\r\n  }\r\n\r\n  isCellEmpty(x, y) {\r\n    console.log(`Is this coordinate empty ? -> x: ${x} y: ${y}`);\r\n    console.log(this.grid[x][y]);\r\n    return this.grid[x][y] === 0;\r\n  }\r\n\r\n  allSunk() {\r\n    const ships = Object.values(this.ships);\r\n    return ships.every((sh) => sh.isSunk());\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://template/./src/game/gameboard.js?");

/***/ }),

/***/ "./src/game/player.js":
/*!****************************!*\
  !*** ./src/game/player.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Player)\n/* harmony export */ });\nclass Player {\r\n  constructor(enemyBoard) {\r\n    this.enemyBoard = enemyBoard;\r\n  }\r\n\r\n  attackEnemy(x, y) {\r\n    this.enemyBoard.receiveAttack(x, y);\r\n  }\r\n\r\n  hasEnemyLost() {\r\n    return this.enemyBoard.allSunk();\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://template/./src/game/player.js?");

/***/ }),

/***/ "./src/game/randomfleet.js":
/*!*********************************!*\
  !*** ./src/game/randomfleet.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ RandomFleet)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/game/gameboard.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ \"./src/game/ship.js\");\n\r\n\r\n\r\nclass RandomFleet {\r\n  constructor() {\r\n    this.board = new _gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n    this.occupied = new Set();\r\n  }\r\n\r\n  randomBoard() {\r\n    console.log(\":::::Random Fleet Created:::::\");\r\n    this.board = new _gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n    this.occupied = new Set();\r\n    const carrier = new _ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"](5);\r\n    const battleShip = new _ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"](4);\r\n    const destroyer = new _ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"](3);\r\n    const submarine = new _ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"](3);\r\n    const patrolBoat = new _ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"](2);\r\n    const shipLengths = [2, 3, 3, 4, 5];\r\n    const shipNames = [\"p\", \"s\", \"d\", \"b\", \"c\"];\r\n    this.board.ships = {\r\n      c: carrier,\r\n      b: battleShip,\r\n      d: destroyer,\r\n      s: submarine,\r\n      p: patrolBoat,\r\n    };\r\n    while (shipLengths.length !== 0) {\r\n      let shipPlaced = this.placeRandom(shipLengths.at(-1), shipNames.at(-1));\r\n      while (!shipPlaced) {\r\n        shipPlaced = this.placeRandom(shipLengths.at(-1), shipNames.at(-1));\r\n      }\r\n      shipLengths.pop();\r\n      shipNames.pop();\r\n    }\r\n    return this.board;\r\n  }\r\n\r\n  placeRandom(length, name) {\r\n    const getRandom = () => Math.floor(Math.random() * 10);\r\n    const isVertical = Math.floor(Math.random() * 2) === 1;\r\n    let ship = [];\r\n    let x = getRandom();\r\n    let y = getRandom();\r\n    if (this.areCoordinatesOk([x, y], isVertical, length)) {\r\n      for (let i = 1; i <= length; i += 1) {\r\n        if (isVertical) {\r\n          y += 1;\r\n        } else {\r\n          x += 1;\r\n        }\r\n        ship.push([x, y]);\r\n        this.occupied.add(`${x}${y}`);\r\n      }\r\n      this.board.placeShip(ship, name);\r\n      return true;\r\n    }\r\n    return false;\r\n  }\r\n\r\n  areCoordinatesOk(coordinates, isVertical, length) {\r\n    let [x, y] = coordinates;\r\n    for (let i = 1; i <= length; i += 1) {\r\n      if (isVertical) {\r\n        y += 1;\r\n      } else {\r\n        x += 1;\r\n      }\r\n      if (this.occupied.has(`${x}${y}`) || x > 9 || y > 9) {\r\n        return false;\r\n      }\r\n    }\r\n    return true;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://template/./src/game/randomfleet.js?");

/***/ }),

/***/ "./src/game/ship.js":
/*!**************************!*\
  !*** ./src/game/ship.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Ship)\n/* harmony export */ });\nclass Ship {\r\n  constructor(length) {\r\n    this.length = length;\r\n    this.hits = 0;\r\n  }\r\n\r\n  hit() {\r\n    this.hits += 1;\r\n  }\r\n\r\n  isSunk() {\r\n    return this.hits === this.length;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://template/./src/game/ship.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   play: () => (/* binding */ play),\n/* harmony export */   startGame: () => (/* binding */ startGame),\n/* harmony export */   targetBoard: () => (/* binding */ targetBoard)\n/* harmony export */ });\n/* harmony import */ var _dom_general__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/general */ \"./src/dom/general.js\");\n/* harmony import */ var _game_randomfleet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game/randomfleet */ \"./src/game/randomfleet.js\");\n/* harmony import */ var _dom_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom/grid */ \"./src/dom/grid.js\");\n/* harmony import */ var _game_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game/player */ \"./src/game/player.js\");\n/* harmony import */ var _game_computer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game/computer */ \"./src/game/computer.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_dom_general__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\r\nconst randomFleet = new _game_randomfleet__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\nconst board1 = randomFleet.randomBoard();\r\nconst board2 = randomFleet.randomBoard();\r\nlet turn = 1;\r\n\r\nlet player = null;\r\nlet computer = null;\r\n\r\nfunction targetBoard() {\r\n  if (turn === 1) {\r\n    return player.enemyBoard;\r\n  }\r\n  return computer.enemyBoard;\r\n}\r\n\r\n(0,_dom_grid__WEBPACK_IMPORTED_MODULE_2__.printGrid)(board1.grid, 1);\r\n\r\nfunction startGame() {\r\n  player = new _game_player__WEBPACK_IMPORTED_MODULE_3__[\"default\"](board2);\r\n  computer = new _game_computer__WEBPACK_IMPORTED_MODULE_4__[\"default\"](board1);\r\n}\r\n\r\nfunction play(x, y) {\r\n  console.log(player);\r\n  if (turn === 1) {\r\n    player.attackEnemy(x, y);\r\n  } else {\r\n    computer.attackEnemy(x, y);\r\n  }\r\n  (0,_dom_grid__WEBPACK_IMPORTED_MODULE_2__.enableAttackGrid)(turn - 1);\r\n  turn = turn === 1 ? 2 : 1;\r\n}\r\n\n\n//# sourceURL=webpack://template/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;