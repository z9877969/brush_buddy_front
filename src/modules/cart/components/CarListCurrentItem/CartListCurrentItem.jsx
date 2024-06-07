import s from './CartListCurrentItem.module.scss';
import { Link } from 'react-router-dom';
import Counter from 'shared/components/Counter/Counter';
import { sprite } from 'shared/icons';
import { useDispatch } from 'react-redux';
import { changeProductAmount } from '@redux/cart/cartSlice';

const CartListCurrentItem = ({ data }) => {
  const dispatch = useDispatch();

  return data.map((product) => {
    const {
      id: productPath, // -> productId/variantId
      images,
      title,
      color,
      price,
      salePrice,
      flavor,
      volume,
      quantity,
      amount,
    } = product;
    return (
      <li className={s.itemBox} key={productPath} id={productPath}>
        <Link className={s.itemproduct} to={`/products/${productPath}`}>
          <img className={s.itemImg} src={images} alt={title} />
        </Link>
        <div className={s.itemInfo}>
          <p className={s.itemName}>{title}</p>
          <div className={s.itemDetails}>
            {Boolean(flavor) && <p className={s.itemFlavor}>Смак: {flavor}</p>}
            {Boolean(color) && <p className={s.itemColor}>Колір: {name}</p>}
            {Boolean(volume) && (
              <p className={s.itemVol}> об’єм: {volume} мл</p>
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
                    quantity,
                    amount: newCount,
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
