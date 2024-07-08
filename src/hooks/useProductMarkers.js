import { useMemo } from 'react';

export const useProductMarkers = (variants = []) => {
  const markersSelectors = useMemo(() => {
    const markers = variants.map((prodVar) => prodVar.marker);
    return [...new Set(markers)];
  }, [variants]);

  return markersSelectors;
};
