import { useEffect, useMemo, useState } from 'react';
import { Navigate, useLocation, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';
import { ProductsList } from 'modules/mainPageToShopping';
import { Container } from 'shared/components';
import { MyImage } from './MyImage/MyImage';
import ProductOptions from './ProductOptions/ProductOptions';
import ProductPrice from './ProductPrice/ProductPrice';
import ProductCounter from './ProductCounter/ProductCounter';
import ProductDescription from './ProductDescription/ProductDescription';
import { useRecommendedProducts } from 'hooks/useRecommendedProducts';
import { useChangeVariant } from 'hooks/useChangeVariant';
import { changeProductAmount } from '@redux/cart/cartSlice';
import { updateProductTitle } from 'helpers';
import { ROUTES } from 'shared/constants';
import { sprite } from 'shared/icons';
import s from './ProductCard.module.scss';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { variantId } = useParams();

  const {
    // age,
    // category,
    description,
    // maker,
    // recomendation,
    title,
    // userType,
    variants,
  } = product;

  const [productCount, setProductCount] = useState(1);

  const curVariant = useMemo(() => {
    if (!variants) return null;
    return variants.find((v) => v._id === variantId);
  }, [variants, variantId]);

  const curTitle = updateProductTitle({
    title,
    color: curVariant?.color,
    flavor: curVariant?.flavor,
    volume: curVariant?.volume,
  });

  const recommendedProducts = useRecommendedProducts(product);

  const changeCurVariant = useChangeVariant(variants);

  const handleAddProductToCart = () => {
    dispatch(
      changeProductAmount({
        id: variantId,
        title: curTitle,
        volume: curVariant.volume,
        flavor: curVariant.flavor,
        color: curVariant.color,
        amount: productCount,
        quantity: curVariant.quantity,
        category: product.category.label,
        images: images[0],
        price: price,
        salePrice: salePrice,
      })
    );
  };

  useEffect(() => {
    setProductCount((p) => (p > 1 ? 1 : p));
  }, [variantId, location]);

  if (product.variants && !curVariant)
    return <Navigate to={ROUTES.NOT_FOUND} />;
  if (!curVariant) return null;

  const {
    salePrice,
    price,
    quantity: curVariantQuantity,
    images,
    watermark,
  } = curVariant;

  return (
    <Container>
      {Object.keys(product).length > 0 && (
        <div className={s.containerList} key={product.id}>
          <MyImage
            images={images}
            userTypes={product.userType}
            watermark={watermark}
          />
          <div className={s.informationBlock}>
            <h2 className={s.title}>{curTitle}</h2>
            <ProductPrice
              price={price}
              salePrice={salePrice}
              quantity={curVariantQuantity}
            />

            {variants.length > 0 && (
              <ProductOptions
                variants={variants}
                curVariant={curVariant}
                setCurVariant={changeCurVariant}
              />
            )}

            <p className={s.itemHave}>
              {curVariantQuantity > 0 ? null : (
                <span className={s.notHaveItem}>Товар закінчився</span>
              )}
            </p>
            <div className={s.cartBlock}>
              <ProductCounter
                count={productCount}
                setCount={setProductCount}
                disabledPrev={productCount <= 1}
                disabledNext={productCount >= curVariantQuantity}
              />
              <div>
                <button
                  className={clsx(
                    s.btnTest,
                    !curVariantQuantity || curVariantQuantity < productCount
                      ? s.btnDontWorking
                      : s.btnTest
                  )}
                  type="button"
                  disabled={
                    !curVariantQuantity || curVariantQuantity < productCount
                  }
                  onClick={handleAddProductToCart}
                >
                  В кошик
                  <svg width="20" height="20">
                    <use href={sprite + '#icon-cart'}></use>
                  </svg>
                </button>
              </div>
            </div>
            <ProductDescription description={description} />
          </div>
        </div>
      )}
      {recommendedProducts.length > 0 && (
        <ProductsList title={'Супутні товари'} products={recommendedProducts} />
      )}
    </Container>
  );
};

export default ProductCard;
