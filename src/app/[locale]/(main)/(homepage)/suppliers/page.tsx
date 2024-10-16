import { CustomCard } from '@/components/CustomCard';
import React from 'react';
import { Grid } from '@mui/material';

const Suppliers = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={3}>
        <CustomCard />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <CustomCard />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <CustomCard />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <CustomCard />
      </Grid>
    </Grid>
  );
};

export default Suppliers;
