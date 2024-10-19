import { useEffect, useRef, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Select from 'react-select';
import { options } from '../../data/optionsProductNav';
import { customStyles } from '../../data/navStyles';

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
    navigate(`/products?productType=${selectedOption.value}&page=1`);
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
