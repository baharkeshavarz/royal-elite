import {
  Box,
  Container,
  Typography,
  Grid,
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
        borderTop: '2px solid',
        borderColor: theme.palette.divider,
        py: 4,
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Box display="flex" alignItems="center" textAlign="center" p={2}>
              <Logo />
              <Typography
                variant="body2"
                color={theme.palette.primary.main}
                sx={{ mt: 2 }}
              >
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تک
              </Typography>
            </Box>

            <Box display="flex" justifyContent="center" gap={1} mt={2}>
              <Button
                variant="outlined"
                sx={{ color: theme.palette.common.white }}
              >
                90006070 <LocalPhoneIcon />
              </Button>
              <Button
                variant="outlined"
                sx={{ color: theme.palette.common.white }}
              >
                09100910059 <PhoneAndroidIcon />
              </Button>
            </Box>

            <Box mt={2} display="flex" justifyContent="center">
              <ButtonWithGradient
                variant="contained"
                sx={{ minWidth: { xs: '100%', md: 300 } }}
              >
                {t('header.auth.register')}
              </ButtonWithGradient>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              p={2}
            >
              <Link
                href="#"
                variant="body2"
                sx={{ color: theme.palette.grey[500], mb: 1 }}
              >
                {t('footer.links.quickAccess')}
              </Link>

              {pages.map((page) => (
                <Typography
                  variant="body2"
                  key={page.label}
                  sx={{
                    width: '100%',
                    p: 0.8,
                    borderBottom: '1px solid',
                    borderColor: theme.palette.grey[500],
                    textAlign: 'center',
                  }}
                >
                  <Link
                    href={page.href}
                    sx={{ color: theme.palette.common.white }}
                  >
                    {page.label}
                  </Link>
                </Typography>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              p={2}
            >
              {/* Replace with actual map component */}
              <Box
                sx={{
                  width: '100%',
                  height: 200,
                  backgroundColor: theme.palette.grey[200],
                }}
              >
                Map
              </Box>
              {/* Replace with actual icons component */}
              <Box mt={2}>icons</Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
