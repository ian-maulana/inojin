import About from '@containers/About';
import Contact from '@containers/Contact';
import Experience from '@containers/Experience';
import Portofolio from '@containers/Portofolio';

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <>
      <About />
      <Experience />
      <Portofolio />
      <Contact />
    </>
  );
};

export default Home;
