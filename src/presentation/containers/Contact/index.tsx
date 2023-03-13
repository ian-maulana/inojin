import { FormRenderProps } from 'react-final-form';
import { required } from '@app/Validators';
import { AppColor, AppFontSize, AppFontWeight } from '@components/Theme/config';

import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';

import Form from '@components/Form';
import FormControl from '@components/FormControl';
import FormGroup from '@components/FormGroup';
import TextField from '@components/TextField';
import TextareaField from '@components/TextareaField';
import ContainedButton from '@components/ContainedButton';

interface Props {}

const Contact: React.FC<Props> = () => {
  return (
    <>
      <Box
        component="div"
        fontSize={AppFontSize.s32}
        fontWeight={AppFontWeight.bold}
        textAlign="center"
      >
        Let's talk about everything!
      </Box>
      <Box
        component="p"
        fontSize={AppFontSize.s18}
        fontWeight={AppFontWeight.medium}
        textAlign="center"
        color="#8B88B1"
      >
        Don't like forms? Send me an{' '}
        <Box
          component="a"
          href="#"
          fontSize={AppFontSize.s18}
          fontWeight={AppFontWeight.medium}
          color={AppColor.primary}
        >
          email
        </Box>
      </Box>

      <Form onSubmit={() => null} values={{}}>
        {({ handleSubmit, submitting }: FormRenderProps) => (
          <form onSubmit={handleSubmit}>
            <Grid container columnSpacing={4} rowSpacing={1} margin="36px 0">
              <Grid xs={12} sm={5} smOffset={1}>
                <FormGroup name="name">
                  <FormControl
                    as={TextField}
                    type="text"
                    name="name"
                    label="Name"
                    placeholder="Your Name"
                    inputSize="lg"
                    validate={[required]}
                  />
                </FormGroup>
              </Grid>

              <Grid xs={12} sm={5}>
                <FormGroup name="email">
                  <FormControl
                    as={TextField}
                    type="email"
                    name="email"
                    label="Email Address"
                    inputSize="lg"
                    placeholder="Your Email Address"
                    validate={[required]}
                  />
                </FormGroup>
              </Grid>

              <Grid xs={12} sm={10} smOffset={1}>
                <FormGroup name="subject">
                  <FormControl
                    as={TextField}
                    type="text"
                    name="subject"
                    label="Subject"
                    placeholder="Subject"
                    inputSize="lg"
                    validate={[required]}
                  />
                </FormGroup>
              </Grid>

              <Grid xs={12} sm={10} smOffset={1}>
                <FormGroup name="message">
                  <FormControl
                    as={TextareaField}
                    name="message"
                    label="Message"
                    inputSize="lg"
                    placeholder="Message"
                    validate={[required]}
                  />
                </FormGroup>
              </Grid>
              <Grid xs={12} sm={10} smOffset={1}>
                <ContainedButton
                  loading={submitting}
                  disabled={submitting}
                  type="submit"
                  fullWidth
                >
                  Send Message
                </ContainedButton>
              </Grid>
            </Grid>
          </form>
        )}
      </Form>
    </>
  );
};

export default Contact;
