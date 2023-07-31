import React from 'react'

function PlayingState({ score, increase, updateCurrentScore, updateIncrease }) {
  return (
    <>
    <h1>Current Score: {score}</h1>
    <button onClick={updateCurrentScore}>+{increase}</button>
    <button onClick={updateIncrease}>Pay 10 points to change 
    from +{increase} to +{increase + 1}</button>
    </>
  )
}

export default PlayingState