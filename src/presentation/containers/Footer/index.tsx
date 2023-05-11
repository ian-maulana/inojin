import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import dayjs from 'dayjs';

import { Container } from './styles';

interface Props {}

const Footer: React.FC<Props> = () => {
  const { t } = useTranslation('translation');

  const years = useMemo(() => {
    const start: string = process.env.RELEASE_YEAR ?? '';
    const end: string = dayjs().format('YYYY');

    if (start !== end) {
      return `${start} - ${end}`;
    }

    return `${start}`;
  }, []);

  return (
    <>
      <Container>
        {process.env.REACT_APP_SITE_NAME} &copy; {years}. &nbsp;
        {t('all_right_reserved')}
      </Container>
    </>
  );
};

export default memo(Footer);
