import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

interface Props {
  children: React.ReactNode;
}

const Translation: React.FC<Props> = ({ children }) => {
  return (
    <>
      <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
    </>
  );
};

export default Translation;
