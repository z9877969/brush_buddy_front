import s from './Wrappers.module.scss';

// eslint-disable-next-line
const MainContent = ({ children }) => {
  return <div className={s.wrapper}>{children}</div>;
};

// eslint-disable-next-line
const SelectedFilters = ({ children }) => {
  return <div className={s.selectedFiltersWrapper}>{children}</div>;
};

export default { MainContent, SelectedFilters };
