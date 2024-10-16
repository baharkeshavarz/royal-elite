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
import { FC } from 'react';

interface CustomCardProps {
  card: any;
}

const CustomCard: FC<CustomCardProps> = ({ card }) => {
  return (
    <CardBox>
      <ImageBlock>
        <Image src={card.imgSrc} alt="" />
      </ImageBlock>
      <CardContainer>
        <CardLeftContent>
          <ContextContainer>
            <Typography variant="body1">{card.title}</Typography>
            <Typography variant="caption">{card.place}</Typography>
          </ContextContainer>

          <ContextContainer>
            <Typography variant="body2"> معرفی پذیرنده</Typography>
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
