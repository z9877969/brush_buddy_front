import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCT_TYPES } from 'shared/constants';
import s from './ProductDropDown.module.scss';

const ProductDropDown = () => {
    const [isDropDown, setDropDown] = useState(false);

    const toggleMenu = () => {
        setDropDown(!isDropDown);
    }

    return (
        <div className="product-dropdown">
      <span onClick={toggleMenu}>Товари</span>
      {isDropDown && (
        <ul className={s.dropDownList}>
            <li>
              <Link className={s.productTypesLink} to={PRODUCT_TYPES.ADULT}> 
                    Для дорослих
              </Link> 
            </li>
            <li>
                <Link className={s.productTypesLink} to={PRODUCT_TYPES.CHILD}>
                    Для дітей
                </Link>
            </li>
            <li>
                <Link className={s.productTypesLink} to={PRODUCT_TYPES.ANIMAL}>
                    Для тварин
                </Link>
            </li>
            <li>
                <Link className={s.productTypesLink} to={PRODUCT_TYPES.HELPER}>
                    Допомогайки
                </Link>
            </li>
        </ul>
      )}
    </div>
    );
};

export default ProductDropDown;