import { useParams } from 'react-router-dom';
import { Container } from 'shared/components';
// import productCard from '../data/products.json';
import { MyImage } from './MyImage/MyImage';
import s from './ProductCard.module.scss';
import { useEffect, useMemo, useState } from 'react';
import { Volume } from './Volume/Volume';
import { Color } from './Color/Color';
import { Flavor } from './Flavor/Flavor';
import { sprite } from 'shared/icons';
// import { useDispatch } from 'react-redux';
// import { addProduct } from '@redux/cart/cartSlice';
// import productCard from '../data/products.json';
// import products from '../../paginateProdList/data/products.json';
import clsx from 'clsx';
import useAddProduct from 'modules/cart/helpers/cartAddProductHook';
import { useSelector } from 'react-redux';
import { selectProductsList } from '@redux/products/productsSelectors';

const ProductCard = () => {
  // const dispatch = useDispatch();

  const { productId } = useParams();
  const products = useSelector(selectProductsList);

  const [mls, setMl] = useState(null);
  const [flavor, setFlavor] = useState(null);
  const [color, setColor] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const onClickAdd = useAddProduct();

  const product = useMemo(() => {
    const numId = Number(productId);
    return (
      products.find((el, i) => (el._id ? el._id === productId : i === numId)) ||
      {}
    );
  }, [productId, products]);

  // const onClickAdd = (product) => {
  //   dispatch(addProduct(product));
  // };
  // let productes = products[0];

  // console.log(productes);
  // console.log(color?.quantity);
  // const [productess] = useState([productes]);

  // const type = productess[0].type.map((item) => item);
  const type = product.type?.map((item) => item) || '';
  // const typess = type.join(' ');

  // console.log(typess);

  const shouldRenderChild = type.includes('child');
  const shouldRenderAnimal = type.includes('animal');
  const shouldRenderAdult = type.includes('adult');

  // const type = productess[0].type.map((item) => item);
  // const typess = type.join(' ');

  // console.log(typess);

  // const types = useMemo(() => {
  //   switch (typess) {
  //     case 'child':
  //       return 'icon-bage-child';
  //     case 'animal':
  //       return 'icon-bage-animal';
  //     case 'adult':
  //       return 'icon-bage-adult';
  //     default:
  //       return null;
  //   }
  // }, [typess]);

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
  // console.log(switchs);

  useEffect(() => {
    if (!Object.keys(product).length) return;
    setColor(product.colors[0]);
    setFlavor(product.flavors[0]);
    setMl(product.volume[0]);
  }, [product]);

  // console.log(products);
  // console.log(Object.keys(product));
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
                {shouldRenderChild && (
                  <svg className={s.child} width="48" height="24">
                    <use href={`${sprite}#icon-bage-child`}></use>
                  </svg>
                )}
                {shouldRenderAnimal && (
                  <svg className={s.animal} width="48" height="24">
                    <use href={`${sprite}#icon-bage-animal`}></use>
                  </svg>
                )}
                {shouldRenderAdult && (
                  <svg className={s.adult} width="48" height="24">
                    <use href={`${sprite}#icon-bage-adult`}></use>
                  </svg>
                )}
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
            {/* <p>Виберіть колір:</p> */}
            {/* <p>Виберіть колір: {product.colors.map((color) => {
                              return <p>{color}</p>
                          })}</p> */}
            {product.flavors.length > 0 && flavor ? (
              <Flavor
                productFlavours={product.flavors}
                value={flavor}
                setFlavor={setFlavor}
              />
            ) : null}
            {product.colors.length > 0 && color ? (
              <Color
                productColors={product.colors}
                value={color}
                setColor={setColor}
              />
            ) : null}
            {product.volume.length > 0 && mls ? (
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
                    product.flavors.length > 0
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
                  // className={clsx(
                  //   s.btnTest,
                  //   s.btnDontWorking && s.btnTest
                  // )}
                  type="submit"
                  onClick={() => {
                    onClickAdd({
                      id: product.id,
                      images: product.images[0].url,
                      price: product.price,
                      salePrice: product.salePrice,
                      title: product.title,
                      volume: mls?.volume ?? '',
                      flavor: flavor?.flavor ?? '',
                      color: color?.color ?? '',
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
              <p className={s.info}>{product.recomendation}</p>
            </div>
            <div>
              <p className={s.recomendation}>Рекомендація</p>
              <p className={s.recomendationInfo}>{product.recomendation}</p>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
};

export default ProductCard;
