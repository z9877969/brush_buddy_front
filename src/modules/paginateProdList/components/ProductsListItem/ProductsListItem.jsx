import { useMemo } from 'react';
import { getActiveProduct } from '../../helpers/getActiveProduct';
import { ProductCardItem } from 'shared/components';
import { useProductMarkers } from 'hooks/useProductMarkers';
import { useChangeVariant } from 'hooks/useChangeVariant';

const ProductsListItem = (productProps) => {
  const { _id, variants } = productProps;

  const markers = useProductMarkers(variants);

  const activeProduct = useMemo(() => {
    return getActiveProduct(productProps, variants[0]._id);
  }, [productProps, variants]);

  const openProductPage = useChangeVariant(variants);
  /* 
_id:"661ce38fda48b8c54f8341ad"
age:["0to3", "4to6", "6to12"]
category:{_id: "66196c344359dc726e3f8824", label: "Зубна пас…}
title:"Дитяча зубна паста Brush baby"
description:[{…}, {…}]
maker:{_id: "66196d5e4359dc726e3f8830", label: "Brush-bab…}
recomendation:"Склад цієї пасти дуже добре видно на фото її зворотньої сторони."
subtitle:"Дитяча зубна паста для щоденного використання (від 3 років з високим ризиком розвитку карієсу або з появою 1 постійного зуба)."
userType:["child"]
  */

  return (
    <ProductCardItem
      activeVar={activeProduct}
      markers={markers}
      prodId={_id}
      userType={productProps.userType}
      openProduct={openProductPage}
    />
  );
};

export default ProductsListItem;
