import style from './Menu.module.css';
import { useStore } from '../../../hooks/useStore';

export default function Menu() {
  const { saveWorld, resetWorld, toggleFullScreen } = useStore();
  return (
    <div className={style.menu}>
      <button className={style.menuButton} onClick={saveWorld}>
        Save World
      </button>
      <button className={style.menuButton} onClick={resetWorld}>
        Reset World
      </button>
      <button className={style.menuButton} onClick={toggleFullScreen}>
        Full Screen
      </button>
    </div>
  );
}
