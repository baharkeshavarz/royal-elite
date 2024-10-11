'use client';

import { AppBar, Stack } from '@mui/material';
import { Z_INDEX_VALUES } from '@/config/responsive';
import Logo from '../common/Logo';
import { Link } from '@/navigation';
import LoginInfo from './components/LoginInfo';
import MenusSection from './components/MenusSection';

const Header = () => {
  return (
    <AppBar
      elevation={0}
      position="static"
      color="inherit"
      sx={{
        borderBottom: '3px solid',
        borderColor: (theme) => theme.palette.divider,
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
        justifyContent="center"
        bgColor="red"
      >
        <Link href="/">
          <Logo />
        </Link>
        <MenusSection />
        <LoginInfo />
      </Stack>
    </AppBar>
  );
};

export default Header;
