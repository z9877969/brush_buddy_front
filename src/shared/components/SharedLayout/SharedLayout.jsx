import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'modules/header';
import { Loader } from '..';
import { Footer } from 'modules/footer';
import { useShowFooter } from 'hooks/useShowFooter';

const SharedLayout = () => {
  const switches = useShowFooter();
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      {switches === true ? null : <Footer />}
    </>
  );
};

export default SharedLayout;
