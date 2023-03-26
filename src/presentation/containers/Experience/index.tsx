import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import Card from '@components/Card';
import Heading from '@components/Heading';
import Timeline from '@components/Timeline';
import Grid from '@mui/system/Unstable_Grid/Grid';

import { Category, Body, AutoScroll } from './styles';

interface Props {}

const Experience: React.FC<Props> = () => {
  const { t } = useTranslation('translation');

  const educations = useMemo(() => {
    return [
      {
        id: 1,
        year: t('experience_bachelor_year'),
        title: t('experience_bachelor_title'),
        description: t('experience_bachelor_description'),
      },
      {
        id: 2,
        year: t('experience_sma_year'),
        title: t('experience_sma_title'),
        description: t('experience_sma_description'),
      },
      {
        id: 3,
        year: t('experience_smp_year'),
        title: t('experience_smp_title'),
        description: t('experience_smp_description'),
      },
      {
        id: 4,
        year: t('experience_sd_year'),
        title: t('experience_sd_title'),
        description: t('experience_sd_description'),
      },
    ];
  }, [t]);

  const jobs = useMemo(() => {
    return [
      {
        id: 1,
        year: t('experience_dk_year'),
        title: t('experience_dk_title'),
        description: t('experience_dk_description'),
      },
      {
        id: 2,
        year: t('experience_la_year'),
        title: t('experience_la_title'),
        description: t('experience_la_description'),
      },
      {
        id: 3,
        year: t('experience_icon_year'),
        title: t('experience_icon_title'),
        description: t('experience_icon_description'),
      },
    ];
  }, [t]);

  return (
    <div id="experience">
      <Heading>{t('experience_title')}</Heading>

      <Grid container spacing={3} marginBottom="100px">
        <Grid xs={12} md={6}>
          <Card>
            <Body>
              <Category>{t('experience_education_subtitle')}</Category>
              <AutoScroll>
                <Timeline lists={educations} />
              </AutoScroll>
            </Body>
          </Card>
        </Grid>

        <Grid xs={12} md={6}>
          <Card>
            <Body>
              <Category>{t('experience_job_subtitle')}</Category>
              <AutoScroll>
                <Timeline lists={jobs} />
              </AutoScroll>
            </Body>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default memo(Experience);
