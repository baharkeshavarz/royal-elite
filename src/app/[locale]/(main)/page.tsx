'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Header } from '@/components/Header';
import { styled } from '@mui/material/styles';

const Home = () => {
  const t = useTranslations();

  const Layout = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    height: '100vh',
  }));

  return (
    <Layout>
      <Header />
    </Layout>
  );
};

export default Home;
