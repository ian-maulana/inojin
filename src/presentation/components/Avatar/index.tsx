import { AvatarImage } from './styles';

export interface AvatarProps {
  name: string;
  size: string;
  round?: string | boolean;
  fontColor?: string;
  color?: string;
  fontSize?: string;
}

const Avatar: React.FC<AvatarProps> = ({ ...props }) => {
  return <AvatarImage {...props} maxInitials={2} />;
};

export default Avatar;
