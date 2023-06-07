import React, { ReactNode } from 'react';
import Navabr from '../../components/Navbar/Index';
import Footer from '../Footer';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <React.Fragment>
      <Navabr />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
