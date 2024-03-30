import { nanoid } from 'nanoid';
import s from './CartListCurrentItem.module.scss';
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
      const isFlavor =
        flavor && flavor !== 0 && flavor !== undefined && flavor !== null;
      const isColor = color && color !== '';
      const isVolume =
        volume && volume !== 0 && volume !== undefined && volume !== null;
      return (
        <li className={s.itemBox} key={id + nanoid(5)} id={id}>
          <Link className={s.itemproduct} to={`/products/${id}`}>
            <img className={s.itemImg} src={images} alt={title} />
          </Link>
          <div className={s.itemInfo}>
            <p className={s.itemName}>{title}</p>
            <div className={s.itemDetails}>
              {isFlavor && <p className={s.itemFlavor}>Смак: {flavor}</p>}
              {isColor && <p className={s.itemColor}>Колір: {name}</p>}
              {isVolume && <p className={s.itemVol}> об’єм: {volume} мл</p>}
            </div>
            <div className={s.prices}>
              {isSalePrice ? (
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
