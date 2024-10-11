import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTranslations } from 'next-intl';
import { Link as NextLink } from '@/navigation';

const MenusSection = () => {
  const t = useTranslations();

  const pages = [
    { label: t('header.navigation.merchant'), href: '/merchant' },
    { label: t('header.navigation.support'), href: '/support' },
    {
      label: t('header.navigation.faq'),
      href: '/faq',
    },
    { label: t('header.navigation.aboutUs'), href: '/about-us' },
    { label: t('header.navigation.contactUs'), href: '/contact-us' },
    { label: t('header.navigation.terms'), href: '/terms' },
  ];

  return (
    <Box
      sx={{
        py: 1,
        display: 'flex',
      }}
    >
      {pages.map((page) => (
        <Button LinkComponent={NextLink} href={page.href} key={page.label}>
          {page.label}
        </Button>
      ))}
    </Box>
  );
};
export default MenusSection;
