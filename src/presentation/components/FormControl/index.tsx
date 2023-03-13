import { Field } from 'react-final-form';
import { Error } from './styles';

const FormControl: React.FC<any> = ({
  style,
  name,
  onChange,
  as: Component,
  validate,
  className,
  ...props
}) => {
  const eventValidate = (validate?: Array<Function>) => {
    if (validate !== undefined) {
      // make validation is array
      const validators = Array.isArray(validate) ? validate : [validate];

      // convert into anonymous functions
      const mappingValidators = validators.map((validator) => {
        return validator['name'] === '' ? validator : validator();
      });

      return (value: any, data: any) => {
        return mappingValidators.reduce((error, validator) => {
          return error || validator(value, data, props.label);
        }, undefined);
      };
    }
  };

  const eventChange = (name: string, value: any, data: any) => {
    if (onChange) {
      onChange(name, value, data);
    }
  };

  return (
    <>
      <Field name={name} validate={eventValidate(validate)}>
        {({ input, meta }) => {
          return (
            <>
              <Component
                style={style}
                {...input}
                {...props}
                className={className}
                onChange={(name: string, value: any, data: any) => {
                  input.onChange(value);
                  eventChange(name, value, data);
                }}
              />

              {meta.error && meta.touched && <Error>{meta.error}</Error>}
            </>
          );
        }}
      </Field>
    </>
  );
};

export default FormControl;
