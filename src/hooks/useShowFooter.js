import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { ROUTES } from 'shared/constants';

export const useShowFooter = () => {
  const location = useLocation();

  const switchs = useMemo(() => {
    switch (location.pathname) {
      case ROUTES.NOT_FOUND:
        return true;
      case ROUTES.THANK:
        return true;
      case ROUTES.CART_EMPTY:
        return true;
      // case ROUTES.CART:
      //   return isCartProductsExist ? true : false;
      default:
        return false;
    }
  }, [location]);
  return switchs;
};
