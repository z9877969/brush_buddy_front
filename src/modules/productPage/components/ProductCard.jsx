// import { useParams } from 'react-router-dom';
import { Container } from 'shared/components';
// import productCard from '../data/products.json';
import { MyImage } from './MyImage/MyImage';
import s from './ProductCard.module.scss';
import { useMemo, useState } from 'react';
import { Volume } from './Volume/Volume';
import { Color } from './Color/Color';
import { Flavor } from './Flavor/Flavor';
import { sprite } from 'shared/icons';
// import { useDispatch } from 'react-redux';
// import { addProduct } from '@redux/cart/cartSlice';
// import productCard from '../data/products.json';
import { products } from 'shared/data';
// import products from '../../paginateProdList/data/products.json';
import clsx from 'clsx';
import useAddProduct from 'modules/cart/helpers/cartAddProductHook';

const ProductCard = () => {
  // const productId = useParams();
  const [quantity, setQuantity] = useState(1);
  // const productCard = useSelector((state) => state.productItem);
  const ml = products.map((item) => item.volume);
  const [mls, setMl] = useState(ml[0]);

  const flavors = products.map((item) => item.flavors);
  const [flavor, setFlavor] = useState(flavors[0]);

  const colors = products.map((item) => item.colors);
  const [color, setColor] = useState(colors[0]);

  const onClickAdd = useAddProduct();

  // const dispatch = useDispatch();
  // const onClickAdd = (product) => {
  //   dispatch(addProduct(product));
  // };
  let productes = products[0];

  // console.log(productes);
  // console.log(color.quantity);
  const [productess] = useState([productes]);

  const type = productess[0].type.map((item) => item);
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
    switch (productess[0].watermark[0]) {
      case 'sale':
        return 'icon-sale';
      case 'wow':
        return 'icon-wow';
      default:
        return null;
    }
  }, [productess]);
  // console.log(switchs);
  return (
    <Container>
      <div>
        <ul>
          {productess.map((product) => {
            return (
              <li className={s.containerList} key={product.id}>
                <MyImage imges={product.images} />
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
                  <h2 className={s.title}>{product.title}</h2>
                  <p className={s.paragraph}>{product.subtitle}</p>
                  {product.salePrice > 0 ? (
                    <div className={s.saleBlock}>
                      <p
                        className={clsx(
                          s.salePrice,
                          flavor.inStock === false || color.inStock === false
                            ? s.notHaveItemPrice
                            : s.salePrice
                        )}
                      >
                        {product.salePrice}
                        <span
                          className={clsx(
                            s.grn,
                            flavor.inStock === false || color.inStock === false
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
                          flavor.inStock === false || color.inStock === false
                            ? s.notHaveItemSalePrice
                            : s.notSalePrice
                        )}
                      >
                        {product.price}
                        <span
                          className={clsx(
                            s.grn,
                            flavor.inStock === false || color.inStock === false
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
                        flavor.inStock === false || color.inStock === false
                          ? s.notHavePrices
                          : s.price
                      )}
                    >
                      {product.price}
                      <span
                        className={clsx(
                          s.grn,
                          flavor.inStock === false || color.inStock === false
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
                  {product.flavors.length > 0 ? (
                    <Flavor
                      products={product}
                      value={flavor}
                      setFlavor={setFlavor}
                    />
                  ) : null}
                  {product.colors.length > 0 ? (
                    <Color
                      products={product}
                      value={color}
                      setColor={setColor}
                    />
                  ) : null}
                  {product.volume.length > 0 ? (
                    <Volume products={product} value={mls} setMls={setMl} />
                  ) : null}
                  <p className={s.itemHave}>
                    {flavor.quantity || color.quantity > 0 ? (
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
                            ? quantity === flavor.quantity
                            : quantity === color.quantity
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
                          flavor.inStock === false || color.inStock === false
                            ? s.btnDontWorking
                            : s.btnTest
                        )}
                        // className={clsx(
                        //   s.btnTest,
                        //   s.btnDontWorking && s.btnTest
                        // )}
                        type="submit"
                        onClick={
                          () =>
                            onClickAdd({
                              id: product.id,
                              images: product.images[0],
                              price: product.price,
                              salePrice: product.salePrice,
                              title: product.title,
                              volume: product.volume.length === 0 ? null : mls,
                              flavors:
                                product.flavors.length === 0 ? null : flavor,
                              colors:
                                product.colors.length === 0 ? null : color,
                              amount: quantity,
                            })
                          // console.log({
                          //   id: product.id,
                          //   images: product.images[0],
                          //   price: product.price,
                          //   salePrice: product.salePrice,
                          //   title: product.title,
                          //   volume: product.volume.length === 0 ? null : mls,
                          //   flavors:
                          //     product.flavors.length === 0 ? null : flavor,
                          //   colors: product.colors.length === 0 ? null : color,
                          //   amount: quantity,
                          // })
                        }
                        disabled={flavor.quantity === 0 || color.quantity === 0}
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
                    <p className={s.recomendationInfo}>
                      {product.recomendation}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </Container>
  );
};

export default ProductCard;
