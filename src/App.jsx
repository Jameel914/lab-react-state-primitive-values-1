import React, { useState } from "react";
import WinningState from "./Components/WinningState";
import PlayingState from "./Components/PlayingState";
import "./App.css";

function App () {
  const [score, setScore] = useState(0);
  const [increase, setIncrease] = useState(1);

  function updateCurrentScore() {
    setScore(score + increase);
  }

  function updateIncrease() {
    if (score >= 10) {
      setScore(score - 10); // remove 10 points from score
      setIncrease(increase + 1); //set increment
    } else {
      alert("you can't afford that!");
    }
  }

  function reset() {
    setScore(0);
    setIncrease(1);
  }
    return (
      <main>

        {score < 100 ? (
           <PlayingState 
              score={score}
              increase={increase}
              updateCurrentScore={updateCurrentScore}
              updateIncrease={updateIncrease} 
           />
       
         ) : (
           <WinningState reset={reset} />
         )}
      </main>
  );
}

export default App;
