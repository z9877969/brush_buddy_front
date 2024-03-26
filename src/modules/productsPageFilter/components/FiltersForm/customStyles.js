export const customStyles = {
  container: (styles) => ({
    ...styles,

    '@media (min-width: 1440px)': {
      border: 'none',
    },
  }),
  control: (styles, { isFocused }) => ({
    ...styles,
    backgroundColor: '#fff',
    border: '1px solid rgba(31, 31, 31, 0.2)',
    outline: 'none',
    width: '343px',
    display: 'flex',
    justifyContent: 'flex-start',
    height: '48px',
    padding: '12px',
    alignItems: 'center',
    borderRadius: '16px',
    boxShadow: 'none',

    // borderColor: isSelected ? 'red' : 'none',
    ...(isFocused && {
      boxShadow: 'none',
      borderBottom: '1px solid rgba(31, 31, 31, 0.2)',
      borderRadius: '16px 16px 0 0',
    }),
    '&:hover': {
      boxShadow: 'none',
    },

    '@media (min-width: 768px)': {
      width: '704px',
    },
    '@media (min-width: 1440px)': {
      width: '268px',
      border: 0,
      ...(isFocused && {
        border: 'none',
        boxShadow: 'none',
        borderBottom: '1px solid rgba(31, 31, 31, 0.2)',
        borderRadius: '16px 16px 0 0',
      }),
    },
  }),
  // : (styles { isFocused }) => ({
  //   ...styles,
  //   borderColor: isFocused ?"red":"green"
  // }),
  valueContainer: (styles) => ({
    ...styles,
    padding: 0,
  }),
  input: (styles) => ({
    ...styles,
    padding: 0,
  }),
  dropdownIndicator: (styles) => ({
    ...styles,
    color: '#797979',
    padding: 0,
  }),
  indicatorSeparator: (styles) => ({
    ...styles,
    display: 'none',
  }),
  // placeholder: (styles) => ({
  //   ...styles,
  //   fontSize: '16px',
  //   lineHeight: '24px',
  //   color: '#a5a5a5',
  // }),
  menu: (styles) => ({
    ...styles,
    margin: 0,
    boxShadow: 'none',
    borderRadius: '0 0 16px 16px',
    position: 'static',
    zIndex: -111,
    border: '1px solid rgba(31, 31, 31, 0.2)',
    marginBottom: '900px',
    '@media (min-width: 1440px)': {
      border: 0,
      borderRadius: '16px',
    },
  }),
  option: (styles) => ({
    ...styles,
    padding: 'none',
    fontSize: '16px',
    height: '24px',
    color: '#797979',
    backgroundColor: '#fff',

    '&:hover': {
      color: '#1f1f1f',
    },
    '&:focus': {
      color: '#1f1f1f',
    },
  }),
  menuList: (styles) => ({
    ...styles,
    display: 'flex',
    flexDirection: 'column',
    padding: '12px',
    backgroundColor: '#fff',
    gap: '8px',
    borderRadius: '0 0 16px 16px',
    '@media (min-width: 1440px)': {
      backgroundColor: '#fff',
      border: 'none',
      borderRadius: '0 0 16px 16px',
    },
  }),
};
