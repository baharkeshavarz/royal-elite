import {
  Box,
  Container,
  Typography,
  Stack,
  Button,
  useTheme,
  Link,
} from '@mui/material';
import { useTranslations } from 'next-intl';
import ButtonWithGradient from '../common/ButtonWithGradient';
import Logo from '../common/Logo';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

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
          justifyContent: 'space-between',
          p: 1,
        }}
      >
        <Stack flex={1} p={1}>
          <Box display="flex" alignItems="center" justifyContent="center">
            <Logo />
            <Typography
              variant="body2"
              align="center"
              color={theme.palette.primary.main}
              sx={{
                textAlign: 'center',
              }}
            >
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تک
            </Typography>
          </Box>

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
                <LocalPhoneIcon />
              </Button>
              <Button
                variant="outlined"
                sx={{
                  color: theme.palette.common.white,
                }}
              >
                09100910059
                <PhoneAndroidIcon />
              </Button>
            </Stack>
            <ButtonWithGradient variant="contained" sx={{ minWidth: 300 }}>
              {t('header.auth.register')}
            </ButtonWithGradient>
          </Box>
        </Stack>

        <Stack flex={1} p={1}>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Stack display="flex" flexDirection="column" alignItems="center">
              <Link
                href="#"
                variant="body2"
                sx={{
                  color: theme.palette.grey[500],
                  marginBottom: 1,
                }}
              >
                {t('footer.links.quickAccess')}
              </Link>

              {pages.map((page) => {
                return (
                  <Typography
                    variant="body2"
                    key={page.label}
                    sx={{
                      width: '100%',
                      p: 0.8,
                      borderBottom: '1px solid',
                      borderColor: theme.palette.grey[500],
                    }}
                  >
                    <Link
                      href={page.href}
                      sx={{
                        color: theme.palette.common.white,
                      }}
                    >
                      {page.label}
                    </Link>
                  </Typography>
                );
              })}
            </Stack>
            <Box sx={{ minWidth: 300 }}>Map</Box>
            <Stack>icons</Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
