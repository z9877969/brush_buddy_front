import { Suspense, useMemo } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from 'modules/header';
import { Loader } from '..';
import { Footer } from 'modules/footer';

const SharedLayout = () => {
  const location = useLocation();
  const switchs = useMemo(() => {
    switch (location.pathname) {
      case '/not-found':
        return null;
      case '/thank':
        return null;
      case '/cart-empty':
        return null;
      default:
        return <Footer />;
    }
  }, [location]);
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      {switchs}
    </>
  );
};

export default SharedLayout;
