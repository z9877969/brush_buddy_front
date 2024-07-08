import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import {
  ProductMarkersList,
  RoundButton,
  ProductTypeIcon,
  ProductWatermark,
} from 'shared/components';
import { addProduct } from '@redux/cart/cartSlice';
import { noPictureImage } from 'shared/images';
import { sprite } from 'shared/icons';
import s from './ProductCardItem.module.scss';

/* 
images: []
marker: "#e10d0d"
price: 200
prodId: "662a524988f544ff60a30242"
salePrice: 180
title: "Товар 1  ЧЕРВОНИЙ"
userType: ['adult']
varId: "662a529888f544ff60a30250"
watermark: "wow"
*/

const ProductCardItem = ({
  markers, // [marker]
  prodId,
  userType,
  activeVar = {},
  openProduct,
  title: prodTitle,
  // age,
  // ...item
}) => {
  const dispatch = useDispatch();
  const {
    color,
    flavor,
    images,
    price,
    quantity,
    salePrice,
    title: activeVarTitle,
    varId,
    _id,
    volume,
    watermark,
  } = activeVar;

  /* 
    color: ""
    flavor: ""
    volume: ""
    images: ['https://res.cloudinary.com/dmfu2r8kg/image/upload/…E%D1%81%D0%B8/IMG_20240121_170157_633__nkw7eu.jpg']
    price: 300
    quantity: 10
    salePrice: 0
    title: "Флоси на тримачі (флосери) DenTek упаковка - 150 шт"
    varId: "666347fe85a182ba72f1b850"
  */

  const imageUrl = images?.[0] || noPictureImage;
  const activeVarId = varId || _id;
  const title = prodTitle || activeVarTitle;
  const curSalePrice = salePrice || activeVar.salePrice || 0;
  const curPrice = price || activeVar.price || 0;

  const hanleClick = () => {
    dispatch(
      addProduct({
        id: activeVarId,
        quantity,
        title,
        images: imageUrl,
        price,
        salePrice,
        color,
        flavor,
        volume,
      })
    );
  };

  return (
    <div className={clsx(s.productItem, quantity === 0 && s.unavailable)}>
      <Link to={`/products/${prodId}/${activeVarId}`}>
        <div className={s.imageWarpper}>
          <img
            src={imageUrl}
            alt={title}
            className={s.productImg}
            height={340}
            width={340}
          />
        </div>
        <ProductTypeIcon userType={userType} />
        <ProductWatermark watermark={watermark} sprite={sprite} />
      </Link>
      {markers.length > 0 && (
        <ProductMarkersList
          markers={markers}
          activeVar={activeVar}
          changeColor={openProduct}
        />
      )}
      <Link to={`/products/${prodId}/${activeVar.varId}`}>
        <p className={s.productName}>{title}</p>
      </Link>
      <div className={s.productFooter}>
        <div className={s.bottomSide}>
          {curSalePrice ? (
            <div className={s.priceWrapper}>
              <p className={clsx(s.price, s.sale)}>{curSalePrice} грн</p>
              <p className={clsx(s.price, s.oldPrice)}>{curPrice} грн</p>
            </div>
          ) : (
            <p className={s.price}>{curPrice} грн</p>
          )}
          <RoundButton
            iconId={'icon-cart'}
            className={s.cartBtn}
            onClick={hanleClick}
            disabled={quantity === 0}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCardItem;
