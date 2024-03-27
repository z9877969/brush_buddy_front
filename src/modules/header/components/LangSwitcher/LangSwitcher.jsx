import { useEffect, useRef } from 'react';
import Select from 'react-select';
import { customStyles } from '../../data/LangSwitcherStyles';
import { options } from '../../data/optionLang';

const LangSwitcher = () => {
  const ref = useRef(null);

  useEffect(() => {
    ref.current.inputRef.readOnly = 'true';
  }, []);

  const defaultValue = options.find((option) => option.value === 'ua');

  const disabledOption = options.find((option) => option.value === 'en');
  if (disabledOption) {
    disabledOption.isDisabled = true;
  }

  return (
    <Select
      ref={ref}
      options={options}
      defaultValue={defaultValue}
      styles={customStyles}
      isDisabled={true}
    />
  );
};

export default LangSwitcher;
