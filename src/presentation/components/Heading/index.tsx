import { Title } from './styles';

interface Props {
  children: React.ReactNode;
}

const Heading: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Title>{children}</Title>
    </>
  );
};

export default Heading;
