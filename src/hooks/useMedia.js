import { useMemo } from 'react';
import { useMediaQuery } from 'react-responsive';

export const useMedia = () => {
  // const isMobile = useMediaQuery({ query: '(max-width: 767.98px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });

  return useMemo(
    () => ({
      isMobile: !isTablet && !isDesktop,
      isTablet: isTablet && !isDesktop,
      isDesktop,
    }),
    [isTablet, isDesktop]
  );
};
