import React from 'react';

const FilterButtons = ({ buttons, onFilter }) => {
  return (
    <div className="filter-buttons">
      {buttons.map((button) => (
        <button
          key={button.id}
          className="btn btn-app"
          onClick={() => onFilter(button.value)}
        >
          <span className={`badge ${button.badgeClass}`}>{button.count}</span>
          <i className={button.iconClass}></i> {button.label}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
