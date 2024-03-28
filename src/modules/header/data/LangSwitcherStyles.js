export const customStyles = {
  control: (styles) => ({
    ...styles,
    fontSize: '16px',
    lineHeight: '24px',
    borderRadius: '200px',
    borderColor: 'rgba(31, 31, 31, 0.20);',
    padding: '16px 12px',
    height: '48px',
    alignContent: 'center',
    '@media (max-width: 767px)': {
      display: 'none',
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
    color: '#000',
    padding: 0,
  }),
  indicatorSeparator: (styles) => ({
    ...styles,
    display: 'none',
  }),
  placeholder: (styles) => ({
    ...styles,
    fontSize: '16px',
    lineHeight: '24px',
  }),
  menu: (styles) => ({
    ...styles,
    borderRadius: '20px',
    textAlign: 'left',
    width: '68px',
    padding: '16px 32px 16px 12px',
    boxShadow: '-2px 0px 15px 0px rgba(0, 0, 0, 0.05);',
  }),
  option: (styles) => ({
    ...styles,
    padding: 'none',
    fontSize: '16px',
    lineHeight: '28px',
  }),
  menuList: (styles) => ({
    ...styles,
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    width: '25px',
  }),
};
