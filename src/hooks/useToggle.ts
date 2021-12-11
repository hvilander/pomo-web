import React from 'react';

export function useToggle(initalState: boolean = false): [boolean, () => void] {
  const [current, setCurrent] = React.useState(initalState);

  const handleToggle = (): void => {
    setCurrent(!current)
  }

  return [current, handleToggle];
}