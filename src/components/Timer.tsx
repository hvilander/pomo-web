import React from 'react';
import {useTimer} from '../hooks'

interface Props {
  duration: number;
}
export default function Timer({duration}: Props): React.ReactElement {

  const {timeRemaining, togglePause, reset} = useTimer(duration, true);




  return (
    <>
    <div>{timeRemaining}</div>
    <button onClick={togglePause}>Toggle Pause</button>
    <button onClick={reset}>Restart Timer</button>
    </>

  )
}
