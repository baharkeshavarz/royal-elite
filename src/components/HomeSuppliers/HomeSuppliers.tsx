'use client';

import { Suspense } from 'react';
import { DesktopView, MobileView } from '@/components/ResponsiveDesign';
import DesktopSuppliersCarousel from '@/components/HomeSuppliers/DesktopSuppliersCarousel';
import MobileSuppliersCarousel from '@/components/HomeSuppliers/MobileSuppliersCarousel';

const HomeSuppliers = () => {
  return (
    <>
      <DesktopView>
        <DesktopSuppliersCarousel />
      </DesktopView>
      <MobileView>
        <Suspense>
          <MobileSuppliersCarousel />
        </Suspense>
      </MobileView>
    </>
  );
};

export default HomeSuppliers;
