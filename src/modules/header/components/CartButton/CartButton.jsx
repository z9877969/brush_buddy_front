import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from 'shared/constants';
import s from './CartButton.module.scss';
import { selectCartProductsCount } from 'modules/header/data/selectCartProductsCount';
import { sprite } from 'shared/icons/index';

const CartButton = () => {
  const location = useLocation();
  const cartProductsCount = useSelector(selectCartProductsCount);

  return (
    <div className={s.btnCartWrap}>
      <span className={s.cartCount}>{cartProductsCount}</span>

      <div className={s.btnCart}>
        <Link
          to={ROUTES.CART}
          onClick={(e) => {
            location.pathname === ROUTES.CART_EMPTY &&
              cartProductsCount === 0 &&
              e.preventDefault();
          }}
        >
          <svg width="24" height="24">
            <use href={`${sprite}#icon-cart`}></use>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default CartButton;
