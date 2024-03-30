import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'modules/header';
import { Loader } from '..';
import { Footer } from 'modules/footer';
import { useShowFooter } from 'hooks/useShowFooter';

const SharedLayout = () => {
  const isHide = useShowFooter();

  return (
    <>
      <Header />
      <div style={{ minHeight: '100vh' }}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
      {isHide ? null : <Footer />}
    </>
  );
};

export default SharedLayout;
