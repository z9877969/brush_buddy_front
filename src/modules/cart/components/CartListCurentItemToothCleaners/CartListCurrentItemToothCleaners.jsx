import { sprite } from 'shared/icons';
import Counter from 'shared/components/Counter/Counter';
import { Link } from 'react-router-dom';
import s from './CartListCurrentItemToothCleaners.module.scss';

const CartListCurrentItemToothCleaners = ({
  data,
  changeCount,
  onClickDelete,
  //onClickAdd,}) => {
}) => {
  const elements = data.map(
    ({
      id,
      images,
      title,
      color,
      name,
      price,
      salePrice,
      flavor,
      volume,
      quantity,
      isDisabledIncrement,
      amount,
    }) => {
      return (
        <li className={s.itemBox} key={id} id={id}>
          <Link className={s.itemproduct} to={`/products/${title}`}>
            <img className={s.itemImg} src={images} alt={title} />
          </Link>
          <div className={s.itemInfo}>
            <p className={s.itemName}>{title}</p>
            <div className={s.itemDetails}>
              {flavor && <p className={s.itemFlavor}>Смак: {flavor}</p>}
              {color && <p className={s.itemColor}>Колір: {name}</p>}
              {volume && <p className={s.itemVol}> об’єм: {volume} мл</p>}
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
            <div className={s.itemFooter}>
              <Counter
                classWrapper={s.counter}
                classSvg={s.classSvg}
                value={amount ? amount : 1}
                changeCount={(newCount) =>
                  changeCount({
                    id,
                    flavor: flavor?.flavor,
                    quantity: quantity,
                    volume: flavor?.volume,
                    color: color?.color,
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
                    flavor: flavor?.flavor,
                    volume: flavor?.volume,
                    color: color?.color,
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
          </div>
        </li>
      );
    }
  );
  return elements;
};

export default CartListCurrentItemToothCleaners;
