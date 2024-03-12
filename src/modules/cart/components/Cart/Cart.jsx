import { Container } from "shared/components";
import CartListCurrentProducts from "./CartListCurrentProducts/CartListCurrentProducts";
import OrderPromoCode from "./CartOrder/OrderPromoCode/OrderPromoCode";
const Cart = () => {
  return <section>
    <Container>
      <CartListCurrentProducts />
      <p>component forms</p>
      <p>component delivery</p>
      <OrderPromoCode/>
    </Container>  
  </section>;
};

export default Cart;
