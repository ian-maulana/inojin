import ScrollspyNav from 'react-scrollspy-nav';

import About from '@containers/About';
import Contact from '@containers/Contact';
import Experience from '@containers/Experience';
import Footer from '@containers/Footer';
import Navbar from '@containers/Navbar';
import Portofolio from '@containers/Portofolio';
import Parallax from '@containers/Parallax';
import TechStack from '@containers/TechStack';
import Milestones from '@containers/Milestones';

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <>
      <Parallax />
      <ScrollspyNav
        scrollTargetIds={['about', 'experience', 'works', 'contact']}
        offset={-120}
        activeNavClass="active"
        scrollDuration="300"
        headerBackground="false"
      >
        <Navbar />
      </ScrollspyNav>
      <About />
      <Milestones />
      <Experience />
      <div id="works">
        <Portofolio />
        <TechStack />
      </div>
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
