import { CSSProperties } from 'react';

export default function Crosshair() {
  const squareStyle: CSSProperties = {
    height: 10,
    width: 10,
    border: 'solid 2px',
    margin: 'auto',
    mixBlendMode: 'exclusion',
    display: 'flex',
  };
  const dotStyle = {
    height: '2px',
    width: '2px',
    margin: 4,
    backgroundColor: 'white',
  };
  return (
    <div style={squareStyle}>
      <div style={dotStyle} />
    </div>
  );
}
