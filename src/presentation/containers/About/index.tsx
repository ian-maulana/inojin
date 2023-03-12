import Card from '@components/Card';
import ContainedButton from '@components/ContainedButton';
import Heading from '@components/Heading';
import Grid from '@mui/system/Unstable_Grid';

interface Props {}

const About: React.FC<Props> = () => {
  return (
    <>
      <Heading>About</Heading>

      <Grid container spacing={3} marginBottom="60px">
        <Grid xs={3}></Grid>
        <Grid xs={9}>
          <Card>
            <p>
              I am Bolby Doe, web developer from London, United Kingdom. I have
              rich experience in web site design and building and customization,
              also I am good at WordPress.
            </p>

            <ContainedButton>Download CV</ContainedButton>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default About;
