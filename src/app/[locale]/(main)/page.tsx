'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Header } from '@/components/Header';
import { styled } from '@mui/material/styles';
import { Footer } from '@/components/Footer';
import { Box } from '@mui/material';
import Suppliers from './(homepage)/suppliers/page';

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
          p: 5,
        }}
      >
        <Suppliers />
      </Box>
      <Footer />
    </Layout>
  );
};

export default Home;
