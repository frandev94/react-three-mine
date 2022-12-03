import { usePlane } from '@react-three/cannon';
import { ThreeEvent } from '@react-three/fiber';
import { useEffect } from 'react';
import { Mesh, RepeatWrapping } from 'three';
import { useStore } from '../hooks/useStore';
import { groundTexture } from '../images/textures';

function Ground() {
  const [ref] = usePlane<Mesh>(() => ({ rotation: [-Math.PI / 2, 0, 0], position: [0, -0.5, 0] }));
  const { addCube } = useStore();
  const onClickGround = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    if (!e.altKey) addCube(Math.round(e.point.x), Math.ceil(e.point.y), Math.round(e.point.z));
  };
  useEffect(() => {
    groundTexture.wrapS = RepeatWrapping;
    groundTexture.wrapT = RepeatWrapping;
    groundTexture.repeat.set(1000, 1000);
  }, []);
  return (
    <mesh ref={ref} onClick={onClickGround}>
      <planeGeometry args={[1000, 1000]} />
      <meshStandardMaterial map={groundTexture} />
    </mesh>
  );
}

export default Ground;
