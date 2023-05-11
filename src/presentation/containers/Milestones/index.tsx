import { memo, useMemo } from 'react';

import Grid from '@mui/system/Unstable_Grid';
import { Container, Description, Group, Img, Total, Unit } from './styles';
import dayjs from 'dayjs';
import { useTranslation } from 'react-i18next';

interface Props {}

const Milestones: React.FC<Props> = () => {
  const { t } = useTranslation('translation');

  const calculateMilestone = (start: string) => {
    const startDate = dayjs(start);
    const endDate = dayjs();

    const result = endDate.diff(startDate, 'hour');
    return result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

  const summary = useMemo(() => {
    return [
      {
        id: 1,
        name: 'Web App',
        unit: t('milestone_hours'),
        total: calculateMilestone('2018-01-08'),
        description: t('milestone_description', { name: 'web app' }),
        imageUrl: `https://cdn-icons-png.flaticon.com/512/2721/2721688.png`,
        width: 'auto',
        height: '50px',
      },
      {
        id: 2,
        name: 'Mobile App',
        unit: t('milestone_hours'),
        total: calculateMilestone('2022-05-25'),
        description: t('milestone_description', { name: 'mobile app' }),
        imageUrl: `https://cdn-icons-png.flaticon.com/512/7075/7075373.png`,
        width: 'auto',
        height: '50px',
      },
      {
        id: 3,
        name: 'Backend',
        unit: t('milestone_hours'),
        total: calculateMilestone('2023-03-01'),
        description: t('milestone_description', { name: 'backend' }),
        imageUrl: `https://cdn-icons-png.flaticon.com/512/2906/2906206.png`,
        width: 'auto',
        height: '50px',
      },
      {
        id: 4,
        name: 'Projects',
        unit: t('milestone_projects'),
        total: '30',
        description: t('milestone_description_completed'),
        imageUrl: `https://cdn-icons-png.flaticon.com/512/2349/2349134.png`,
        width: 'auto',
        height: '50px',
      },
    ];
  }, [t]);

  return (
    <Container>
      <Grid
        container
        columnSpacing={2}
        rowSpacing={{ xs: 0, sm: 0, md: 2 }}
        justifyContent="center"
      >
        {(summary || []).map((sum: any) => (
          <Grid
            xs={6}
            md={3}
            lg={3}
            display="flex"
            alignItems="center"
            justifyContent="center"
            marginBottom={{ xs: 3, sm: 3, md: 0 }}
            key={sum.id}
          >
            <Grid container>
              <Grid xs={12} lg={3}>
                <Img
                  src={sum.imageUrl}
                  alt={sum.name}
                  width={sum.width}
                  height={sum.height}
                  title={sum.name}
                />
              </Grid>
              <Grid xs={12} lg={9}>
                <Group>
                  <Total>
                    {sum.total} <Unit>{sum.unit}</Unit>
                  </Total>
                  <Description title={sum.description}>
                    {sum.description}
                  </Description>
                </Group>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default memo(Milestones);
