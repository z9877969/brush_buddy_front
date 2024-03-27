import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'modules/header';
import { Loader } from '..';
import { Footer } from 'modules/footer';
import { useShowFooter } from 'hooks/useShowFooter';

const SharedLayout = () => {
  // const location = useLocation();
  // const switchs = useMemo(() => {
  //   switch (location.pathname) {
  //     case '/not-found':
  //       return null;
  //     case '/thank':
  //       return null;
  //     case '/cart-empty':
  //       return null;
  //     default:
  //       return <Footer />;
  //   }
  // }, [location]);
  const switches = useShowFooter();
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      {switches === true ? switches : <Footer />}
      {/* {switchs} */}
    </>
  );
};

export default SharedLayout;
