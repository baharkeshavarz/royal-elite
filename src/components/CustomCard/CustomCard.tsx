import { Typography } from '@mui/material';
import {
  CardBox,
  ImageBlock,
  RightButtonContainer,
  CardButton,
  Image,
  ContextContainer,
  CardLeftContent,
  CardContainer,
} from './components/Card';

const CustomCard = () => {
  return (
    <CardBox>
      <ImageBlock>
        <Image src="/assets/images/car1.jpg" alt="" />
      </ImageBlock>
      <CardContainer>
        <CardLeftContent>
          <ContextContainer>
            <Typography variant="body1">بهروز</Typography>
            <Typography variant="caption">شهرک غرب</Typography>
          </ContextContainer>

          <ContextContainer>
            <Typography variant="body2"> پوشاک زنانه و مردانه</Typography>
            <Typography variant="caption">* * *</Typography>
          </ContextContainer>
        </CardLeftContent>
        <RightButtonContainer>
          <CardButton variant="contained">مشاهده</CardButton>
        </RightButtonContainer>
      </CardContainer>
    </CardBox>
  );
};

export default CustomCard;
