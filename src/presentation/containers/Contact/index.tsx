import { memo } from 'react';
import { Trans, useTranslation } from 'react-i18next';

import { FormRenderProps } from 'react-final-form';
import { required } from '@app/Validators';
import { Colors } from '@resources/utils/ColorManager';
import { FontSize, FontWeight } from '@resources/utils/FontManager';

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
  const { t } = useTranslation('translation');

  const eventSubmit = (data: any) => {
    const msg = `Halo nama saya ${data.name} <${data.email}>. Saya ingin diskusi ${data.subject}. ${data.message}`;
    const phone = process.env.REACT_APP_PHONE;
    window.open(`https://wa.me/${phone}?text=${msg}`, '_blank');
  };

  return (
    <Box margin="150px 0" id="contact">
      <Box
        component="div"
        fontSize={FontSize.s32}
        fontWeight={FontWeight.bold}
        textAlign="center"
        color={Colors.textBold}
      >
        {t('contact_title')}
      </Box>
      <Box
        component="p"
        fontSize={FontSize.s18}
        fontWeight={FontWeight.medium}
        textAlign="center"
        color={Colors.text}
      >
        <Trans
          i18nKey="contact_subtitle"
          components={[
            <Box
              component="a"
              href={`mailto:${process.env.REACT_APP_EMAIL}`}
              fontSize={FontSize.s18}
              fontWeight={FontWeight.medium}
              color={Colors.primary}
            />,
          ]}
        />
      </Box>

      <Form onSubmit={eventSubmit} values={{}}>
        {({ handleSubmit, submitting }: FormRenderProps) => (
          <form onSubmit={handleSubmit}>
            <Grid container columnSpacing={4} rowSpacing={1} margin="36px 0">
              <Grid xs={12} sm={5} smOffset={1}>
                <FormGroup name="name">
                  <FormControl
                    as={TextField}
                    type="text"
                    name="name"
                    label={t('input_name_label')}
                    placeholder={t('input_name_placeholder')}
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
                    label={t('input_email_label')}
                    placeholder={t('input_email_placeholder')}
                    inputSize="lg"
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
                    label={t('input_subject_label')}
                    placeholder={t('input_subject_placeholder')}
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
                    label={t('input_message_label')}
                    placeholder={t('input_message_placeholder')}
                    inputSize="lg"
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
                  {t('contact_submit_btn')}
                </ContainedButton>
              </Grid>
            </Grid>
          </form>
        )}
      </Form>
    </Box>
  );
};

export default memo(Contact);
