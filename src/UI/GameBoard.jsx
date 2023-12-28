import React, { useState, useEffect } from "react";

export default function GameBoard() {
  const [numRows] = useState(3);
  const [numCols] = useState(3);
  const [board, setBoard] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);

  // Function to create the initial board
  const createBoard = () => {
    let newBoard = [];
    for (let i = 0; i < numRows; i++) {
      let row = [];
      for (let j = 0; j < numCols; j++) {
        row.push(null);
      }
      newBoard.push(row);
    }
    setBoard(newBoard);
    setWinner(null);
  };

  // Effect to initialize the board when the component mounts
  useEffect(() => {
    createBoard();
  }, []); // Empty dependency array means it only runs once when the component mounts

  // Handle cell click
  const handleCellClick = (row, col) => {
    if (!winner && board[row][col] === null) {
      const newBoard = board.map((currentRow, rowIndex) =>
        rowIndex === row
          ? currentRow.map((cell, colIndex) =>
              colIndex === col ? currentPlayer : cell
            )
          : currentRow
      );
      setBoard(newBoard);
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X"); // Switch players
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Tic Tac Toe</h1>
      {winner ? (
        <h2 className="text-2xl text-blue-600">
          {winner === "Tie" ? "It's a tie!" : `Player ${winner} wins!`}
        </h2>
      ) : (
        <h3 className="text-md text-gray-600 mb-2">
          Current Player: {currentPlayer}
        </h3>
      )}
      <button
        onClick={createBoard}
        className="mb-4 bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 focus:outline-none"
      >
        Restart Game
      </button>

      {/* Render the board */}
      <div className="grid grid-rows-3 gap-2">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="flex">
            {row.map((cell, colIndex) => (
              <button
                key={`${rowIndex}-${colIndex}`}
                onClick={() => handleCellClick(rowIndex, colIndex)}
                className={`w-24 h-24 border-2 border-gray-300 ${
                  cell ? "bg-blue-200" : "bg-white"
                } flex items-center justify-center text-2xl font-bold rounded hover:bg-blue-100 focus:outline-none ${
                  winner ? "cursor-not-allowed" : "cursor-pointer"
                }`}
                disabled={!!winner}
              >
                {cell}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
