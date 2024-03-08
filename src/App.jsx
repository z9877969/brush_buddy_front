import { Route, Routes } from 'react-router-dom';
import { Footer } from 'modules/footer';
import { ROUTES } from 'shared/constants';
import {
  AboutPage,
  BlogPage,
  CartPage,
  MainPage,
  NotFoundPage,
  ProductCardPage,
  ProductsPage,
} from './pages';
import { SharedLayout } from 'shared/components';

function App() {
  return (
    <>
      <Routes>
        <Route path={ROUTES.MAIN} element={<SharedLayout />}>
          <Route index element={<MainPage />} />
          <Route path={ROUTES.ABOUT} element={<AboutPage />} />
          <Route path={ROUTES.BLOG} element={<BlogPage />} />
          <Route path={ROUTES.CART} element={<CartPage />} />
          <Route path={ROUTES.PRODUCT_CARD} element={<ProductCardPage />} />
          <Route path={ROUTES.PRODUCTS} element={<ProductsPage />} />
          <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
