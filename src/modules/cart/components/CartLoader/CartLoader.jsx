import s from './CartLoader.module.scss';
const CartLoader = () => {
  return (
    <div className={s.boxLoader}>
      <span className={s.loader}></span>
    </div>
  );
};
export default CartLoader;
