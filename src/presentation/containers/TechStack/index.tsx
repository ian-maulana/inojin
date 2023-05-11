import { memo, useMemo } from 'react';

import Grid from '@mui/system/Unstable_Grid';
import { Container, Img } from './styles';

interface Props {}

const TechStack: React.FC<Props> = () => {
  const techs = useMemo(() => {
    return [
      {
        id: 1,
        name: 'React',
        imageUrl: `https://img.icons8.com/color/256/react-native.png`,
        width: 'auto',
        height: '50px',
      },
      {
        id: 2,
        name: 'Vue',
        imageUrl: `https://img.icons8.com/color/256/vue-js.png`,
        width: 'auto',
        height: '50px',
      },
      {
        id: 3,
        name: 'Svelte',
        imageUrl: `https://img.icons8.com/doodle/256/svetle.png`,
        width: 'auto',
        height: '50px',
      },
      {
        id: 4,
        name: 'Flutter',
        imageUrl: `https://img.icons8.com/color/256/flutter.png`,
        width: 'auto',
        height: '50px',
      },
      {
        id: 5,
        name: 'Typescript',
        imageUrl: `https://img.icons8.com/color/256/typescript.png`,
        width: 'auto',
        height: '50px',
      },
      {
        id: 6,
        name: 'Express JS',
        imageUrl: `https://img.icons8.com/color/256/express-js.png`,
        width: 'auto',
        height: '50px',
      },
      {
        id: 7,
        name: 'CodeIgniter',
        imageUrl: `https://img.icons8.com/external-tal-revivo-color-tal-revivo/256/external-codeigniter-is-an-open-source-software-rapid-development-web-framework-logo-color-tal-revivo.png`,
        width: 'auto',
        height: '50px',
      },
      {
        id: 8,
        name: 'mongoDb',
        imageUrl: `https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/256/external-mongodb-a-cross-platform-document-oriented-database-program-logo-shadow-tal-revivo.png`,
        width: 'auto',
        height: '50px',
      },
      {
        id: 9,
        name: 'MySQL',
        imageUrl: `https://img.icons8.com/color/256/mysql-logo.png`,
        width: 'auto',
        height: '60px',
      },
      {
        id: 10,
        name: 'Docker',
        imageUrl: `https://img.icons8.com/color/256/docker.png`,
        width: 'auto',
        height: '60px',
      },
      {
        id: 11,
        name: 'Git',
        imageUrl: `https://img.icons8.com/color/256/git.png`,
        width: 'auto',
        height: '50px',
      },
      {
        id: 12,
        name: 'Google Analytics',
        imageUrl: `https://img.icons8.com/external-tal-revivo-color-tal-revivo/256/external-google-analytics-lets-you-measure-your-advertising-roi-logo-color-tal-revivo.png`,
        width: 'auto',
        height: '35px',
      },
    ];
  }, []);

  return (
    <Container>
      <Grid
        container
        columnSpacing={10}
        rowSpacing={{ sm: 5, md: 10 }}
        justifyContent="center"
      >
        {(techs || []).map((tech: any) => (
          <Grid
            xs={2}
            md={2}
            lg={2}
            display="flex"
            alignItems="center"
            justifyContent="center"
            key={tech.id}
          >
            <Img
              src={tech.imageUrl}
              alt={tech.name}
              width={tech.width}
              height={tech.height}
              title={tech.name}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default memo(TechStack);
