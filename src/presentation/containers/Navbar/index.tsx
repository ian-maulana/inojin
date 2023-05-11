import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import Box from '@mui/system/Box';
import Language from '@components/Language';
import i18n from '@components/Translation/i18n';

import { Container, Title, NavMenu, NavbarNav } from './styles';

interface Props {}

const Navbar: React.FC<Props> = () => {
  const { t } = useTranslation('translation');

  const optLanguages = useMemo(() => {
    return [
      { value: 'id', label: 'ID' },
      { value: 'en', label: 'EN' },
    ];
  }, []);

  const eventClick = () => {
    i18n.changeLanguage(i18n.language === 'id' ? 'en' : 'id');
  };

  return (
    <>
      <Container>
        <NavbarNav>
          <Title>{process.env.REACT_APP_SITE_NAME}</Title>

          <Box display="flex" justifyContent="center">
            <NavMenu>
              <li>
                <a href="#about" data-id="about" className="active">
                  {t('navbar_about')}
                </a>
              </li>
              <li>
                <a href="#experience" data-id="experience">
                  {t('navbar_experience')}
                </a>
              </li>
              <li>
                <a href="#works" data-id="works">
                  {t('navbar_works')}
                </a>
              </li>
              <li>
                <a href="#contact" data-id="contact">
                  {t('navbar_contact')}
                </a>
              </li>
            </NavMenu>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              marginRight="16px"
              marginLeft="36px"
            >
              <Language
                items={optLanguages}
                current={i18n.language}
                onChange={eventClick}
              />
            </Box>
          </Box>
        </NavbarNav>
      </Container>
    </>
  );
};

export default memo(Navbar);
