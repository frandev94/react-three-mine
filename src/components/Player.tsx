import { useEffect, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useSphere } from '@react-three/cannon';
import { Mesh, Vector3 } from 'three';
import { useKeyboard } from '../hooks/useKeyboard';

const JUMP_FORCE = 5;
const SPEED = 5;

function Player() {
  const { camera } = useThree();
  const { moveBackward, moveForward, moveLeft, moveRight, jump, running } = useKeyboard();
  const [ref, api] = useSphere<Mesh>(() => ({ mass: 1, type: 'Dynamic', position: [0, 2, 0] }));
  const pos = useRef([0, 0, 0]);
  const vel = useRef([0, 0, 0]);

  useEffect(() => {
    api.position.subscribe((p) => (pos.current = p));
  }, [api.position]);

  useEffect(() => {
    api.velocity.subscribe((v) => (vel.current = v));
  }, [api.velocity]);

  useFrame(() => {
    const [px, py, pz] = pos.current;
    const [vx, vy, vz] = vel.current;
    const direction = new Vector3();
    const frontVector = new Vector3(0, 0, (moveBackward ? 1 : 0) - (moveForward ? 1 : 0));
    const sideVector = new Vector3((moveLeft ? 1 : 0) - (moveRight ? 1 : 0), 0, 0);
    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(running ? SPEED * 2 : SPEED)
      .applyEuler(camera.rotation);
    const { x: dx, z: dz } = direction;
    api.velocity.set(dx, vy, dz);

    camera.position.copy(new Vector3(px, py, pz));
    if (jump && Math.abs(vy) < 0.05) {
      api.velocity.set(vx, JUMP_FORCE, vz);
    }
  });

  return <mesh ref={ref} />;
}

export default Player;
