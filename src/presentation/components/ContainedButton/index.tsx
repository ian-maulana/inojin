import Loader from '@components/Loader';
import { AppSize } from '@components/Theme/config';

import { Button } from './styles';

interface Props {
  children?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  color?: 'primary' | 'secondary';
  disabled?: boolean;
  className?: string;
  onClick?: any;
  style?: object;
  loading?: boolean;
  fullWidth?: boolean;
  rounded?: boolean;
  size?: 'md' | 'sm';
  title?: string;
}

const ContainedButton: React.FC<Props> = ({
  type,
  color,
  children,
  disabled,
  className,
  onClick,
  loading,
  fullWidth,
  size,
}) => {
  return (
    <>
      <Button
        type={type ?? 'button'}
        className={className}
        disabled={disabled === true || loading === true}
        onClick={onClick}
        color={color ?? 'primary'}
        fullWidth={fullWidth ?? false}
        size={size ?? 'md'}
      >
        {loading && <Loader sx={{ ml: 0, mr: AppSize.s10 }} />}
        {children}
      </Button>
    </>
  );
};

export default ContainedButton;
