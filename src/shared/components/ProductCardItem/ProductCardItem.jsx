import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { RoundButton } from 'shared/components';
import { ProductTypeIcon } from 'shared/components';
import { ProductWatermark } from 'shared/components';
import * as img from 'shared/images/productItem';
import { sprite } from 'shared/icons';
import { addProduct } from '@redux/cart/cartSlice';
import { useDispatch } from 'react-redux';

import s from './ProductCardItem.module.scss';

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

const ProductCardItem = ({ title, age, images, category, id, variants }) => {
  const [
    {
      color,
      flavor,
      marker,
      price,
      // product: prodId,
      quantity,
      salePrice,
      volume,
      watermark,
      // _id: varId,
    },
  ] = variants;

  const { url } = images?.[0] || { url: null };

  const dispatch = useDispatch();

  const hanleClick = () => {
    dispatch(
      addProduct({
        id,
        category,
        quantity,
        title,
        images: url,
        price,
        salePrice,
        color: marker,
        name: color,
        flavor,
        volume,
      })
    );
  };
  return (
    <div className={clsx(s.productItem, quantity === 0 && s.unavailable)}>
      <Link to={`/products/${id}`}>
        <div className={s.imageWarpper}>
          <img
            src={url ?? img['product_1']}
            alt={title}
            className={s.productImg}
            height={340}
            width={340}
          />
        </div>
        <ProductTypeIcon age={age} sprite={sprite} />
        <ProductWatermark watermark={watermark} sprite={sprite} />
        <p className={s.productName}>{title}</p>
      </Link>
      <div className={s.productFooter}>
        {salePrice ? (
          <div className={s.priceWrapper}>
            <p className={clsx(s.price, s.sale)}>{salePrice} грн</p>
            <p className={clsx(s.price, s.oldPrice)}>{price} грн</p>
          </div>
        ) : (
          <p className={s.price}>{price} грн</p>
        )}
        <RoundButton
          iconId={'icon-cart'}
          className={s.cartBtn}
          onClick={hanleClick}
          disabled={quantity === 0}
        />
      </div>
    </div>
  );
};

export default ProductCardItem;
