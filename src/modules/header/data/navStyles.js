export const customStyles = {
  container: (styles) => ({
    ...styles,
    '@media (max-width: 1439px)': {
      width: '92vw',
    },
  }),
  control: (styles) => ({
    ...styles,
    border: 'none',
    fontSize: '18px',
    maxWidth: '123px',
    overflowX: 'auto',
    '&:hover': {
      border: 'none',
      color: '#1f1f1f',
    },
    '&:focus': {
      border: 'none',
      color: '#1f1f1f',
    },
    '@media (max-width:1439px)': {
      borderBottom: '1px solid rgba(31, 31, 31, 0.10)',
      maxWidth: 'none',
    },
  }),
  valueContainer: (styles) => ({
    ...styles,
    padding: 0,
  }),
  indicatorSeparator: (styles) => ({
    ...styles,
    display: 'none',
  }),
  placeholder: (styles) => ({
    ...styles,
    color: '#000',
    transition: 'color 0.3s ease-in-out',
    '@media (max-width: 1439px)': {
      textAlign: 'left',
    },
  }),
  dropdownIndicator: (styles) => ({
    ...styles,
    color: '#000',
    padding: 0,
  }),
  menu: (styles) => ({
    ...styles,
    borderRadius: '20px',
    textAlign: 'left',
    width: '160px',
    padding: '16px 32px 16px 12px',
    boxShadow: '-2px 0px 15px 0px rgba(0, 0, 0, 0.05);',
    '@media (max-width:1439px)': {
      position: 'relative',
      boxShadow: 'none',
      width: '100%',
      padding: 0,
      borderRadius: 'none',
    },
    '&:hover': {
      color: '#1f1f1f',
    },
  }),
  option: (styles) => ({
    ...styles,
    padding: 'none',
    fontSize: '16px',
    lineHeight: '28px',
    color: '#f1f1f',
    '@media (max-width: 1439px)': {
      fontSize: '18px',
      lineHeight: '24px',
    },
  }),
  menuList: (styles) => ({
    ...styles,
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  }),
};
