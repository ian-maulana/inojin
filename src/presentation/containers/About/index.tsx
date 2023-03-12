import { AvatarImage } from '@components/Avatar/styles';
import { AppColor, AppFontSize, AppSize } from '@components/Theme/config';

import Grid from '@mui/system/Unstable_Grid';
import Box from '@mui/system/Box';

import Card from '@components/Card';
import ContainedButton from '@components/ContainedButton';
import Heading from '@components/Heading';
import Progressbar from '@components/Progressbar';

interface Props {}

const About: React.FC<Props> = () => {
  return (
    <>
      <Heading>Who am i?</Heading>

      <Grid container spacing={3} marginBottom="60px">
        <Grid
          xs={12}
          md={3}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <AvatarImage
            size="120px"
            round={AppSize.s260}
            fontSize={AppFontSize.s36}
            fontColor={AppColor.white}
            color={AppColor.warning}
            name="Bolby Doe"
          />
        </Grid>
        <Grid xs={12} md={9}>
          <Card>
            <Grid container spacing={2}>
              <Grid xs={12} sm={6}>
                <Box component="p">
                  I am Bolby Doe, web developer from London, United Kingdom. I
                  have rich experience in web site design and building and
                  customization, also I am good at WordPress.
                </Box>

                <Box margin="16px 0">
                  <ContainedButton>Hire Me!</ContainedButton>
                </Box>
              </Grid>

              <Grid xs={12} sm={6}>
                <Progressbar
                  title="Web Development"
                  progress="80%"
                  color="warning"
                />

                <Progressbar
                  title="Mobile Development"
                  progress="60%"
                  color="secondary"
                />

                <Progressbar
                  title="Backend Development"
                  progress="40%"
                  color="primary"
                />
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default About;
