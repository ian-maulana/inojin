import { Textarea, Relative } from './styles';

export interface TextareaFieldProps {
  disabled?: boolean;
  readOnly?: boolean;
  name: string;
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: Function;
  onBlur?: Function;
  className?: string;
  rows?: number;
  inputSize?: 'lg' | 'md';
}

const TextareaField: React.FC<TextareaFieldProps> = ({
  onChange,
  onBlur,
  className,
  rows,
  ...props
}) => {
  const { name, placeholder } = props;

  const eventChange = (e: any) => {
    const { name, value } = e.target;

    if (onChange) {
      onChange(name, value);
    }
  };

  const eventBlur = (e: any) => {
    const { name, value } = e.target;

    if (onBlur) {
      onBlur(name, value);
    }
  };

  return (
    <>
      <Relative>
        <Textarea
          {...props}
          rows={rows}
          name={name}
          className={className}
          placeholder={placeholder}
          onChange={eventChange}
          onBlur={eventBlur}
        >
          {props.value}
        </Textarea>
      </Relative>
    </>
  );
};

TextareaField.defaultProps = {
  disabled: false,
  readOnly: false,
  onChange: () => null,
};

export default TextareaField;
