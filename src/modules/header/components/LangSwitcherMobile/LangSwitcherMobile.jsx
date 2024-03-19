import s from './LangSwitcherMobile.module.scss';

const LangSwitcherMobile = ({ selectedLang, onSelect }) => {
  const handleLangSelect = (lang) => {
    if (lang !== selectedLang) {
      onSelect(lang);
    }
  };

  return (
    <div className={s.btnLangWrap}>
      <button className={s.btnSwitch} onClick={() => handleLangSelect('ua')}>
        UA
      </button>
      <button
        className={`${s.btnDisable} ${s.btnSwitch}`}
        onClick={() => handleLangSelect('en')}
        disabled={selectedLang === 'en'}
      >
        EN
      </button>
    </div>
  );
};

export default LangSwitcherMobile;
