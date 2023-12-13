import { Fragment, memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import Heading from '@components/Heading';
import Grid from '@mui/system/Unstable_Grid/Grid';
import CardButton from '@components/CardButton';

interface Props {}

const Portofolio: React.FC<Props> = () => {
  const { t } = useTranslation('translation');

  const works = useMemo(() => {
    return [
      {
        id: 1,
        category: 'Website',
        title: 'ianmaulana.me',
        description: `Website personal pribadi saya yang berisikan portofolio, informasi dsb`,
        imageUrl: 'https://ianmaulana.sirv.com/ianmaulana.me/ianmaulana.png',
        actionUrl: 'https://ianmaulana.me',
      },
      {
        id: 2,
        category: 'Website',
        title: 'Sekolah Mengemudi Mentari',
        description: `Company Profile dari PT Mentari Prima Persada yang digunakan untuk pemasaran usahanya`,
        imageUrl:
          'https://ianmaulana.sirv.com/ianmaulana.me/sekolahmengemudimentari.png',
        actionUrl: 'https://sekolahmengemudimentari.com',
      },
      {
        id: 3,
        category: 'Website',
        title: 'Amanda Hartanto Batik',
        description: `Company Profile sekaligus web penjualan untuk usaha butik milak amanda hartanto`,
        imageUrl: 'https://ianmaulana.sirv.com/ianmaulana.me/amandabutik.png',
        actionUrl: 'https://amandahartantobatik.com',
      },
      {
        id: 4,
        category: 'Website',
        title: 'Backoffice P2P',
        description: `Backoffice P2P yang digunakan oleh tim internal untuk mereview borrower`,
        imageUrl:
          'https://ianmaulana.sirv.com/ianmaulana.me/backoffice-dompetkilat.png',
        actionUrl: '',
      },
      {
        id: 5,
        category: 'Website',
        title: 'Borrower Dashboard P2P',
        description:
          'Website client (borrower) untuk melihat history, dan melakukan pengajuan pinjaman',
        imageUrl:
          'https://ianmaulana.sirv.com/ianmaulana.me/borrower-dashboard.png',
        actionUrl: '',
      },
      {
        id: 6,
        category: 'Website',
        title: 'Inventory Sistem',
        description:
          'Sistem yang digunakan untuk memanajemen pembelian, penjualan dan stok barang',
        imageUrl:
          'https://ianmaulana.sirv.com/ianmaulana.me/inventory-system.png',
        actionUrl: '',
      },
      {
        id: 7,
        category: 'Website',
        title: 'Koperasi Sistem',
        description: 'Sistem yang digunakan untuk management usaha koperasi',
        imageUrl:
          'https://ianmaulana.sirv.com/ianmaulana.me/koperasi-system.png',
        actionUrl: '',
      },
      {
        id: 8,
        category: 'Mobile Apps',
        title: 'Koperasi Mobile',
        description:
          'Sistem yang digunakan anggota koperasi untuk memantau pinjaman, simpanan dsb',
        imageUrl:
          'https://ianmaulana.sirv.com/ianmaulana.me/koperasi-mobile.png',
        actionUrl: '',
      },
      {
        id: 9,
        category: 'Mobile Apps',
        title: 'Lender App',
        description:
          'Aplikasi yang digunakan untuk mendanai (P2P) pinjaman yang telah disetujui',
        imageUrl: 'https://ianmaulana.sirv.com/ianmaulana.me/lender-app.png',
        actionUrl: '',
      },
      {
        id: 10,
        category: 'Mobile Apps',
        title: 'Actionpay',
        description:
          'Aplikasi yang digunakan untuk melakukan transaksi transfer ke luar negeri',
        imageUrl: 'https://ianmaulana.sirv.com/ianmaulana.me/actionpay.png',
        actionUrl: '',
      },
    ];
  }, []);

  return (
    <>
      <Heading>{t('portofolio_title')}</Heading>

      <Grid container spacing={3} marginBottom="60px">
        {works.map((work) => (
          <Fragment key={work.id}>
            <Grid xs={12} sm={6} md={4}>
              <CardButton data={work} />
            </Grid>
          </Fragment>
        ))}
      </Grid>
    </>
  );
};

export default memo(Portofolio);
