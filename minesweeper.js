document.addEventListener('DOMContentLoaded', startGame)
document.addEventListener('click', checkForWin)
document.addEventListener('contextmenu', checkForWin)


function startGame () {

  // Don't remove this function call: it makes the game work!

  for (var i = 0; i < board.cells.length; i++) {
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);
    }
  lib.initBoard()
}


function checkForWin () {
    for (var i = 0; i < board.cells.length; i++) {
      if (board.cells[i].isMine === false && board.cells[i].hidden === true) {
      return;
      } 
    }
    for (var i = 0; i < board.cells.length; i++) {
      if (board.cells[i].isMine === true && board.cells[i].isMarked === false) {
      return;
      }
    } 
    lib.displayMessage('You win!')
}


function countSurroundingMines (cell) {
  var surrounding = lib.getSurroundingCells(cell.row, cell.col);
  var count = 0;
  for (var i = 0; i < surrounding.length; i++) {
    if (surrounding[i].isMine) {
      count++;
    }
  }
  return count;
}


// Stretch material below

var restartGameButton = document.getElementById("restart");
restartGameButton.addEventListener('click', restartTheGame);

function restartTheGame() {
  location.reload();
}

var board = generateBoard();

function generateBoard() {
  var cells = []
  
  const cellCreator = (row, col, isMine, isMarked, hidden) => {
    newCell = {
      row: row,
      col: col,
      isMine: isMine,
      isMarked: isMarked,
      hidden: hidden,
    }
      return newCell
    }

  for (var i = 0; i < 6; i++) {
    for (var j = 0; j < 6; j++) {
      cellCreator(i, j, (Math.random() < 0.2), false, true);
      cells.push(newCell);
    } 
  }

  var generatedBoard = {cells}
  return generatedBoard;
}