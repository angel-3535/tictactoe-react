import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Style.css'




/*----- constants -----*/
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6], 
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function App() {


  /*----- app's state (variables) -----*/
  const [board, setBoard] = React.useState([ '','','','','','','','','']);
  const [turn, setTurn] = React.useState('X');
  const [win, setWin] = React.useState(null);

  function getWinner() {
    let winner = null;
    winningCombos.forEach(function(combo, index) {
        if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) winner = board[combo[0]];
    });
    return winner ? winner : board.includes('') ? null : 'T';
}

  function handleTurn(event) { 
    let idx = event.target.id;
    let newBoard = [...board];
    newBoard[idx] = turn;
    setBoard(newBoard);
    setTurn(turn === 'X' ? 'O' : 'X');
    setWin(getWinner());
}; 

  function Message(){
    if(win!=null){
      return(
        <h2>{turn} is the winner!</h2>
      )
    } 
    return(
      <h2>It's {turn}'s turn!</h2>
    );
  }


  return (
    <>
      <h1>Tic-Tac-Toe</h1>
      <Message/ >
      <div className="flex-container flex-column">
      <div className="flex-container flex-wrap" id="board" onClick={handleTurn}>
        {
          board.map((data, index)=> {
            return <div id = {index} className="square">{data}</div>
          })
        }
      </div>
       <button id="reset-button">reset</button>
      </div>
    </>
  )
}

export default App
