import Grid from '@mui/system/Unstable_Grid/Grid';
import About from '@containers/About';

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <>
      <Grid container spacing={3}>
        <Grid xs={12}>
          <About />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
