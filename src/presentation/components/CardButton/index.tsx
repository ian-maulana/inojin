import { useTranslation } from 'react-i18next';
import ContainedButton from '@components/ContainedButton';

import { Category, Container, Group, Image, Title } from './styles';

interface Props {
  data: any;
}

const CardButton: React.FC<Props> = ({ data }) => {
  const { t } = useTranslation('translation');

  return (
    <Container>
      <Category>{data.category}</Category>
      <Image src={data.imageUrl} alt={data.title} />

      <Group>
        <div>
          <Title>{data.title}</Title>
          <p style={{ fontSize: '12px' }}>{data.description}</p>
        </div>
      </Group>

      {data.actionUrl && (
        <ContainedButton
          size="sm"
          color="secondary"
          onClick={() => window.open(data.actionUrl)}
          fullWidth
        >
          {t('view_label')}
        </ContainedButton>
      )}
    </Container>
  );
};

export default CardButton;
