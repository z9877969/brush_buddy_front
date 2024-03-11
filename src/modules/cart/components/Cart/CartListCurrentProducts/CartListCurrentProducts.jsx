import CartListCurrentItem from './CarListCurrentItem/CartListCurrentItem';
import productsArray from './data-test';
import s from './CartListCurrentProducts.module.scss';
import { MainTitle } from 'shared/components';

const CartListCurrentProducts = () => {
    return (
        <>
            <MainTitle title={"Мій кошик"} />
            <ul className={s.listOrederdProducts}><CartListCurrentItem data={productsArray} /></ul>
        </>
    )
}
export default CartListCurrentProducts;
