import React, { useState } from "react";

const InputDropdown = ({
  options = [],
  placeholder = "Select an option",
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
    if (onSelect) onSelect(option);
  };

  return (
    <div className="input-dropdown">
      <button className="dropdown-trigger" onClick={() => setIsOpen(!isOpen)}>
        {selected || placeholder}
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option, index) => (
            <li key={index} onClick={() => handleSelect(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default InputDropdown;
