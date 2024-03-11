import { sprite } from "shared/icons";
import s from './CartListCurrentItem.module.scss';
import Counter from "shared/components/Counter/Counter";

const CartListCurrentItem = ({ data }) => {
      const elements = data.map(({ id, image, name, color, price, discounted_price, flavor, volume }) => (
        <li className={s.itemproduct} key={id} id={id}>
          <img className={s.itemImg} src={image} alt={name} />
          <div className={s.itemInfo}>
            <div>
            <p className={s.itemName}>{name}</p>
            <div className={s.itemDetails}>
            {flavor && <p className={s.itemFlavor}>Смак: {flavor}</p>}
            {volume && <p className={s.itemVol}>об’єм: {volume}</p>}
                {color && <p className={s.itemColor}>Колір: {color}</p>}
                </div>
            </div>  
            {/* <p className={s.itemQuantity}>Quantity: {quantity}</p> */}
            <div className={s.prices}>
              {discounted_price && <p className={s.itemDiscPrice}>{discounted_price} грн</p>}
              {discounted_price ? <p className={s.itemPriceDisc}>{price} грн</p> : <p className={s.itemPrice}>{price} грн</p>}
            </div> 
            <div className={s.itemFooter}>
              <Counter classWrapper={s.counter} classSvg={s.classSvg}/> 
              <button className={s.deleteBtn}>
                <svg>
                  <use href={sprite + '#icon-delete'}></use>
                </svg>
              </button>
            </div>  
           </div> 
        </li>
      ));
    return elements;
}
export default CartListCurrentItem;