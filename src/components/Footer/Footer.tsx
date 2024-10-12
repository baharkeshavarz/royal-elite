import {
  Box,
  Container,
  Typography,
  Stack,
  Button,
  useTheme,
  Divider,
} from '@mui/material';
import { useTranslations } from 'next-intl';
import ButtonWithGradient from '../common/ButtonWithGradient';
import { Link } from '@/navigation';

const Footer = () => {
  const t = useTranslations();
  const theme = useTheme();

  const pages = [
    { label: t('header.navigation.aboutUs'), href: '/about-us' },
    { label: t('header.navigation.contactUs'), href: '/contact-us' },
    { label: t('header.navigation.terms'), href: '/terms' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        borderBottom: '2px solid',
        borderColor: (theme) => theme.palette.divider,
        py: 2,
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Stack flex={1}>
          <Typography
            variant="body2"
            align="center"
            color={theme.palette.primary.main}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 5,
            }}
          >
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تک
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            gap={1}
            p={1}
          >
            <Stack display="flex" flexDirection="row" gap={1} p={1}>
              <Button
                variant="outlined"
                sx={{
                  color: theme.palette.common.white,
                }}
              >
                90006070
              </Button>
              <Button
                variant="outlined"
                sx={{
                  color: theme.palette.common.white,
                }}
              >
                09100910059
              </Button>
            </Stack>
            <ButtonWithGradient variant="contained" sx={{ minWidth: 300 }}>
              {t('header.auth.register')}
            </ButtonWithGradient>
          </Box>
        </Stack>
        <Stack
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          gap={1}
          flex={1}
        >
          <Stack display="flex" flexDirection="column" alignItems="center">
            {pages.map((page) => {
              return (
                <Link key={page.label} href={page.href}>
                  {page.label}
                </Link>
              );
            })}
          </Stack>
          <Box sx={{ minWidth: 300 }}>Map</Box>

          <Stack>icons</Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
