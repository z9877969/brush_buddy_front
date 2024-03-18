export const selectStyles = {
  control: (styles) => ({
    ...styles,
    borderRadius: 16,
    padding: 12,
    borderColor: '#1F1F1F33',
    '&:focus': {
      borderColor: '#F5516F',
    },
  }),
  valueContainer2: (styles) => ({ ...styles, padding: 0 }),
  input2: (styles) => ({ ...styles, margin: 0, height: 24 }),
  indicatorSeparator: (styles) => ({
    ...styles,
    display: 'none',
  }),
  singleValue: (styles) => ({
    ...styles,
    color: '#A5A5A5',
    fontSize: 16,
  }),
  indicatorsContainer2: (provided) => ({ ...provided, padding: 1 }),
};
