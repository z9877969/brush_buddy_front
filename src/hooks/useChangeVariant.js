import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export const useChangeVariant = (variants) => {
  const navigate = useNavigate();

  return useCallback(
    ({ marker, volume }) => {
      const checkedWithMarkerVariants = variants.filter(
        (v) => v.marker === marker
      );

      const checkedWithValueVariant = checkedWithMarkerVariants.find(
        (v) => v.volume === volume
      );

      let checkedVariant = null;
      if (!checkedWithValueVariant) {
        checkedVariant = checkedWithMarkerVariants[0];
      } else {
        checkedVariant = checkedWithValueVariant;
      }
      const { _id: variantId, product: productId } = checkedVariant;
      navigate(`/products/${productId}/${variantId}`, {
        state: { top: document.documentElement.scrollTop },
      });
    },
    // eslint-disable-next-line
    [variants]
  );
};
