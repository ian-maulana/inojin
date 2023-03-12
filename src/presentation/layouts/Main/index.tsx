import { Outlet } from 'react-router-dom';
import { Container } from './styles';

interface Props {}

const Main: React.FC<Props> = () => {
  return (
    <>
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default Main;
