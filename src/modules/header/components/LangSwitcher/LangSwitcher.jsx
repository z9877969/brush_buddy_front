import s from './LangSwitcher.module.scss';

const LangSwitcher = () => {
  return (
    <select value={'ua'} className={s.wrapper}>
      <option value="ua">UA</option>
      <option value="en">EN</option>
    </select>
  );
};

export default LangSwitcher;
