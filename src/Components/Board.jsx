import { useState } from "react";
import SignSquareBox from "./SignSquareBox";
import isWinning from "./IsWinning";

function Board({ noOfSquareBox }) {
  const [SquareBoxes, setSquareBox] = useState(Array(noOfSquareBox).fill(""));
  const [currentState, setCurrentState] = useState(true);
  const [winner, setWinner] = useState(null);

  // Onclick Winning and Draw Logic
  function onClick(index) {
    if (currentState) SquareBoxes[index] = "O";
    else SquareBoxes[index] = "X";

    setSquareBox([...SquareBoxes]);
    let valuesInSquareBox = SquareBoxes.find((val) => val === "");

    let winValue = isWinning(SquareBoxes, currentState ? "O" : "X");
    if (winValue) {
      console.log("winner is", winValue);
      setWinner(winValue);
    } else if (valuesInSquareBox == undefined && winValue === "") {
      setWinner("Draw");
    }
    setCurrentState(!currentState);
  }

  // Game Reset Logic
  function resetBoard() {
    setSquareBox(Array(noOfSquareBox).fill(''));
    setWinner(null);
  }

  return (
    <>
      <div className="flex justify-center flex-col items-center gap-4 w-auto">
        <div className="text-3xl">
          <span>{currentState ? "O" : "X"}'s Turn</span>
        </div>
        <div className="grid grid-cols-3 grid-rows-3">
          {SquareBoxes.map((val, idx) => (<SignSquareBox playerInput={val} key={idx}
              onTap={onClick}
              index={idx}
              gameEnd={winner ? true : false}
            />
          ))}
        </div>

        {/* Winner Rendering  */}
        {(winner == "X" || winner == "O") && (
            <>
              <h1 className="text-2xl bg-green-600 rounded-md px-3 py-1">Congratulations "{winner}" has won!</h1>
              <button className="bg-red-600 rounded-md px-2 py-1" onClick={resetBoard}>Play again</button>
            </>
          )}

        {/* Game Draw Rendering */}
        {winner == "Draw" && (
          <>
            <h1 className="text-2xl bg-white rounded-md px-3 py-1 text-black">Game {winner}</h1>
            <button onClick={resetBoard} className="bg-red-600 rounded-md px-2 py-1">Reset</button>
          </>
        )}
      </div>
    </>
  );
}

export default Board;
