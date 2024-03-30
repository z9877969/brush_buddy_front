// import { useParams } from 'react-router-dom';
import { Container } from 'shared/components';
// import productCard from '../data/products.json';
import { MyImage } from './MyImage/MyImage';
import { useEffect, useMemo, useState } from 'react';
import { Volume } from './Volume/Volume';
import { Color } from './Color/Color';
import { Flavor } from './Flavor/Flavor';
import { sprite } from 'shared/icons';
import clsx from 'clsx';
import useAddProduct from 'modules/cart/helpers/cartAddProductHook';
import s from './ProductCard.module.scss';
import { ProductsList } from 'modules/mainPageToShopping';
import { useSelector } from 'react-redux';

const ProductCard = ({ product }) => {
  const [mls, setMl] = useState(null);
  const [flavor, setFlavor] = useState(null);
  const [color, setColor] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const onClickAdd = useAddProduct();

  const type = product.type?.map((item) => item) || '';
  const products = useSelector((s) => s.products.list);
  const productsInStock = useMemo(() => {
    const productsWithColorsInStock = products.filter((product) => {
      return (
        product.colors?.length &&
        product.colors.some((color) => color.inStock === true)
      );
    });

    const productsWithFlavorsInStock = products.filter((product) => {
      return (
        product.flavors?.length &&
        product.flavors.some((flavor) => flavor.inStock === true)
      );
    });

    const allProductsInStock = [
      ...productsWithColorsInStock,
      ...productsWithFlavorsInStock,
    ];

    return allProductsInStock;
  }, [products]);

  const recommendedProducts = useMemo(() => {
    if (!type || !Array.isArray(type)) return [];
    return productsInStock.filter((prod) =>
      prod.type.some((item) => type.includes(item))
    );
  }, [productsInStock, type]);

  const switchs = useMemo(() => {
    if (!product.watermark) return null;
    switch (product.watermark[0]) {
      case 'sale':
        return 'icon-sale';
      case 'wow':
        return 'icon-wow';
      default:
        return null;
    }
  }, [product]);

  useEffect(() => {
    if (!Object.keys(product).length) return;
    setColor(product.colors[0]);
    setFlavor(product.flavors[0]);
    setMl(product.volume[0]);
  }, [product]);

  return (
    <Container>
      {Object.keys(product).length > 0 && (
        <div className={s.containerList} key={product.id}>
          <MyImage imges={product?.images || []} />
          <div className={s.informationBlock}>
            <div className={s.spriteBlock}>
              <div>
                <svg
                  className={clsx(
                    s.switch,
                    switchs === null
                      ? s.none
                      : switchs === 'icon-sale'
                        ? s.sale
                        : s.wow
                  )}
                >
                  <use href={`${sprite}#${switchs}`}></use>
                </svg>
              </div>
              <div>
                {type.map((el) => (
                  <svg key={el} className={s[el]} width="48" height="24">
                    <use href={`${sprite}#icon-bage-${el}`}></use>
                  </svg>
                ))}
              </div>
            </div>
            <h2 className={s.title}>{product?.title}</h2>
            <p className={s.paragraph}>{product?.subtitle}</p>
            {product.salePrice > 0 ? (
              <div className={s.saleBlock}>
                <p
                  className={clsx(
                    s.salePrice,
                    flavor?.inStock === false || color?.inStock === false
                      ? s.notHaveItemPrice
                      : s.salePrice
                  )}
                >
                  {product.salePrice}
                  <span
                    className={clsx(
                      s.grn,
                      flavor?.inStock === false || color?.inStock === false
                        ? s.notHaveItemPrice
                        : s.grn
                    )}
                  >
                    грн
                  </span>
                </p>
                <p
                  className={clsx(
                    s.notSalePrice,
                    flavor?.inStock === false || color?.inStock === false
                      ? s.notHaveItemSalePrice
                      : s.notSalePrice
                  )}
                >
                  {product.price}
                  <span
                    className={clsx(
                      s.grn,
                      flavor?.inStock === false || color?.inStock === false
                        ? s.notHaveItemSalePrice
                        : s.grn
                    )}
                  >
                    грн
                  </span>
                </p>
              </div>
            ) : (
              <p
                className={clsx(
                  s.price,
                  flavor?.inStock === false || color?.inStock === false
                    ? s.notHavePrices
                    : s.price
                )}
              >
                {product.price}
                <span
                  className={clsx(
                    s.grn,
                    flavor?.inStock === false || color?.inStock === false
                      ? s.notHavePrices
                      : s.grn
                  )}
                >
                  грн
                </span>
              </p>
            )}
            {product.flavors?.length > 0 && flavor ? (
              <Flavor
                productFlavours={product.flavors}
                value={flavor}
                setFlavor={setFlavor}
              />
            ) : null}
            {product.colors?.length > 0 &&
            product.colors[0].color.length > 0 &&
            color ? (
              <Color
                productColors={product.colors}
                value={color}
                setColor={setColor}
              />
            ) : null}
            {product.volume?.length > 0 && mls ? (
              <Volume
                productVolume={product.volume}
                value={mls}
                setMls={setMl}
              />
            ) : null}
            <p className={s.itemHave}>
              {flavor?.quantity || color?.quantity > 0 ? (
                <span className={s.haveItem}>Є в наявності</span>
              ) : (
                <span className={s.notHaveItem}>Товар закінчився</span>
              )}
            </p>
            {/* <Counter
                    value={Number(product.quantit)}
                    changeCount={Number(product.quantit)}
                    disabledIncrem={Number(product.quantity)}
                  /> */}
            <div className={s.cartBlock}>
              <div className={s.buttonBlock}>
                <button
                  onClick={() => {
                    setQuantity(quantity - 1);
                  }}
                  disabled={quantity <= 1}
                  type="button"
                >
                  <svg width="16" height="16">
                    <use href={sprite + '#icon-minus'}></use>
                  </svg>
                </button>
                <span className={s.quantityText}>{quantity}</span>
                <button
                  onClick={() => {
                    return setQuantity(quantity + 1);
                  }}
                  disabled={
                    product.flavors?.length > 0
                      ? quantity === flavor?.quantity
                      : quantity === color?.quantity
                  }
                  type="button"
                >
                  <svg width="16" height="16">
                    <use href={sprite + '#icon-plus'}></use>
                  </svg>
                </button>
              </div>
              <div>
                <button
                  className={clsx(
                    s.btnTest,
                    flavor?.inStock === false || color?.inStock === false
                      ? s.btnDontWorking
                      : s.btnTest
                  )}
                  type="submit"
                  onClick={() => {
                    onClickAdd({
                      id: product.id,
                      category: product.category,
                      images: product.images[0].url,
                      price: product.price,
                      salePrice: product.salePrice,
                      title: product.title,
                      volume: mls?.volume ?? '',
                      flavor: flavor?.name ?? '',
                      color: color?.name ?? '',
                      amount: quantity,
                      quantity: flavor?.quantity ?? color?.quantity,
                      name: mls?.name ?? flavor?.name ?? color?.name,
                    });
                  }}
                  disabled={flavor?.quantity === 0 && color?.quantity === 0}
                >
                  В кошик
                  <svg width="20" height="20">
                    <use href={sprite + '#icon-cart'}></use>
                  </svg>
                </button>
              </div>
            </div>
            <div>
              <p className={s.description}>Опис</p>
              <p className={s.info}>{product.description}</p>
            </div>
            <div>
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
