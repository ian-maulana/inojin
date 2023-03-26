import { memo } from 'react';
import { AvatarImage } from '@components/Avatar/styles';

import { Colors } from '@resources/utils/ColorManager';
import { FontSize } from '@resources/utils/FontManager';
import { Sizes } from '@resources/utils/SizesManager';

import Grid from '@mui/system/Unstable_Grid';
import Box from '@mui/system/Box';

import Card from '@components/Card';
import ContainedButton from '@components/ContainedButton';
import Heading from '@components/Heading';
import Progressbar from '@components/Progressbar';
import { useTranslation } from 'react-i18next';

interface Props {}

const About: React.FC<Props> = () => {
  const { t } = useTranslation('translation');

  const eventClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();

    const element = e.currentTarget.getAttribute('data-id') ?? 'contact';
    const target = window.document.getElementById(element);

    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="about">
      <Heading>{t('about_title')}</Heading>

      <Grid container columnSpacing={0} marginBottom="60px">
        <Grid
          xs={12}
          md={3}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box marginBottom="24px">
            <AvatarImage
              size="150px"
              round={Sizes.s260}
              fontSize={FontSize.s36}
              fontColor={Colors.white}
              color={Colors.warning}
              src="https://s.gravatar.com/avatar/a819c01f55cc897f52bb2bc62fe5e27a?s=200"
              name="Ian Maulana"
            />
          </Box>
        </Grid>
        <Grid xs={12} md={9}>
          <Card>
            <Grid container rowSpacing={2} columnSpacing={3}>
              <Grid xs={12} sm={6}>
                <Box component="p" marginBottom="16px" fontSize={FontSize.s14}>
                  {t('about_description')}
                </Box>

                <ContainedButton onClick={eventClick} data-id="contact">
                  {t('about_hire_btn')}
                </ContainedButton>
              </Grid>

              <Grid xs={12} sm={6}>
                <Progressbar
                  title={t('web_development')}
                  progress="80%"
                  color="warning"
                />

                <Progressbar
                  title={t('mobile_development')}
                  progress="60%"
                  color="secondary"
                />

                <Progressbar
                  title={t('backend_development')}
                  progress="40%"
                  color="primary"
                />
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default memo(About);
