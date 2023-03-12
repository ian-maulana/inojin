import Card from '@components/Card';
import ContainedButton from '@components/ContainedButton';
import Heading from '@components/Heading';

interface Props {}

const About: React.FC<Props> = () => {
  return (
    <>
      <Heading>About</Heading>
      <Card>
        <p>
          I am Bolby Doe, web developer from London, United Kingdom. I have rich
          experience in web site design and building and customization, also I
          am good at WordPress.
        </p>

        <ContainedButton>Download CV</ContainedButton>
      </Card>
    </>
  );
};

export default About;
