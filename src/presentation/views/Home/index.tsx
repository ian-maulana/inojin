import About from '@containers/About';
import Experience from '@containers/Experience';

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <>
      <About />
      <Experience />
    </>
  );
};

export default Home;
