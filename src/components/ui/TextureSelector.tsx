import { CSSProperties, useEffect, useState } from 'react';
import { useKeyboard } from '../../hooks/useKeyboard';
import { useStore } from '../../hooks/useStore';
import textures from '../../images/textures';
import TextureIcon from './TextureIcon';

export default function TextureSelector() {
  const [visible, setVisible] = useState(true);
  const { texture, setTexture } = useStore();
  const { dirt, grass, glass, wood, log } = useKeyboard();
  const activeTexture = Object.entries(textures).find(([k]) => texture + 'Texture' == k)?.[1];
  const style: CSSProperties = {
    position: 'absolute',
    margin: 10,
    padding: 5,
    backgroundColor: '#60606020',
    right: 0,
    border: 'solid',
  };

  useEffect(() => {
    const entry = Object.entries({ dirt, grass, glass, wood, log }).find(([, v]) => v);
    if (entry) setTexture(entry[0]);
  }, [dirt, grass, glass, wood, log]);

  useEffect(() => {
    const vTimeout = setTimeout(() => {
      setVisible(false);
    }, 3000);
    setVisible(true);
    return () => clearTimeout(vTimeout);
  }, [texture]);

  return (
    <>
      {visible && activeTexture && activeTexture.image && (
        <div style={style}>
          {Object.entries(textures).map(([k, v]) => (
            <TextureIcon key={k} active={texture + 'Texture' == k} src={v.image?.src as string} name={k} />
          ))}
        </div>
      )}
    </>
  );
}
