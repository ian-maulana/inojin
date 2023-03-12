import { useTranslation } from 'react-i18next';

interface Props {}

const Main: React.FC<Props> = () => {
  const { t } = useTranslation('translation');
  return (
    <>
      <div>{t('learn_react')}</div>
    </>
  );
};

export default Main;
