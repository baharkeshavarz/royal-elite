'use client';

import React from 'react';
import { Container, Typography, useTheme } from '@mui/material';
import {
  CardBox,
  CardContainer,
  CardLeftContent,
  ContextContainer,
  ImageBlock,
  Image,
  RightButtonContainer,
} from './components/Card';

const Header = () => {
  const theme = useTheme();

  return (
    <Container maxWidth="xl" sx={{ p: 5 }}>
      <CardBox>
        <ImageBlock>
          <Image src="/assets/images/header.jpg" alt="" />
        </ImageBlock>
        <CardContainer>
          <CardLeftContent>
            <ContextContainer>
              <Typography variant="body1" textAlign="center">
                باشگاه تخفیفی رویال الیت
              </Typography>
              <Typography variant="caption">
                رویال الیت برای راهنمایی مناسب با بودجه و نیاز شما آماده است.
                اطلاعات خود را وارد کنید، در اسرع وقت با شما تماس می‌گیریم.
              </Typography>
            </ContextContainer>
          </CardLeftContent>
          <RightButtonContainer>
            <Typography
              variant="body1"
              textAlign="center"
              color={theme.palette.primary.main}
            >
              هوادار شما هستیم
            </Typography>
          </RightButtonContainer>
        </CardContainer>
      </CardBox>
    </Container>
  );
};

export default Header;
