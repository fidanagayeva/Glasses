"use client";
import React, { ReactNode } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import { usePathname } from 'next/navigation';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const path = usePathname();
    const nopages = ["/login", "/register", "/"];

    const showpage = !nopages.includes(path)

  return (
    <div>
     { showpage && <Header />}
      <main>{children}</main>
        {showpage && <Footer />}  
    </div>
  );
};

export default Layout;
