interface ITextureIconProps {
  src: string;
  name: string;
  active?: boolean;
}

export default function TextureIcon({ active, name, src: imageSrc }: ITextureIconProps) {
  const style = {
    alignItems: 'center',
    width: 40,
    height: 40,
    border: active ? 'solid greenyellow' : 'solid transparent',
  };
  return (
    <div style={style}>
      <img style={{ width: '100%', height: '100%' }} src={imageSrc} alt={name} />
    </div>
  );
}
