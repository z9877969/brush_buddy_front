import { Container } from "shared/components";
import CartListCurrentProducts from "./CartListCurrentProducts/CartListCurrentProducts";
const Cart = () => {
  return <section>
    <Container>
      <CartListCurrentProducts />
      <p>component forms</p>
    </Container>  
  </section>;
};

export default Cart;
