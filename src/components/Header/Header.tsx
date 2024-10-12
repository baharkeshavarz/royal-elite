'use client';

import { AppBar, Stack, Box, useTheme } from '@mui/material';
import { Z_INDEX_VALUES } from '@/config/responsive';
import Logo from '../common/Logo';
import { Link } from '@/navigation';
import LoginInfo from './components/LoginInfo';
import MenusSection from './components/MenusSection';

const Header = () => {
  const theme = useTheme();

  return (
    <AppBar
      elevation={0}
      position="static"
      sx={{
        backgroundColor: theme.palette.background.default,
        '&::after': {
          content: '""',
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: '5px',
          background: `linear-gradient(to right top, ${theme.palette.primary.dark}, ${theme.palette.primary.light})`,
          zIndex: -1,
        },
        position: 'sticky',
        top: 0,
        zIndex: Z_INDEX_VALUES.siteHeader,
      }}
    >
      <Stack
        maxWidth="xl"
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        gap={1}
      >
        <Box display="flex" flexDirection="row" alignItems="center" gap={1}>
          <Link href="/">
            <Logo />
          </Link>
          <MenusSection />
        </Box>
        <Box display="flex" flexDirection="row" alignItems="center" gap={1}>
          <LoginInfo />
        </Box>
      </Stack>
    </AppBar>
  );
};

export default Header;
