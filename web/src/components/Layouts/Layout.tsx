import React from 'react';
import A11yLink, { A11yAnchor } from '@/components/UI/A11yLink';
import Menu from '@/components/UI/Menu/Menu';
import BackToTop from '@/components/UI/BackToTop/BackToTop';
import Footer from '@/components/Layouts/Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={'bg-white text-gray-900 min-h-screen flex flex-col'}>
        <A11yLink />
        <Menu />
        <main>
          <A11yAnchor />
          {children}
        </main>
        <BackToTop />
        <Footer />
      </body>
    </html>
  );
}
