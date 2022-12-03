import { useStore } from '../hooks/useStore';
import Cube from './Cube';

export default function Cubes() {
  const [cubes] = useStore((state) => [state.cubes]);
  return (
    <>
      {cubes.map(({ key, pos: position, texture }) => (
        <Cube key={key} {...{ position, texture }} />
      ))}
    </>
  );
}
