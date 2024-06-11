import { useMemo } from 'react';
import { getActiveProduct } from '../../helpers/getActiveProduct';
import { ProductCardItem } from 'shared/components';
import { useProductMarkers } from 'hooks/useProductMarkers';
import { useChangeVariant } from 'hooks/useChangeVariant';

const ProductsListItem = (productProps) => {
  const { _id, variants, ...item } = productProps;

  // const markers = useMemo(() => {
  //   return variants.map(({ _id, marker }) => ({
  //     varId: _id,
  //     marker,
  //   }));
  // }, [variants]);
  const markers = useProductMarkers(variants);

  const activeProduct = useMemo(() => {
    return getActiveProduct(productProps, variants[0]._id);
  }, [productProps, variants]);

  const openProductPage = useChangeVariant(variants);

  return (
    <ProductCardItem
      {...item}
      title={activeProduct.title}
      markers={markers}
      prodId={_id}
      activeVar={activeProduct}
      openProduct={openProductPage}
    />
  );
};

export default ProductsListItem;
