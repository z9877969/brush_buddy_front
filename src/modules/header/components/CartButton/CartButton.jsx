import { Link } from 'react-router-dom';
import { ROUTES } from 'shared/constants';
import s from './CartButton.module.scss';

const CartButton = () => {

    return (
        <div>
            <div className={s.btnCart}>
                <Link to={ROUTES.CART}>
                    <svg width="24" height="24">
                        <use href="/src/shared/icons/sprite.svg#icon-cart"></use>
                    </svg>
                </Link>
            </div>
        </div>
    );
};

export default CartButton;