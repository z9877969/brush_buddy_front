import { useState } from 'react';
import clsx from 'clsx';
import s from './MyImage.module.scss';

export const MyImage = ({ imges = [{ url: ' ' }] }) => {
  const [mainImage, setMainImage] = useState(imges[0]);

  return (
    <div className={s.container}>
      <div className={s.imageList}>
        {imges.map((img) => {
          return (
            <figure className={s.imgListBlock} key={Math.random()}>
              <img
                className={clsx(
                  s.image,
                  img.url === mainImage.url ? s.imageFocus : s.image
                )}
                src={img.url}
                onClick={() => setMainImage(img)}
              />
            </figure>
          );
        })}
      </div>
      <div className={s.imgContainer}>
        <img
          className={s.largeImage}
          src={imges.length === 0 ? null : mainImage.url}
          alt="Зображення товару"
          height={'350'}
        />
      </div>
    </div>
  );
};
