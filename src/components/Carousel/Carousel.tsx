import React, { useState } from 'react';
import { Box, Button, Card, Stack, Typography, useTheme } from '@mui/material';
import { alpha, styled } from '@mui/system';
import CarouselButtons from './components/CarouselButtons';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { SupplierCard } from '../SupplierCard';

interface CarouselImage {
  imgSrc: string;
  title: string;
  place?: string;
}

interface CarouselSlide {
  title: string;
  images: CarouselImage[];
}

// Array of slides, each containing multiple images
const CarouselSlides: CarouselSlide[] = [
  {
    title: 'Slide 1',
    images: [
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
    ],
  },
  {
    title: 'Slide 2',
    images: [
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
    ],
  },
  {
    title: 'Slide 3',
    images: [
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
    ],
  },
];

const CarouselContainer = styled(Box)({
  width: '100%',
});

const CarouselCard = styled(Card)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '370px',
  background: 'none',
  gap: 8,
});

const Carousel: React.FC = () => {
  const theme = useTheme();
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % CarouselSlides.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + CarouselSlides.length) % CarouselSlides.length,
    );
  };

  return (
    <>
      <Box display="flex" justifyContent="space-between" p={2}>
        <Stack spacing={1}>
          <Typography variant="h6" color={theme.palette.common.white}>
            فروشگاه های برتر (پیشنهاد ویژه)
          </Typography>
          <Typography variant="caption" color={theme.palette.grey[300]}>
            با رویال ایست به تمام فروشگاه های معتبر دسترسی پیدا میکنید
          </Typography>
        </Stack>
        <Box display="flex" gap={1}>
          <CarouselButtons nextImage={nextImage} prevImage={prevImage} />
          <Button
            variant="contained"
            size="small"
            sx={{
              color: theme.palette.common.white,
              background: alpha(theme.palette.background.default, 0.8),
              borderRadius: '1rem',
              border: 1,
              borderColor: theme.palette.grey[700],
            }}
          >
            <Typography variant="caption">مشاهده همه</Typography>
            <NavigateBeforeIcon />
          </Button>
        </Box>
      </Box>

      <CarouselContainer>
        <CarouselCard>
          {CarouselSlides[currentIndex].images.map((card, index) => (
            <SupplierCard key={index} card={card} />
          ))}
        </CarouselCard>
      </CarouselContainer>
    </>
  );
};

export default Carousel;
