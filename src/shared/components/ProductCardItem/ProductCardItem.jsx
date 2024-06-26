import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
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
  title,
  images,
  markers, // [{varId, marker}]
  price,
  salePrice,
  watermark,
  quantity,
  prodId,
  userType,
  activeVar = {},
}) => {
  const imageUrl = images?.[0] || noPictureImage;

  const activeMarker = markers?.find((m) => m.varId === activeVar.varId) ?? [];

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const hanleClick = () => {
    dispatch(
      addProduct({
        // id,
        // category,
        // quantity,
        // title,
        // images: url,
        // price,
        // salePrice,
        // color: marker,
        // name: color,
        // flavor,
        // volume,
      })
    );
  };
  const curSalePrice = salePrice || activeVar.salePrice || 0;
  const curPrice = price || activeVar.price || 0;

  return (
    <div className={clsx(s.productItem, quantity === 0 && s.unavailable)}>
      <Link to={`/products/${prodId}/${activeVar.varId}`}>
        <div className={s.imageWarpper}>
          <img
            src={imageUrl}
            alt={title}
            className={s.productImg}
            height={340}
            width={340}
          />
        </div>
        <ProductTypeIcon age={userType} sprite={sprite} />
        <ProductWatermark watermark={watermark} sprite={sprite} />
      </Link>
      {markers.length > 0 && (
        <ProductMarkersList
          markers={markers}
          active={activeMarker || markers[0]}
          changeColor={({ varId }) => {
            navigate(`/products/${prodId}/${varId}`);
          }}
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
