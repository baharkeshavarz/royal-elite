import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export const CardBox = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '300px',
}));

export const ImageBlock = styled(Box)(({ theme }) => ({
  width: '100%',
  borderRadius: '10px',
  padding: theme.spacing(1.5),
  border: `1px solid ${theme.palette.primary.main}`,
  borderBottomLeftRadius: 0,
}));

export const Image = styled('img')({
  width: '100%',
  borderRadius: '10px',
});

export const CardContainer = styled(Box)({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
});

export const CardLeftContent = styled(Box)(({ theme }) => ({
  width: 'calc(100% - 85px)',
  padding: theme.spacing(1, 0),
  marginTop: '-1px',
  border: `1px solid ${theme.palette.primary.main}`,
  borderTop: 'none',
  borderRadius: '0 0 15px 15px',
  backgroundColor: theme.palette.background.default,
}));

export const RightButtonContainer = styled(Box)(({ theme }) => ({
  width: '80px',
  marginTop: '5px',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '-6px',
    left: '-6px',
    width: '15px',
    height: '15px',
    backgroundColor: theme.palette.background.default,
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: '-6px',
    left: '-6px',
    width: '15px',
    height: '15px',
    borderTopLeftRadius: '15px',
    border: `1px solid ${theme.palette.primary.main}`,
    borderRight: 'none',
    borderBottom: 'none',
  },
}));

export const CardButton = styled(Button)(({ theme }) => ({
  width: '100%',
  height: '2rem',
  position: 'relative',
  marginTop: '0.8rem',
  borderRadius: '15px',
  border: 'none',
}));

export const ContextContainer = styled(Box)(({ theme }) => ({
  color: theme.palette.common.white,
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0 0.5rem',
  marginBottom: '0.1rem',
}));
