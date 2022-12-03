import { CSSProperties, useEffect, useState } from 'react';
import Game from './components/Game';
import { useStore } from './hooks/useStore';

const fullScreenStyle: CSSProperties = { width: '100vw', height: '100vh' };
const beforeScreenStyle: CSSProperties = { width: '50vw', height: '50vh' };
const appStyle: CSSProperties = { display: 'flex', flexDirection: 'column', textAlign: 'center' };

function App() {
  const fullScreen = useStore((s) => s.fullScreen);
  const [style, setStyle] = useState(fullScreenStyle);

  // TODO: improve this way to resize to the actual window size
  useEffect(() => {
    const myTimeout = setTimeout(() => setStyle(fullScreenStyle), 100);
    setStyle(beforeScreenStyle);
    return () => clearTimeout(myTimeout);
  }, [fullScreen]);

  return (
    <div style={{ ...appStyle, ...style }}>
      <h1 hidden={fullScreen}>⛏️ Mine this ⛏️</h1>
      <Game />
    </div>
  );
}

export default App;
