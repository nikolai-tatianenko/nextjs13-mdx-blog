import React, { ReactNode, FunctionComponent } from 'react';
import A11yLink, { A11yAnchor } from '@/components/UI/A11yLink';
import Menu from '@/components/UI/Menu/Menu';
import BackToTop from '@/components/UI/BackToTop/BackToTop';
import Footer from '@/components/Layouts/Footer';
import TableOfContents from '@/components/UI/TOC/TOC';
import Header from '@/components/Layouts/Header';

type LayoutProps = {
  children: ReactNode;
};

const Layout: FunctionComponent<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 min-h-screen flex flex-col">
        <A11yLink />
        <Header HeaderMenu={Menu} />

        <div className="flex flex-col justify-between lg:flex-row">
          <main className="w-full lg:w-[540px]">
            <div className="prose w-full max-w-none dark:prose-invert">
              <A11yAnchor />
              {children}
            </div>
          </main>
          <aside className="sticky bottom-0">
            <div className="">
              <TableOfContents />
            </div>
          </aside>
        </div>
        <BackToTop />
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
