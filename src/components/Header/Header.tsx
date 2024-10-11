'use client';

import { AppBar, Container } from '@mui/material';
import { FC, Suspense } from 'react';
import DesktopView from '../ResponsiveDesign/components/DesktopView';
import MobileView from '../ResponsiveDesign/components/MobileView';
import { DesktopHeader, MobileHeader } from './components';
import TopBanner, {
  TopBannerProps,
} from '@/components/Header/components/TopBanner';
import { Z_INDEX_VALUES } from '@/config/responsive';

export interface HeaderProps {
  topBanner?: TopBannerProps['data'];
}
const Header: FC<HeaderProps> = ({ topBanner }) => {
  return <div>header</div>;
};

export default Header;
