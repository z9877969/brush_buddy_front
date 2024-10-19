import { useEffect, useRef, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Select from 'react-select';
import { options } from '../../data/optionsProductNav';
import { customStyles } from '../../data/navStyles';
import { PRODUCT_TYPES } from 'shared/constants';

const ProductDropDown = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedOption, setSelectedOption] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    ref.current.inputRef.readOnly = 'true';
  }, []);

  useEffect(() => {
    if (location.pathname !== '/products') {
      setSelectedOption(null);
    }
  }, [location.pathname]);

  useEffect(() => {
    if (!selectedOption) {
      return;
    }
    switch (selectedOption.value) {
      case PRODUCT_TYPES.ADULT:
        navigate('/products?productType=adult' + `&page=1`);
        break;
      case PRODUCT_TYPES.CHILD:
        navigate('/products?productType=child' + `&page=1`);
        break;
      case PRODUCT_TYPES.ANIMAL:
        navigate('/products?productType=animal' + `&page=1`);
        break;
      case PRODUCT_TYPES.HELPER:
        navigate('/products?productType=helper' + `&page=1`);
        break;
      default:
        break;
    }
    // eslint-disable-next-line
  }, [selectedOption]);

  return (
    <>
      <Select
        ref={ref}
        options={options}
        value={null}
        onChange={(option) => {
          setSelectedOption(option);
        }}
        placeholder="Товари"
        styles={customStyles(selectedOption ?? {})}
      />
    </>
  );
};

export default ProductDropDown;
