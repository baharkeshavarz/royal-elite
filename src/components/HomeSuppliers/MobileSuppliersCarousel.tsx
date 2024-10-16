import { useTheme } from '@mui/material';
import React from 'react';
import Container from '@mui/material/Container';
import Carousel from 'react-carousel-mui';
import { SupplierCard } from '../SupplierCard';

const MobileSuppliersCarousel = () => {
  const theme = useTheme();
  const CarouselSlides: any[] = [
    {
      imgSrc: '/assets/images/store1.jpg',
      title: 'بهروز',
      place: 'شهرک غرب',
    },
    {
      imgSrc: '/assets/images/store2.jpg',
      title: 'نان سحر',
      place: 'شهرک پرواز',
    },
    {
      imgSrc: '/assets/images/store3.jpg',
      title: 'صنایع پزشکی ایران',
      place: 'شهرک راه آهن',
    },
    {
      imgSrc: '/assets/images/store4.jpg',
      title: 'موبایل علی',
      place: 'شهرک غرب',
    },
    {
      imgSrc: '/assets/images/car2.jpg',
      title: 'تعمیرات خودرو',
      place: 'شهرک غرب',
    },
    {
      imgSrc: '/assets/images/store6.jpg',
      title: 'بهروز',
      place: 'شهرک غرب',
    },
    {
      imgSrc: '/assets/images/store5.jpg',
      title: 'بهروز',
      place: 'شهرک غرب',
    },
    {
      imgSrc: '/assets/images/store8.jpg',
      title: 'بهروز',
      place: 'شهرک غرب',
    },
    {
      imgSrc: '/assets/images/car1.jpg',
      title: 'بهروز',
      place: 'شهرک غرب',
    },
  ];

  return (
    <Container maxWidth="md" sx={{ p: 3 }}>
      <Carousel
        items={CarouselSlides}
        className="custom-carousel"
        itemsPerPage={{
          xs: 1,
          sm: 2,
          tablet: 2,
          md: 3,
          lg: 3,
          xl: 3,
        }}
        itemRenderer={(item) => <SupplierCard key={item.title} card={item} />}
        maxContainerWidth={theme.breakpoints.values['md']}
      />
    </Container>
  );
};

export default MobileSuppliersCarousel;
