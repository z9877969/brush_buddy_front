import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PRODUCT_TYPES } from 'shared/constants';
import Select from 'react-select'

const ProductDropDown = () => {
    const options = [
        {value: PRODUCT_TYPES.ADULT, label: 'Для дорослих'},
        {value: PRODUCT_TYPES.CHILD, label: 'Для дітей'},
        {value: PRODUCT_TYPES.ANIMAL, label: 'Для тварин'},
        {value: PRODUCT_TYPES.HELPER, label: 'Допомогайки'},
    ];

    const navigate = useNavigate();
    const [selectedOption] = useState(null);

    const handleChange = (selectedOption) => {
        if (selectedOption) {
            switch (selectedOption.value) {
                case PRODUCT_TYPES.ADULT:
                    navigate('/products/adult');
                    break;
                case PRODUCT_TYPES.CHILD:
                    navigate('/products/child');
                    break;
                case PRODUCT_TYPES.ANIMAL:
                    navigate('/products/animal');
                    break;
                case PRODUCT_TYPES.HELPER:
                    break;
                default:
                    break;
            }
        }
    };

    const customStyles = {
        control: (styles) => ({
            ...styles, border: "none", fontSize: "18px",
            '&:hover': {
                border: "none"
            }
        }),
        valueContainer: (styles) => ({
            ...styles, padding: 0
        }),
        indicatorSeparator: (styles) => ({
            ...styles, width: "none"
        }),
        placeholder: (styles) => ({
            ...styles, color: "F1F1F1"
        }),
        svg: (styles) => ({
            ...styles, fill: "#000"
        }),
        menu: (styles) => ({
            ...styles, borderRadius: "20px", textAlign: "left",
            width: "160px", padding: "16px 32px 16px 12px",
            boxShadow: "-2px 0px 15px 0px rgba(0, 0, 0, 0.05);"
        }),
        option: (styles) => ({
            ...styles, padding: "none", fontSize: "16px", lineHeight: "28px"
        }),
        menuList: (styles) => ({
            ...styles, display: "flex", flexDirection: "column",
            gap: "8px",
        }),
    }
    
    
    return (
        <Select
            options={options}
            value={selectedOption}
            onChange={handleChange}
            placeholder="Товари"
            styles={customStyles}
        />
    );
};

export default ProductDropDown;