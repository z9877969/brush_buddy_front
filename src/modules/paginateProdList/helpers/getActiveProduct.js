import { updateProductTitle } from 'helpers/updateProductTitle';

export const getActiveProduct = (product, activeVarId) => {
  const activeVar = product.variants.find((v) => v._id === activeVarId);

  const activeProduct = {
    price: activeVar.price,
    salePrice: activeVar.salePrice,
    varId: activeVar._id,
    images: activeVar.images,
    color: activeVar.color,
    flavor: activeVar.flavor,
    volume: activeVar.volume,
    title: updateProductTitle({
      title: product.title,
      color: activeVar.color,
      flavor: activeVar.flavor,
      volume: activeVar.volume,
    }),
  };

  return activeProduct;
};
