import s from './CartListCurrentItemToothCleaners.module.scss';
import { Link } from 'react-router-dom';
import Counter from 'shared/components/Counter/Counter';
import { sprite } from 'shared/icons';

const CartListCurrentItem = ({ data, changeCount, onClickDelete }) => {
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
      category,
      isDisabledIncrement,
      amount,
    }) => {
      const isSalePrice =
        salePrice !== 0 && salePrice !== undefined && salePrice !== null; //перевірка чи існує ціна зі знижкою від цього залежать стилі
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
              {isSalePrice && (
                <p className={s.itemDiscPrice}>{salePrice} грн</p>
              )}
              {isSalePrice ? (
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
                    flavor: flavor,
                    quantity: quantity,
                    volume: volume,
                    color: color,
                    category: category,
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
                    flavor,
                    volume,
                    color,
                    category,
                  })
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
    }
  );
  return elements;
};

export default CartListCurrentItem;
