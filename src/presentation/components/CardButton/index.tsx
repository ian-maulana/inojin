import ContainedButton from '@components/ContainedButton';
import { Category, Container, Group, Image, Title } from './styles';

interface Props {
  data: any;
}

const CardButton: React.FC<Props> = ({ data }) => {
  return (
    <Container>
      <Category>{data.category}</Category>
      <Image src={data.imageUrl} alt={data.title} />

      <Group>
        <Title>{data.title}</Title>
        <ContainedButton size="sm" color="secondary">
          Lihat
        </ContainedButton>
      </Group>
    </Container>
  );
};

export default CardButton;
