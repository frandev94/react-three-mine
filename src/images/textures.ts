import { NearestFilter, Texture, TextureLoader } from 'three';
import { dirtImg, glassImg, grassImg, logImg, woodImg } from '.';

export const groundTexture = new TextureLoader().load(grassImg);

export const dirtTexture = new TextureLoader().load(dirtImg);
export const grassTexture = new TextureLoader().load(grassImg);
export const glassTexture = new TextureLoader().load(glassImg);
export const woodTexture = new TextureLoader().load(woodImg);
export const logTexture = new TextureLoader().load(logImg);
[groundTexture, dirtTexture, glassTexture, grassTexture, logTexture, woodTexture].forEach(
  (t) => (t.magFilter = NearestFilter),
);

export default { dirtTexture, grassTexture, glassTexture, woodTexture, logTexture } as { [k: string]: Texture };
