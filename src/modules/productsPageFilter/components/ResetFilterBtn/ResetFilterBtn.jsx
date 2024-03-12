import { Button } from 'shared/components';
import s from './ResetFilterBtn.module.scss';
export const ResetFilterBtn = () => {
  return (
    <>
      <Button title={'Скинути усі фільтри'} className={s.resetBtn} border />
    </>
  );
};
