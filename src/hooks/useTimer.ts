import { clear } from 'console';
import React, { useEffect } from 'react';
import { useToggle } from './useToggle';

/**
 * 
 * @param duration time in seconds 
 */
export function useTimer(duration: number, startPaused: true) {
  const [timeRemaining, setTimeRemaining] = React.useState(duration);
  const [isPaused, togglePause] = useToggle(startPaused);

  const reset = (): void => {
    if (!isPaused) togglePause;
    setTimeRemaining(duration);
  }

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPaused) return;

    if (!isPaused) {
      interval = setInterval(() => {
        setTimeRemaining(timeRemaining => timeRemaining - 1);
      }, 1000);
    } ;
    
    if (timeRemaining <= 0) {
      togglePause();
      setTimeRemaining(0);
    }

    return () => clearInterval(interval);
  }, [isPaused, timeRemaining, togglePause])

  return {
    timeRemaining,
    togglePause,
    reset,
  }

}