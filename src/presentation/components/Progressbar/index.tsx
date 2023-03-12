import { Container, Title, Progress, Group, Bar } from './styles';

interface Props {
  title: string;
  progress: string;
  color: 'primary' | 'secondary' | 'warning';
}

const Progressbar: React.FC<Props> = ({ title, progress, color }) => {
  return (
    <>
      <Container>
        <Group>
          <Title>{title}</Title>
          <Progress>{progress}</Progress>
        </Group>
        <Bar width={progress} color={color} />
      </Container>
    </>
  );
};

export default Progressbar;
