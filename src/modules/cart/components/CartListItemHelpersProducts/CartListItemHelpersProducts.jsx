import s from '../CartListCurentItemToothCleaners/CartListCurrentItemToothCleaners.module.scss';
import { Link } from 'react-router-dom';
import Counter from 'shared/components/Counter/Counter';
import { sprite } from 'shared/icons';

const CartListCurrentItemHelpersProducts = ({
  data,
  changeCount,
  onClickDelete,
  // onClickAdd,
}) => {
  const elements = data.map(
    ({
      id,
      images,
      title,
      price,
      isDisabledIncrement,
      amount,
      quantity,
      category,
    }) => {
      return (
        <li className={s.itemBox} key={id} id={id}>
          <Link className={s.itemproduct} to={`/products/${title}`}>
            <img className={s.itemImg} src={images} alt={title} />
          </Link>
          <div className={s.itemInfo}>
            <div>
              <p className={s.itemName}>{title}</p>
            </div>
            <div className={s.prices}>
              <p className={s.itemPrice}>{price} грн</p>
            </div>
            <div className={s.itemFooter}>
              <Counter
                classWrapper={s.counter}
                classSvg={s.classSvg}
                value={amount ? amount : 1}
                changeCount={(newCount) =>
                  changeCount({
                    id,
                    category,
                    quantity,
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
                    category,
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
                  title,
                  price,
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
export default CartListCurrentItemHelpersProducts;
