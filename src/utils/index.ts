export function calculateAdjacentPos(face: number, pos: PositionType): PositionType {
  const config: { [k: number]: { index: number; add: number } } = {
    0: { index: 0, add: 1 },
    1: { index: 0, add: -1 },
    2: { index: 1, add: 1 },
    3: { index: 1, add: -1 },
    4: { index: 2, add: 1 },
    5: { index: 2, add: -1 },
  };
  const aConfig = config[face];
  return pos.map((v, i) => (i === aConfig.index ? v + aConfig.add : v)) as PositionType;
}
