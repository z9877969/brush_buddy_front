import { sprite } from 'shared/icons';
import s from './CartListCurrentItem.module.scss';
import Counter from 'shared/components/Counter/Counter';
import { Link } from 'react-router-dom';

const CartListCurrentItem = ({
  data,
  changeCount,
  onClickDelete,
  //onClickAdd,
}) => {
  const elements = data.map(
    ({
      id,
      images,
      title,
      colors,
      price,
      salePrice,
      flavors,
      volume,
      isDisabledIncrement,
      amount,
    }) => {
      return (
        <li className={s.itemBox} key={id} id={id}>
          <Link className={s.itemproduct} to={`/products/${title}`}>
            <img className={s.itemImg} src={images.url} alt={title} />
            <div className={s.itemInfo}>
              <div>
                <p className={s.itemName}>{title}</p>
                <div className={s.itemDetails}>
                  {flavors && flavors.flavor && (
                    <p className={s.itemFlavor}>Смак: {flavors.flavor}</p>
                  )}
                  {colors && colors.name && (
                    <p className={s.itemColor}>Колір: {colors.name}</p>
                  )}
                  {volume && <p className={s.itemVol}>, об’єм: {volume} мл</p>}
                </div>
              </div>
              <div className={s.prices}>
                {salePrice !== 0 && (
                  <p className={s.itemDiscPrice}>{salePrice} грн</p>
                )}
                {salePrice !== 0 ? (
                  <p className={s.itemPriceDisc}>{price} грн</p>
                ) : (
                  <p className={s.itemPrice}>{price} грн</p>
                )}
              </div>
            </div>
          </Link>
          <div className={s.itemFooter}>
            <Counter
              classWrapper={s.counter}
              classSvg={s.classSvg}
              value={amount}
              changeCount={(newCount) =>
                changeCount({
                  id,
                  flavor: flavors?.flavor,
                  quantity: flavors?.quantity || colors.quantity,
                  volume: flavors?.volume,
                  color: colors?.color,
                  newCount,
                })
              }
              disabledIncrem={isDisabledIncrement}
            />
            <button
              type="button"
              className={s.deleteBtn}
              onClick={() =>
                onClickDelete({
                  id,
                  flavor: flavors?.flavor,
                  volume: flavors?.flavor,
                  color: colors?.color,
                })
              }
            >
              <svg>
                <use href={sprite + '#icon-delete'}></use>
              </svg>
            </button>
            {/* <button
                className={s.btnTest}
                type="submit"
                onClick={() =>
                  onClickAdd({
                    id,
                    images,
                    amount,
                    title,
                    colors,
                    price,
                    salePrice,
                    flavors,
                    volume,
                  })
                }
              >
                Test btn
              </button> */}
          </div>
        </li>
      );
    }
  );
  return elements;
};

export default CartListCurrentItem;
