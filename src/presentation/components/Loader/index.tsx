import { Container } from './styles';

interface Props {
  marginLeft?: number;
  sx?: object;
}

const Loader: React.FC<Props> = ({ sx }) => {
  return (
    <>
      <Container sx={sx} />
    </>
  );
};

export default Loader;
