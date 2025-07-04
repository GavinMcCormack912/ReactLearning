import Player from './components/Player.jsx';
import { useState } from 'react';
import Gameboard from './components/Gameboard.jsx';
import Log from './components/Log.jsx';
import { WINNING_COMBINATIONS } from './winning-combinations.js';
import Gameover from './components/Gameover.jsx';

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];


function deriveActivePlayer(gameTurns) {
  let currPlayer = 'X';
  if(gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currPlayer = 'O';
  }

  return currPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [playerNames, setPlayerNames] = useState({
    'X': 'Player 1',
    'O': 'Player 2',
  });
  function handleRestart() {
    setGameTurns([]);
  }
  const currPlayer = deriveActivePlayer(gameTurns);

   let gameBoard = [...initialGameBoard.map(array => [...array])];

    for (const turn of gameTurns) {
        const {square, player} = turn;
        const { row, col } = square;

        gameBoard[row][col] = player;
    }

  let winner = null;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
      winner = playerNames[firstSquareSymbol];
    }
  }

  const hasDraw = gameTurns.length == 9 && !winner;

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      const updatedTurns = [ {square: { row: rowIndex, col: colIndex }, 
        player: currPlayer},
        ...prevTurns
      ];

      return updatedTurns;
    });
  }

  function handleNameChange(symbol, newName) {
    setPlayerNames((oldNames) => {
      return {
        ...oldNames,
        [symbol]: newName
      }
    });
  }
  return (
    <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player 
              initialName="Player 1"
              symbol="X"
              isActive = {currPlayer === 'X'}
              onChangeName={handleNameChange}
            />
            <Player 
              initialName="Player 2"
              symbol="O"
              isActive = {currPlayer === 'O'}
              onChangeName={handleNameChange}
            />
          </ol>
          {(winner || hasDraw) && <Gameover winner={winner} onRestart={handleRestart}/>}
          <Gameboard onSelectSquare={handleSelectSquare} board={gameBoard}/>
        </div>
        <Log turns={gameTurns}/>
    </main>
  );
}

export default App
