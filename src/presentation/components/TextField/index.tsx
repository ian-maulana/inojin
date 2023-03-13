import { useMemo, useState } from 'react';

import {
  Input,
  Relative,
  Toggle,
  StartAndornment,
  EndAndornment,
  Container,
} from './styles';

export interface TextFieldProps {
  disabled?: boolean;
  readOnly?: boolean;
  name: string;
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: Function;
  onBlur?: Function;
  type?: 'text' | 'number' | 'email' | 'tel' | 'hidden' | 'password';
  inputSize?: 'lg' | 'md';
  className?: string;
  startAndornment?: React.ReactNode;
  endAndornment?: React.ReactNode;
}

const TextField: React.FC<TextFieldProps> = ({
  onChange,
  onBlur,
  className,
  ...props
}) => {
  const { name, type, placeholder } = props;
  const [show, setShow] = useState(false);

  const eventChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (onChange) {
      onChange(name, value);
    }
  };

  const eventBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (onBlur) {
      onBlur(name, value);
    }
  };

  const isObscure = useMemo(() => {
    if (type === 'password') {
      return show ? 'text' : 'password';
    }

    return type;
  }, [show, type]);

  const eventShow = () => {
    if (props.disabled === false) {
      setShow(!show);
    }
  };

  return (
    <Container {...props}>
      {props.startAndornment && (
        <StartAndornment {...props}>{props.startAndornment}</StartAndornment>
      )}
      <Relative className="relative">
        <Input
          {...props}
          name={name}
          type={isObscure}
          className={className}
          placeholder={placeholder}
          onChange={eventChange}
          onBlur={eventBlur}
        />

        {type === 'password' && (
          <Toggle
            type="button"
            className={props.inputSize === 'lg' ? 'toggle lg' : 'toggle md'}
            onClick={eventShow}
            disabled={props.disabled}
          >
            {!show ? 'Show' : 'Hide'}
          </Toggle>
        )}
      </Relative>

      {props.endAndornment && (
        <EndAndornment>{props.endAndornment}</EndAndornment>
      )}
    </Container>
  );
};

TextField.defaultProps = {
  disabled: false,
  readOnly: false,
  onChange: () => null,
};

export default TextField;
