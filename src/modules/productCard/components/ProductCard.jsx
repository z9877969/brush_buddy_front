// import { useParams } from 'react-router-dom';
import { Container } from 'shared/components';
import productCard from '../data/products.json';
import { MyImage } from './Myimage/Myimage';
import s from './ProductCard.module.scss';
import { useState } from 'react';
import { Volume } from './Volume/Volume';
import { Color } from './Color/Color';
import { Flavor } from './ Flavor/Flavor';
import { sprite } from 'shared/icons';

const ProductCard = () => {
  // const productId = useParams();
  const [quantity, setQuantity] = useState(1);
  return (
    <Container>
      <h2>Product card</h2>
      <div>
        <ul>
          {productCard.map((product) => {
            return (
              <li className={s.containerList} key={product.id}>
                <MyImage imges={product.imgs} />
                <div className={s.informationBlock}>
                  <h2 className={s.title}>{product.title}</h2>
                  <p className={s.paragraph}>{product.text}</p>
                  <p className={s.price}>{product.price}</p>
                  {/* <p>Виберіть колір:</p> */}
                  {/* <p>Виберіть колір: {product.colors.map((color) => {
                              return <p>{color}</p>
                          })}</p> */}
                  {product.litter ? (
                    <Flavor products={product} arr={productCard} />
                  ) : null}
                  {product.litter ? (
                    <Color products={product} arr={productCard} />
                  ) : null}
                  {product.litter ? (
                    <Volume products={product} arr={productCard} />
                  ) : null}
                  <p className={s.itemHave}>
                    {product.itme ? 'Є в наявності' : 'немає в наявності'}
                  </p>
                  {/* <Counter
                    value={Number(product.quantit)}
                    changeCount={Number(product.quantit)}
                    disabledIncrem={Number(product.quantity)}
                  /> */}
                  <div className={s.buttonBlock}>
                    <button
                      onClick={() => {
                        setQuantity((product.quantit = quantity - 1));
                      }}
                      disabled={product.quantit <= 1}
                      type="button"
                    >
                      <svg width="16" height="16">
                        <use href={sprite + '#icon-minus'}></use>
                      </svg>
                    </button>
                    <span className={s.quantityText}>{product.quantit}</span>
                    <button
                      onClick={() => {
                        setQuantity((product.quantit = quantity + 1));
                      }}
                      disabled={product.quantit >= product.quantity}
                      type="button"
                    >
                      <svg width="16" height="16">
                        <use href={sprite + '#icon-plus'}></use>
                      </svg>
                    </button>
                  </div>
                  <div>
                    <p className={s.description}>Опис</p>
                    <p className={s.info}>{product.subtitle}</p>
                  </div>
                  <div>
                    <p className={s.recomendation}>Рекомендація</p>
                    <p className={s.recomendationInfo}>
                      {product.recomendation}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </Container>
  );
};

export default ProductCard;
