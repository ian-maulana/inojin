import Loader from '@components/Loader';

import { Button } from './styles';
import { Sizes } from '@resources/utils/SizesManager';

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
  ...props
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
        {...props}
      >
        {loading && <Loader sx={{ ml: 0, mr: Sizes.s10 }} />}
        {children}
      </Button>
    </>
  );
};

export default ContainedButton;
