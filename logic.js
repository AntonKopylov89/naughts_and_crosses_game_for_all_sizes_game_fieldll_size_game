let players = ['x', 'o'];
let activePlayer = 0;
let board = '';
let rand = '';

function startGame() {
  board = [
  ['', '', '', ''],
  ['', '', '', ''],
  ['', '', '', ''],
  ['', '', '', '']
  ];
  rand = Math.floor(Math.random() * players.length);
  activePlayer = players[rand];
  renderBoard(board);
};

function click(row, column) {
  board[row][column] = activePlayer;
  renderBoard(board);
  function changePlayer() {
    if (activePlayer === players[0]) {
      activePlayer = players[1];
    } else if (activePlayer === players[1]) {
      activePlayer = players[0];
    };
  };
  function str() {
    for (let i = 0; i < board.length; i++) {
      if (board[i].every(value => value === activePlayer)) {
        return true;
      };
    };
  };
  function col() {
    for (let j = 0; j < board[0].length; j++){
      for (let i = 1; i < board.length; i++) {
        if (board[i][j] != board[i-1][j] || board[i][j] === '') {
          break;
        } else if (i === board.length - 1) {
          return true;
        };
      };
    };
  };
  function mainDiag() {
    for (let i = 1; i < board.length; i++) {
      if (board[i][i] != board[i - 1][i -1] || board[i][i] === '') {
        break;
      } else if (i === board.length - 1) {
        return true;
      };
    };
  };
  function diag() {
    for (let i = 1, j = board.length - 1 - i; i < board.length; i++, j--) {
      if (board[i][j] != board[i - 1][j + 1] || board[i][j] === '' ) {
        break;
      } else if (i === board.length - 1) {
        return true;
      };
    };
  };
  if (str() === true || col() === true || mainDiag() === true || diag() === true) {
    showWinner(players.indexOf(activePlayer));
  } else {
    changePlayer();
  };
};


 
  
 


