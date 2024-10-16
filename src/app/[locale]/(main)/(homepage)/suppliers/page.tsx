import React from 'react';
import { Grid } from '@mui/material';
import { SupplierCard } from '@/components/SupplierCard';

const Suppliers = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={3}>
        <SupplierCard card="" />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <SupplierCard card="" />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <SupplierCard card="" />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <SupplierCard card="" />
      </Grid>
    </Grid>
  );
};

export default Suppliers;
