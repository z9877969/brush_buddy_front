export const customStyles = ({ selectedOption, isProductPage }) => ({
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
    maxWidth: '360px',
    overflowX: 'auto',
    boxShadow: 'none', // Видалити "ефект" фокусу
    borderColor: 'transparent', // Забрати рамку фокусу
    '&:hover': {
      border: 'none',
      color: '#1f1f1f',
      cursor: 'pointer',
    },
    '&:focus': {
      border: 'none',
      color: '#1f1f1f',
    },
    '@media (max-width:1439px)': {
      borderBottom: '1px solid rgba(31, 31, 31, 0.10)',
      maxWidth: 'none',
      paddingLeft: '4px',
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
    color: isProductPage ? '#f5516f' : '#000',
    transition: 'color 0.3s ease-in-out',
    '@media (max-width: 1439px)': {
      textAlign: 'left',
    },
  }),
  dropdownIndicator: (styles) => ({
    ...styles,
    color: '#000',
    padding: 0,
    '@media (max-width:1439px)': {
      transform: 'translateX(-4px)',
    },
  }),
  menu: (styles) => ({
    ...styles,
    borderRadius: '20px',
    textAlign: 'left',
    width: '180px',
    overflow: 'hidden',
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
  option: (styles, state) => {
    return {
      ...styles,
      width: '100%',
      padding: '4px 0 4px 12px',
      fontSize: '16px',
      lineHeight: '28px',
      color: '#f1f1f',
      backgroundColor: state.isHover
        ? 'red'
        : state.data.value === selectedOption.value
          ? 'rgba(0,0,0,0.05)'
          : 'transparent', // option bg styles
      '@media (max-width: 1439px)': {
        fontSize: '18px',
        lineHeight: '24px',
        width: '100%',
      },
      '&:hover': {
        color: '#f5516f',
      },
    };
  },
  menuList: (styles) => ({
    ...styles,
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  }),
});
