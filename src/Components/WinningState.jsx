import React from 'react'

function WinningState({ reset }) {
  return (
    <>
        <h2>You Win!</h2>
        <button onClick={reset}>Play again?</button>
    </>
  )
}

export default WinningState