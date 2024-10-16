'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Header } from '@/components/Header';
import { styled } from '@mui/material/styles';
import { Footer } from '@/components/Footer';
import { Box, Container } from '@mui/material';
import { Carousel } from '@/components/Carousel';

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
        {/* <Suppliers /> */}
        <Container>
          <Carousel />
        </Container>
      </Box>
      <Footer />
    </Layout>
  );
};

export default Home;
