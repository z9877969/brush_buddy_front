import { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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
import { changeProductAmount } from '@redux/cart/cartSlice';
import { updateProductTitle } from 'helpers';
import { sprite } from 'shared/icons';
import s from './ProductCard.module.scss';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { variantId, productId } = useParams();

  const {
    // age,
    // category,
    description,
    // maker,
    // recomendation,
    subtitle,
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

  const changeCurVariant = useCallback(
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
      navigate(`/products/${productId}/${variantId}`);
    },
    // eslint-disable-next-line
    [variants]
  );

  const handleAddProductToCart = () => {
    dispatch(
      changeProductAmount({
        id: `${productId}/${variantId}`,
        variantId,
        productId,
        category: product.category,
        images: images[0],
        price: price,
        salePrice: salePrice,
        title: curTitle,
        volume: curVariant.volume,
        flavor: curVariant.flavor,
        color: curVariant.color,
        amount: productCount,
        quantity: curVariant.quantity,
      })
    );
  };

  useEffect(() => {
    setProductCount((p) => (p > 1 ? 1 : p));
  }, [variantId]);

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
            <p className={s.paragraph}>{subtitle}</p>
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
              {curVariantQuantity > 0 ? (
                <span className={s.haveItem}>Є в наявності</span>
              ) : (
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
            <div className={s.recomendationWrapper}>
              <p className={s.recomendation}>Рекомендація</p>
              <p className={s.recomendationInfo}>{product.recomendation}</p>
            </div>
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
