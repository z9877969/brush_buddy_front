import { sprite } from 'shared/icons';
import s from './CartListCurrentItem.module.scss';
import Counter from 'shared/components/Counter/Counter';

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
      amount = 1,
    }) => {
      return (
        <li className={s.itemproduct} key={id} id={id}>
          <img className={s.itemImg} src={images.url} alt={title} />
          <div className={s.itemInfo}>
            <div>
              <p className={s.itemName}>{title}</p>
              <div className={s.itemDetails}>
                {flavors && flavors.length > 0 && (
                  <div className={s.itemFlavor}>
                    Смак:
                    {flavors.map((flavor, index) => (
                      <span key={index}>
                        {flavor.flavor}
                        {index !== flavors.length - 1 && ', '}
                      </span>
                    ))}
                  </div>
                )}
                {colors && colors.name && (
                  <p className={s.itemColor}>Колір: {colors.name}</p>
                )}
                {volume && <p className={s.itemVol}>об’єм: {volume}</p>}
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
            <div className={s.itemFooter}>
              <Counter
                classWrapper={s.counter}
                classSvg={s.classSvg}
                value={amount}
                changeCount={(newCount) =>
                  changeCount({
                    id,
                    flavor: flavors[0]?.flavor,
                    quantity: flavors[0]?.quantity || colors.quantity,
                    volume: flavors[0]?.volume,
                    color: colors?.color,
                    newCount,
                  })
                }
                disabledIncrem={isDisabledIncrement}
              />
              <button
                type="button"
                className={s.deleteBtn}
                onClick={() => onClickDelete(id)}
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

export default CartListCurrentItem;
