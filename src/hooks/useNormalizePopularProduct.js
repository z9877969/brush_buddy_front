import { useMemo } from 'react';
import { updateProductTitle } from '../helpers/updateProductTitle';
import { useChangeVariant } from 'hooks/useChangeVariant';

export const useNormalizePopularProductProps = (product) => {
  const changeVariant = useChangeVariant(product?.variants ?? []);

  return useMemo(() => {
    if (product) {
      const { title, variants = [], _id: productId, userType } = product;
      const {
        color,
        flavor,
        images,
        marker,
        price,
        quantity,
        salePrice,
        volume,
        watermark,
      } = variants[0];
      return {
        title: updateProductTitle({ title, color, flavor, volume }),
        images: images,
        markers: [marker],
        price: price,
        salePrice: salePrice,
        watermark: watermark,
        quantity: quantity,
        prodId: productId,
        userType: userType,
        activeVar: variants[0],
        openProduct: changeVariant,
      };
    }
    return null;
  }, [changeVariant, product]);
};
