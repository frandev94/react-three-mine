import { CSSProperties } from 'react';
import Crosshair from './Crosshair';
import TextureSelector from './TextureSelector';
import Menu from './menu/Menu';

export default function UI() {
  const uiStyle: CSSProperties = {
    display: 'flex',
    userSelect: 'none',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  };
  return (
    <div style={uiStyle}>
      <Menu />
      <Crosshair />
      <TextureSelector />
    </div>
  );
}
