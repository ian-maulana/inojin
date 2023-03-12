import Loader from '@components/Loader';
import { AppSize } from '@components/Theme/config';

import { Button } from './styles';

interface Props {
  children?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  color?: 'primary' | 'secondary' | 'error';
  disabled?: boolean;
  className?: string;
  onClick?: any;
  style?: object;
  loading?: boolean;
  fullWidth?: boolean;
  rounded?: boolean;
  size?: 'lg' | 'md' | 'sm';
  title?: string;
}

const ContainedButton: React.FC<Props> = ({
  type,
  color,
  children,
  disabled,
  className,
  onClick: click,
  loading,
  fullWidth,
}) => {
  return (
    <>
      <Button
        type={type ?? 'button'}
        className={className}
        disabled={disabled === true || loading === true}
        onClick={click}
        color={color}
        fullWidth={fullWidth ?? false}
      >
        {loading && <Loader sx={{ ml: 0, mr: AppSize.s10 }} />}
        {children}
      </Button>
    </>
  );
};

export default ContainedButton;
