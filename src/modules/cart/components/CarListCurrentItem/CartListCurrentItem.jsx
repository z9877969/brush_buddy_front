import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Counter from 'shared/components/Counter/Counter';
import { sprite } from 'shared/icons';
import { changeProductAmount } from '@redux/cart/cartSlice';
import { noPictureImage } from 'shared/images';
import s from './CartListCurrentItem.module.scss';
import clsx from 'clsx';

const CartListCurrentItem = ({ data }) => {
  const dispatch = useDispatch();

  return data.map((product) => {
    const {
      id: productPath, // -> productId/variantId
      title,
      color,
      flavor,
      volume,
      images,
      price,
      salePrice,
      quantity,
      amount,
    } = product;
    const imageUrl = images ?? noPictureImage;

    return (
      <li className={s.itemBox} key={productPath} id={productPath}>
        <Link className={s.itemproduct} to={`/products/${productPath}`}>
          <img className={s.itemImg} src={imageUrl} alt={title} />
        </Link>
        <div className={s.itemInfo}>
          <p className={s.itemName}>{title}</p>
          <div className={s.itemDetails}>
            {Boolean(flavor) && (
              <p className={clsx(s.itemFlavor, s.itemOption)}>Смак: {flavor}</p>
            )}
            {Boolean(color) && (
              <p className={clsx(s.itemColor, s.itemOption)}>Колір: {color}</p>
            )}
            {Boolean(volume) && (
              <p className={clsx(s.itemVol, s.itemOption)}> об’єм: {volume}</p>
            )}
          </div>
          <div className={s.prices}>
            {salePrice > 0 ? (
              <>
                <p className={s.itemDiscPrice}>{salePrice} грн</p>
                <p className={s.itemPriceDisc}>{price} грн</p>
              </>
            ) : (
              <p className={s.itemPrice}>{price} грн</p>
            )}
          </div>
          <div className={s.itemFooter}>
            <Counter
              classWrapper={s.counter}
              classSvg={s.classSvg}
              value={amount ? amount : 1}
              changeCount={(newCount) =>
                dispatch(
                  changeProductAmount({
                    id: productPath,
                    amount: newCount,
                    price,
                    salePrice,
                  })
                )
              }
              disabledIncrem={amount >= quantity}
              disabledDecr={amount <= 1}
            />
            <button
              type="button"
              className={s.deleteBtn}
              onClick={() =>
                dispatch(
                  changeProductAmount({
                    id: productPath,
                    quantity,
                    amount: 0,
                  })
                )
              }
            >
              <svg>
                <use href={sprite + '#icon-delete'}></use>
              </svg>
            </button>
          </div>
        </div>
      </li>
    );
  });
};

export default CartListCurrentItem;
