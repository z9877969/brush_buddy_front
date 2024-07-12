import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import {
  AboutPage,
  BlogPage,
  CartPage,
  MainPage,
  NotFoundPage,
  ProductCardPage,
  ProductsPage,
  ThankPage,
  CartEmptyPage,
} from './pages';
import { Toastify, ScrollToTop, SharedLayout } from 'shared/components';
import { getProducts } from '@redux/products/productsOperations';
import { getBlogs } from '@redux/blogs/blogsOperations';
import { ROUTES } from 'shared/constants';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getBlogs());
  }, [dispatch]);
  return (
    <>
      <ScrollToTop />
      <Toastify />
      <Routes>
        <Route path={ROUTES.MAIN} element={<SharedLayout />}>
          <Route index element={<MainPage />} />
          <Route path={ROUTES.ABOUT} element={<AboutPage />} />
          <Route path={ROUTES.BLOG} element={<BlogPage />} />
          <Route path={ROUTES.CART} element={<CartPage />} />
          <Route path={ROUTES.PRODUCT_CARD} element={<ProductCardPage />} />
          <Route path={ROUTES.PRODUCTS} element={<ProductsPage />} />
          <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
          <Route path={ROUTES.THANK + '/:orderNum'} element={<ThankPage />} />
          <Route path={ROUTES.CART_EMPTY} element={<CartEmptyPage />} />
          <Route path="*" element={<Navigate to={ROUTES.MAIN} />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
