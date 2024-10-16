'use client';

import { useTranslations } from 'next-intl';
import { styled } from '@mui/material/styles';
import { Footer } from '@/components/Footer';
import { Box } from '@mui/material';
import HomeSuppliers from '@/components/HomeSuppliers/HomeSuppliers';
import { Navbar } from '@/components/Navbar';
import { Header } from '@/components/Header';

const Home = () => {
  const t = useTranslations();
  const Layout = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    height: '100vh',
  }));

  return (
    <Layout>
      <Navbar />
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
