import { Container, Label } from './styles';

export interface FormGroupProps {
  name: string;
  label?: string;
  children: any;
  size?: 'lg';
  style?: object;
}

const FormGroup: React.FC<FormGroupProps> = ({ children, style, ...props }) => {
  const { name, label } = props;

  return (
    <Container {...props}>
      {label && (
        <Label className="form-label" htmlFor={name} style={style}>
          {label}
        </Label>
      )}

      {children}
    </Container>
  );
};

export default FormGroup;
