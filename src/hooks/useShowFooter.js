import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

export const useShowFooter = () => {
  const location = useLocation();
  const switchs = useMemo(() => {
    switch (location.pathname) {
      case '/not-found':
        return true;
      case '/thank':
        return true;
      case '/cart-empty':
        return true;
      default:
        return false;
    }
  }, [location]);
  return switchs;
};
