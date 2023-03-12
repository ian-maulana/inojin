import { AvatarImage } from './styles';

interface Props {
  name: string;
  size: string;
  round?: string;
  color?: string;
  bgColor?: string;
  fontSize?: string;
}

const Avatar: React.FC<Props> = ({ name, size, color, round, fontSize }) => {
  return (
    <AvatarImage
      name={name}
      size={size}
      round={round ?? true}
      fontColor={color}
      fontSize={fontSize}
      maxInitials={2}
    />
  );
};

export default Avatar;
