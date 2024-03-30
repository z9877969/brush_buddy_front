import { useEffect, useState } from 'react';
import s from './Loader.module.scss';

const Loader = () => {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => {
      setIsShow(true);
    }, 500);
    return () => clearInterval(id);
  }, []);

  return <div className={s.wrapper}>{isShow && <h1>Завантажуємо...</h1>}</div>;
};

export default Loader;
