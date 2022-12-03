import { useCallback, useEffect, useState } from 'react';

function actionByKey(key: string) {
  const keyActionMap: { [k: string]: string } = {
    KeyW: 'moveForward',
    KeyS: 'moveBackward',
    KeyA: 'moveLeft',
    KeyD: 'moveRight',
    Space: 'jump',
    ShiftLeft: 'running',
    Digit1: 'dirt',
    Digit2: 'grass',
    Digit3: 'glass',
    Digit4: 'wood',
    Digit5: 'log',
  };
  return keyActionMap[key];
}

export const useKeyboard = () => {
  const [actions, setActions] = useState({
      moveForward: false,
      moveBackward: false,
      moveLeft: false,
      moveRight: false,
      jump: false,
      running: false,
      dirt: false,
      grass: false,
      glass: false,
      wood: false,
      log: false,
    }),
    handleKeyDown = useCallback((e: KeyboardEvent) => {
      const action = actionByKey(e.code);
      if (action) setActions((prev) => ({ ...prev, [action]: true }));
    }, []),
    handleKeyUp = useCallback((e: KeyboardEvent) => {
      const action = actionByKey(e.code);
      if (action) setActions((prev) => ({ ...prev, [action]: false }));
    }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);
    return () => {
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('keyup', handleKeyUp);
    };
  }, [handleKeyDown, handleKeyUp]);

  return actions;
};
