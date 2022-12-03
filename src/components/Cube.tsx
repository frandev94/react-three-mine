import { useBox } from '@react-three/cannon';
import { ThreeEvent } from '@react-three/fiber';
import { Mesh } from 'three';
import { useStore } from '../hooks/useStore';
import { default as textures } from '../images/textures';
import { calculateAdjacentPos } from '../utils';

interface ICubeProps {
  position: PositionType;
  texture: string;
}

export default function Cube({ position, texture }: ICubeProps) {
  const [ref] = useBox<Mesh>(() => ({ type: 'Static', position }));
  const { addCube, removeCube } = useStore();
  const activeTexture = textures[texture + 'Texture'];
  const onClickCube = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    if (e.faceIndex !== undefined && ref.current) {
      const clickedFace = Math.floor(e.faceIndex / 2);
      const { x, y, z } = ref.current.position;
      if (e.altKey) removeCube(x, y, z);
      else addCube(...calculateAdjacentPos(clickedFace, [x, y, z]));
    }
  };
  return (
    <mesh ref={ref} onClick={onClickCube}>
      <boxGeometry />
      <meshStandardMaterial map={activeTexture} color={!activeTexture ? 'hotpink' : undefined} />
    </mesh>
  );
}
