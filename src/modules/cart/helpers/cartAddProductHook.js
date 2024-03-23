import { useDispatch } from 'react-redux';
import { addProduct } from '@redux/cart/cartSlice';
//import { selectProd } from '@redux/cart/selectorsCart';

const useAddProduct = () => {
  //const products = useSelector(selectProd);
  const dispatch = useDispatch();

  const onClickAdd = (product) => {
    //ПЕРЕВІРКА НА ДУБЛІ В КОРЗИНІ
    // //product об'єкт який хочемо додати
    //   const { id, category, title, colors, colorMarker, volume } = product; //деструктуризація даних з продукту який додається
    //   //products всі продукти зі стейту редаксу
    //   const existProduct = products.filter((prod) => {
    //     //перевірка якщо прийшов colors
    //     if (prod.id === id && prod.colors && prod.colors.color === colors.color) {
    //       return true;
    //     }
    //     //перевірка якщо прийшов flavors
    //     if (
    //       prod.id === id &&
    //       prod.flavors &&
    //       prod.flavors.colorMarker === colorMarker &&
    //       prod.volume === volume
    //     ) {
    //       return true;
    //     }
    //     //перевірка якщо прийшли допомогайки
    //     if (
    //       prod.id === id &&
    //       prod.category === category &&
    //       prod.title === title
    //     ) {
    //       return true;
    //     }
    //     return false;
    //   });

    //   if (existProduct.length > 0) {
    //     // console.log('Product already exists:', existProduct[0].title);
    //   } else {

    dispatch(addProduct(product));
  };
  //};

  return onClickAdd;
};

export default useAddProduct;
