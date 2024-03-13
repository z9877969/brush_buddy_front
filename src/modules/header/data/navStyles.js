export const customStyles = {
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
    dropdownIndicator: (styles) => ({
        ...styles, color: "#000", padding: 0
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