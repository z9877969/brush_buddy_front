import { useNormalizePopularProductProps } from 'hooks/useNormalizePopularProduct';
import { ProductCardItem } from 'shared/components';

const PopularProductsSlide = ({ firstProduct, secondProduct }) => {
  const firstProdProps = useNormalizePopularProductProps(firstProduct);
  const secondProdProps = useNormalizePopularProductProps(secondProduct);

  return (
    <>
      <ProductCardItem
        markers={firstProdProps.markers}
        activeVar={firstProdProps.activeVar}
        openProduct={firstProdProps.openProduct}
        prodId={firstProdProps.prodId}
        userType={firstProdProps.userType}
        title={firstProdProps}
        {...firstProdProps}
      />
      {secondProdProps && <ProductCardItem {...secondProdProps} />}
    </>
  );
};

export default PopularProductsSlide;
