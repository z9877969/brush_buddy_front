import { useMemo } from 'react';
import { getActiveProduct } from '../../helpers/getActiveProduct';
import { ProductCardItem } from 'shared/components';

const ProductsListItem = (productProps) => {
  const { _id, variants, ...item } = productProps;

  const markers = useMemo(() => {
    return variants.map(({ _id, marker }) => ({
      varId: _id,
      marker,
    }));
  }, [variants]);

  const activeProduct = useMemo(() => {
    return getActiveProduct(productProps, variants[0]._id);
  }, [productProps, variants]);

  return (
    <ProductCardItem
      {...item}
      title={activeProduct.title}
      markers={markers}
      prodId={_id}
      activeVar={activeProduct}
    />
  );
};

export default ProductsListItem;
