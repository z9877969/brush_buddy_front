import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { options } from '../../data/optionsProductNav';
import { PRODUCT_TYPES } from 'shared/constants';
import Select from 'react-select';
import { customStyles } from '../../data/navStyles';

const ProductDropDown = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    ref.current.inputRef.readOnly = 'true';
  }, []);

  useEffect(() => {
    if (!selectedOption) {
      return;
    }
    switch (selectedOption.value) {
      case PRODUCT_TYPES.ADULT:
        navigate('/products?productType=adult');
        break;
      case PRODUCT_TYPES.CHILD:
        navigate('/products?productType=child');
        break;
      case PRODUCT_TYPES.ANIMAL:
        navigate('/products?productType=animal');
        break;
      case PRODUCT_TYPES.HELPER:
        // функцію добавити
        break;
      default:
        break;
    }
    // eslint-disable-next-line
  }, [selectedOption]);

  return (
    <Select
      ref={ref}
      options={options}
      value={selectedOption}
      onChange={(option) => {
        setSelectedOption(option);
      }}
      placeholder="Товари"
      styles={customStyles}
    />
  );
};

export default ProductDropDown;
