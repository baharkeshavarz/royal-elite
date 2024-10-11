import { FC, ReactNode } from 'react';

export interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = async ({ children }) => {
  return <>{children}</>;
};

export default Layout;
