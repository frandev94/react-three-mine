import { CSSProperties } from 'react';
import { Canvas } from '@react-three/fiber';
import { Sky } from '@react-three/drei';
import { Physics } from '@react-three/cannon';
import Ground from './Ground';
import Player from './Player';
import FPV from './FPV';
import UI from './ui/UI';
import Cubes from './Cubes';
import { useStore } from '../hooks/useStore';

function Game() {
  const fullScreen = useStore((s) => s.fullScreen);
  const style: CSSProperties = { position: 'relative', width: '100%', height: '100%' };
  return (
    <div style={{ height: '100%', padding: fullScreen ? '0' : '20px' }}>
      <div style={style}>
        <Canvas>
          <Sky sunPosition={[100, 100, 20]} />
          <ambientLight intensity={0.5} />
          <FPV />
          <Physics>
            <Cubes />
            <Player />
            <Ground />
          </Physics>
        </Canvas>
        <UI />
      </div>
    </div>
  );
}

export default Game;
