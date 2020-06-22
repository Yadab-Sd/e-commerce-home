import React, {ReactElement} from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactElement | ReactElement[];
}

const Layout = ({children}: LayoutProps): ReactElement => {
  return (
    <main className='main'>
      <Header />
      <div className='content'>
        {children}
      </div>
      <Footer />
    </main>
  );
};

export default Layout;
