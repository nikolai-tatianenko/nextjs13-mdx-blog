import Footer from '@/components/04-Templates/Layouts/Footer';
import LeftSideBar from '@/components/04-Templates/Layouts/LeftSideBar';
import A11yLink, { A11yAnchor } from '@/components/01-Atoms/UI/A11yLink';
import BackToTop from '@/components/01-Atoms/UI/BackToTop/BackToTop';
import TOC from '@/components/01-Atoms/UI/TOC/TOC';
import React from 'react';
import Header from './Header';
import SideBar from './SideBar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={'flex min-h-screen flex-col bg-white text-gray-900'}>
        <A11yLink />
        <Header />
        <div className={'max-w-8xl mx-auto w-full max-w-7xl px-4'}>
          <div className={'lg:flex'}>
            <LeftSideBar />
            <main
              id={'main-content-wrapper'}
              className={
                'w-full min-w-0 flex-auto lg:static lg:max-h-full lg:overflow-visible'
              }
            >
              <div className={'flex w-full'}>
                <div
                  className={
                    'pb:12 min-w-0 max-w-4xl flex-auto pt-6 lg:px-8 lg:pb-16 lg:pt-8 xl:pb-24'
                  }
                >
                  <A11yAnchor />
                  {children}
                </div>

                <SideBar id={'right_sidebar'} className={'mt-8 pt-8'}>
                  <nav
                    id="nav"
                    className="sticky?lg:h-(screen-18) px-1 pb-10 pl-3 pt-16 text-base font-normal lg:pb-20 lg:pl-0 lg:pt-2 lg:text-sm"
                    aria-label="Docs navigation"
                  >
                    <TOC />
                  </nav>
                </SideBar>
              </div>
            </main>
          </div>
        </div>
        <BackToTop />
        <Footer />
      </body>
    </html>
  );
}
