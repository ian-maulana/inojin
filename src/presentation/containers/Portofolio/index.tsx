import { Fragment, memo, useMemo } from 'react';

import Heading from '@components/Heading';
import Grid from '@mui/system/Unstable_Grid/Grid';
import CardButton from '@components/CardButton';

interface Props {}

const Portofolio: React.FC<Props> = () => {
  const works = useMemo(() => {
    return [
      {
        id: 1,
        category: 'Website',
        title: 'Sistem Informasi',
        description: `Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.`,
        imageUrl:
          'https://jthemes.net/themes/html/bolby/demo/images/works/1.svg',
        ActionUrl: 'https://google.com',
      },
      {
        id: 2,
        category: 'Mobile App',
        title: 'Sistem Informasi',
        description: `Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.`,
        imageUrl:
          'https://jthemes.net/themes/html/bolby/demo/images/works/3.svg',
        ActionUrl: 'https://google.com',
      },
      {
        id: 3,
        category: 'Website',
        title: 'Sistem Informasi',
        description: `Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.`,
        imageUrl:
          'https://jthemes.net/themes/html/bolby/demo/images/works/6.svg',
        ActionUrl: 'https://google.com',
      },
    ];
  }, []);

  return (
    <>
      <Heading>Recent Works</Heading>

      <Grid container spacing={3} marginBottom="60px">
        {works.map((work) => (
          <Fragment key={work.id}>
            <Grid xs={12} sm={6} md={4}>
              <CardButton data={work} />
            </Grid>
          </Fragment>
        ))}
      </Grid>
    </>
  );
};

export default memo(Portofolio);
