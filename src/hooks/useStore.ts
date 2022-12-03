import { nanoid } from 'nanoid';
import create from 'zustand';

interface IUseStore {
  texture: string;
  cubes: ICube[];
  fullScreen: boolean;
  toggleFullScreen: () => void;
  addCube: (x: number, y: number, z: number) => void;
  removeCube: (x: number, y: number, z: number) => void;
  setTexture: (texture: string) => void;
  saveWorld: () => void;
  resetWorld: () => void;
}

export const useStore = create<IUseStore>((set) => ({
  texture: 'dirt',
  cubes: JSON.parse(getLocalStorage('cubes') ?? '') || [],
  fullScreen: false,
  toggleFullScreen: () => set((prev) => ({ ...prev, fullScreen: !prev.fullScreen })),
  addCube: (x, y, z) =>
    set((prev) =>
      prev.cubes.some((c) => c.pos.every((p, i) => p === [x, y, z].at(i))) // pos occupied
        ? prev
        : {
            cubes: [
              ...prev.cubes,
              {
                key: nanoid(),
                pos: [x, y, z],
                texture: prev.texture,
              },
            ],
          },
    ),
  removeCube: (x, y, z) =>
    set((prev) => ({
      cubes: prev.cubes.filter((cube) => {
        const [X, Y, Z] = cube.pos;
        return X !== x || Y !== y || Z !== z;
      }),
    })),
  setTexture: (texture) => {
    set(() => ({
      texture,
    }));
  },
  saveWorld: () => {
    set((prev) => {
      setLocalStorage('cubes', JSON.stringify(prev.cubes));
      return prev;
    });
  },
  resetWorld: () => {
    set(() => ({
      cubes: [],
    }));
  },
}));

function setLocalStorage(key: string, value: string) {
  localStorage.setItem(key, value);
}

function getLocalStorage(key: string) {
  return localStorage.getItem(key);
}
