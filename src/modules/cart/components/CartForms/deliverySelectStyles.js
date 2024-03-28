export const getDelliverySelectStyles = ({ isError }) => ({
  container: (styles, state) => ({
    ...styles,
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    height: '48px',
    padding: '12px',
    alignItems: 'center',
    borderRadius: '16px',
    border: `1px solid ${
      state.isFocused ? '#F5516F' : isError ? '#BA1A1A' : '#1F1F1F33'
    }`,

    '@media (min-width: 1440px)': {
      backgroundColor: '#fff',
    },
  }),
  control: (styles) => ({
    ...styles,
    backgroundColor: 'transparent',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    outline: 'none',
    border: 'none',
    borderColor: 'none',
    borderWidth: 'none',
    borderStyle: 'none',
    boxShadow: 'none',
  }),

  valueContainer: (styles) => ({
    ...styles,
    padding: 0,
  }),
  input: (styles) => ({
    ...styles,
    padding: 0,
  }),
  dropdownIndicator: (styles, state) => {
    return {
      ...styles,
      color: '#797979',
      padding: 0,
      transform: state.isFocused ? 'rotate(180deg)' : 'rotate(0)',
    };
  },
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
  // menu: (styles) => ({
  //   ...styles,
  //   backgroundColor: 'red',
  // }),
  option: (styles) => ({
    ...styles,
    padding: 'none',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#797979',
    backgroundColor: 'transparent',
    '&:hover': {
      color: '#1f1f1f',
    },
    '&:focus': {
      color: '#1f1f1f',
    },
  }),
  menu: (styles) => ({
    ...styles,
    left: '0',
  }),
  menuList: (styles) => ({
    ...styles,
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '16px',
    padding: '12px',
    backgroundColor: '#fff',
    gap: '8px',
    '@media (min-width: 1440px)': {
      backgroundColor: '#fff',
      border: 'none',
    },
  }),
});
