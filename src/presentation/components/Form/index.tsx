import { FormApi } from 'final-form';
import { Form as FinalForm } from 'react-final-form';

interface Props {
  onSubmit: Function;
  values: any;
  children: any;
}

const Form: React.FC<Props> = ({ children, onSubmit, values }) => {
  const eventSubmit = async (data: any, form: FormApi) => {
    if (onSubmit) {
      await onSubmit(data, form);
    }
  };

  return (
    <>
      <FinalForm
        onSubmit={eventSubmit}
        initialValues={values}
        subscription={{
          submitting: true,
          pristine: true,
          values: true,
          invalid: true,
        }}
      >
        {(form: any) => children(form)}
      </FinalForm>
    </>
  );
};

export default Form;
