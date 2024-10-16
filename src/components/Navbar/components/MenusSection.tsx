import { useTranslations } from 'next-intl';
import { Link as NextLink } from '@/navigation';
import { useTheme } from '@mui/material/styles';
import { Button, Stack, useMediaQuery } from '@mui/material';

const MenusSection = () => {
  const t = useTranslations();
  const theme = useTheme();

  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const pages = [
    { label: t('header.navigation.merchant'), href: '/merchant' },
    { label: t('header.navigation.support'), href: '/support' },
    { label: t('header.navigation.faq'), href: '/faq' },
    { label: t('header.navigation.aboutUs'), href: '/about-us' },
    { label: t('header.navigation.contactUs'), href: '/contact-us' },
    { label: t('header.navigation.terms'), href: '/terms' },
  ];

  return (
    <Stack
      sx={{
        py: 1,
        display: 'flex',
        flexDirection: isSmallScreen ? 'column' : 'row',
        flexWrap: 'wrap',
        justifyContent: isSmallScreen ? 'center' : 'flex-start',
        alignItems: 'center',
        gap: 1,
        width: '100%',
      }}
    >
      {pages.map((page) => (
        <Button
          component={NextLink}
          href={page.href}
          key={page.label}
          size="small"
          sx={{
            color: theme.palette.common.white,
            textTransform: 'none',
            '&:hover': {
              backgroundColor: theme.palette.action.hover,
            },
          }}
        >
          {page.label}
        </Button>
      ))}
    </Stack>
  );
};

export default MenusSection;
