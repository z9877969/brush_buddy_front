export const customStyles = {
  container: (styles) => ({
    ...styles,
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    height: '48px',
    padding: '12px',
    alignItems: 'center',
    borderRadius: '16px',
    border: '1px solid rgba(31, 31, 31, 0.2)',

    '@media (min-width: 1440px)': {
      backgroundColor: '#fff',
      border: 'none',
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

    '&:hover': {
      border: 'none',
    },
    '&:focus': {
      border: 'none',
    },
  }),

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
    marginTop: '-48px',
    marginLeft: '-12px',
    borderRadius: '16px',
    border: '1px solid rgba(31, 31, 31, 0.2)',
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
};
