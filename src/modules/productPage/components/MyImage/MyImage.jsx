import { useState } from 'react';
import s from './MyImage.module.scss';

export const MyImage = ({ imges = [{ url: ' ' }] }) => {
  const [mainImage, setMainImage] = useState(imges[0]);
  // console.log(mainImage);
  return (
    <div className={s.container}>
      <div className={s.imageList}>
        {imges.map((img) => {
          return (
            <figure className={s.imgListBlock} key={Math.random()}>
              <img
                className={s.image}
                src={img.url}
                onClick={() => setMainImage(img)}
              />
            </figure>
          );
        })}
      </div>
      {/* <div className={s.imgContainer}> */}
      <img className={s.largeImage} src={mainImage.url} alt="" />
      {/* </div> */}
    </div>
  );
};
