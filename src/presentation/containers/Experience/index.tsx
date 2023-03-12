import Card from '@components/Card';
import Heading from '@components/Heading';
import Timeline from '@components/Timeline';
import Grid from '@mui/system/Unstable_Grid/Grid';
import { useMemo } from 'react';

interface Props {}

const Experience: React.FC<Props> = () => {
  const educations = useMemo(() => {
    return [
      {
        id: 1,
        year: '2010 - 2017',
        title: 'Sistem Informasi',
        description: `Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.`,
      },
      {
        id: 2,
        year: '2010 - 2017',
        title: 'Sistem Informasi',
        description: `Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.`,
      },
      {
        id: 3,
        year: '2010 - 2017',
        title: 'Sistem Informasi',
        description: `Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.`,
      },
      {
        id: 4,
        year: '2010 - 2017',
        title: 'Sistem Informasi',
        description: `Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.`,
      },
    ];
  }, []);

  return (
    <>
      <Heading>Experience</Heading>

      <Grid container spacing={3} marginBottom="60px">
        <Grid xs={12} md={6}>
          <Card>
            <Timeline lists={educations} />
          </Card>
        </Grid>

        <Grid xs={12} md={6}>
          <Card>
            <Timeline lists={educations} />
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Experience;
