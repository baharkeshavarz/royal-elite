'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Header } from '@/components/Header';
import { styled } from '@mui/material/styles';
import { Footer } from '@/components/Footer';
import { Box } from '@mui/material';

const Home = () => {
  const t = useTranslations();

  const Layout = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    height: '100vh',
  }));

  return (
    <Layout>
      <Header />
      <Box sx={{ minHeight: 650, backgroundColor: 'white' }}>container</Box>
      <Footer />
    </Layout>
  );
};

export default Home;
