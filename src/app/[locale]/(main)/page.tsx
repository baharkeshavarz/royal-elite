'use client';

import { useTranslations } from 'next-intl';
import { Header } from '@/components/Header';
import { styled } from '@mui/material/styles';
import { Footer } from '@/components/Footer';
import { Box } from '@mui/material';
import HomeSuppliers from '@/components/HomeSuppliers/HomeSuppliers';

const Home = () => {
  const t = useTranslations();
  const Layout = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    height: '100vh',
  }));

  return (
    <Layout>
      <Header />
      <Box
        sx={{
          minHeight: 800,
        }}
      >
        <HomeSuppliers />
      </Box>
      <Footer />
    </Layout>
  );
};

export default Home;
