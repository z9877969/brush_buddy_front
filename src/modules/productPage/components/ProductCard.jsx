import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import { ProductsList } from 'modules/mainPageToShopping';
import { Container } from 'shared/components';
import { MyImage } from './MyImage/MyImage';
// import { Volume } from './Volume/Volume';
// import { Color } from './Color/Color';
// import { Flavor } from './Flavor/Flavor';
import ProductDescriptionList from './ProductDescriptionList/ProductDescriptionList';
import { useAddProductToCart } from 'hooks';
import { sprite } from 'shared/icons';
import s from './ProductCard.module.scss';
import ProductOptions from './ProductOptions/ProductOptions';

/* const p = {
  age: ['0to3', '4to6', '6to12'],
  category: {
    _id: '66196c344359dc726e3f8824',
    label: 'Зубна паста',
    value: 'toothpastes',
  },
  description: [
    {
      paragraph:
        "Ця зубна паста має унікальне поєднання ксилітолу і фтору та призначена для захисту зубів від карієсу. Ця смачна м'ятна паста стимулює дітей до чистки зубів! Допомагає відновити рН в роті до здорового рівня.",
    },
    {
      items: [
        '10% ксиліту;',
        '1350 ppmF натрію монофторфосфату;',
        'не містить лаурилсульфат натрію (SLS) та парабенів;',
        'не містить також пальмової олії, молочних продуктів та сої;',
        'має низьке піноутворення.',
      ],
      title: 'Основні характеристики:',
    },
  ],
  images: [],
  maker: {
    _id: '66196d5e4359dc726e3f8830',
    label: 'Brush-baby',
    value: 'brushbaby',
  },
  recomendation:
    'Склад цієї пасти дуже добре видно на фото її зворотньої сторони.',
  subtitle:
    'Дитяча зубна паста для щоденного використання (від 3 років з високим ризиком розвитку карієсу або з появою 1 постійного зуба).',
  title: 'Дитяча зубна паста ПОЛУНИЦЯ Brush baby STRAWBERRY',
  userType: ['child'],
  variants: [
    {
      color: '',
      flavor: 'Полуниця',
      marker: '#2ce18a',
      price: 230,
      product: '66281d34e91611845a460948',
      quantity: 5,
      salePrice: 0,
      volume: '50мл',
      watermark: '',
      _id: '661ce908673498c3793bb3de',
    },
  ],
}; */

const ProductCard = ({ product: { variants, ...product } }) => {
  const products = useSelector((s) => s.products.list);

  const [mls, setMl] = useState(null);
  const [flavor, setFlavor] = useState(null);
  const [color, setColor] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const [curVar, setCurVar] = useState(null);

  const addProductToCart = useAddProductToCart();

  const age = product.age?.map((item) => item) || '';

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
    if (!age || !Array.isArray(age)) return [];
    return productsInStock.filter((prod) =>
      prod.age.some((item) => age.includes(item))
    );
  }, [productsInStock, age]);

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
    if (!variants?.length) return;
    setColor(variants[0].color || null);
    setFlavor(variants[0].flavor || null);
    setMl(variants[0].volume || null);
  }, [variants]);

  const isInStockProduct =
    flavor || color
      ? Boolean(
          flavor?.inStock ||
            color?.inStock ||
            flavor?.quantity ||
            color?.quantity
        )
      : false;

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
                {age.map((el) => (
                  <svg key={el} className={s[el]} width="48" height="24">
                    <use href={`${sprite}#icon-bage-${el}`}></use>
                  </svg>
                ))}
              </div>
            </div>
            <h2 className={s.title}>{product?.title}</h2>
            <p className={s.paragraph}>{product?.subtitle}</p>
            {variants[0].salePrice > 0 ? (
              <div className={s.saleBlock}>
                <p
                  className={clsx(
                    s.salePrice,
                    !isInStockProduct ? s.notHaveItemPrice : s.salePrice
                  )}
                >
                  {variants[0].salePrice}
                  <span
                    className={clsx(
                      s.grn,
                      !isInStockProduct ? s.notHaveItemPrice : s.grn
                    )}
                  >
                    грн
                  </span>
                </p>
                <p
                  className={clsx(
                    s.notSalePrice,
                    !isInStockProduct ? s.notHaveItemSalePrice : s.notSalePrice
                  )}
                >
                  {variants[0].price}
                  <span
                    className={clsx(
                      s.grn,
                      !isInStockProduct ? s.notHaveItemSalePrice : s.grn
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
                  !isInStockProduct ? s.notHavePrices : s.price
                )}
              >
                {variants[0].price}
                <span
                  className={clsx(
                    s.grn,
                    !isInStockProduct ? s.notHavePrices : s.grn
                  )}
                >
                  грн
                </span>
              </p>
            )}

            {variants.length > 0 && (
              <ProductOptions
                variants={variants}
                curVar={curVar}
                setCurVar={setCurVar}
              />
            )}

            <p className={s.itemHave}>
              {isInStockProduct ? (
                <span className={s.haveItem}>Є в наявності</span>
              ) : (
                <span className={s.notHaveItem}>Товар закінчився</span>
              )}
            </p>
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
                      ? quantity >= flavor?.quantity
                      : product.colors?.length > 0
                        ? quantity >= color?.quantity
                        : !isInStockProduct
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
                    !isInStockProduct ? s.btnDontWorking : s.btnTest
                  )}
                  type="submit"
                  onClick={() => {
                    addProductToCart({
                      id: product.id,
                      category: product.category,
                      images: product.images[0].url,
                      price: product.price,
                      salePrice: product.salePrice,
                      title: product.title,
                      volume: mls?.volume ?? '',
                      flavor: flavor?.name ?? '',
                      color: color?.color ?? '',
                      amount: quantity,
                      quantity: flavor?.quantity ?? color?.quantity,
                      name: mls?.name ?? flavor?.name ?? color?.name,
                    });
                  }}
                  disabled={!isInStockProduct}
                >
                  В кошик
                  <svg width="20" height="20">
                    <use href={sprite + '#icon-cart'}></use>
                  </svg>
                </button>
              </div>
            </div>
            <div className={s.descrWrapper}>
              <p className={s.description}>Опис</p>
              {typeof product?.description === 'string' ? (
                <p className={s.info}>{product.description}</p>
              ) : (
                product.description?.map(
                  ({ title, items, paragraph }, i, arr) =>
                    paragraph ? (
                      <p
                        className={clsx(s.info, i < arr.length - 1 && s.mb)}
                        key={i}
                      >
                        {paragraph}
                      </p>
                    ) : (
                      <ProductDescriptionList
                        key={i}
                        title={title}
                        items={items}
                        mb={i < arr.length - 1}
                      />
                    )
                )
              )}
            </div>
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
