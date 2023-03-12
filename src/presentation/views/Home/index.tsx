import Card from '@components/Card';
import ContainedButton from '@components/ContainedButton';

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <>
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

export default Home;
