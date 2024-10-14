'use client';

import React from 'react';
import {
  AppBar,
  Stack,
  Box,
  useTheme,
  Container,
  IconButton,
} from '@mui/material';
import { Z_INDEX_VALUES } from '@/config/responsive';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../common/Logo';
import { Link } from '@/navigation';
import LoginInfo from './components/LoginInfo';
import MenusSection from './components/MenusSection';

const Header = () => {
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar
      elevation={0}
      position="sticky"
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
        top: 0,
        zIndex: Z_INDEX_VALUES.siteHeader,
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Stack
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          gap={{ xs: 1, sm: 2 }}
          py={{ xs: 1, sm: 1.5 }}
        >
          <Box display="flex" flexDirection="row" alignItems="center" gap={1}>
            <Link href="/">
              <Logo />
            </Link>
            {/* Hide the MenusSection for small screens */}
            <Box display={{ xs: 'none', md: 'flex' }}>
              <MenusSection />
            </Box>
          </Box>

          {/* Show menu icon on small screens */}
          <Box display={{ xs: 'flex', md: 'none' }}>
            <IconButton onClick={handleDrawerToggle} color="inherit">
              <MenuIcon />
            </IconButton>
          </Box>

          <Box display="flex" flexDirection="row" alignItems="center" gap={1}>
            <LoginInfo />
          </Box>
        </Stack>
      </Container>

      {/* Mobile menu drawer component */}
      {mobileOpen && (
        <Box
          sx={{
            position: 'absolute',
            top: '100%',
            width: '100vw',
            backgroundColor: theme.palette.background.default,
          }}
        >
          <MenusSection />
        </Box>
      )}
    </AppBar>
  );
};

export default Header;
