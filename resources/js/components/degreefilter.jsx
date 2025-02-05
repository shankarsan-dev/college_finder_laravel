// Filter.jsx
import React from 'react';

const Filter = ({ filters, handleFilterChange }) => {
  return (
    <div className="filters">
      <button className="close-filters-button">×</button>
      <h3>Filter Degrees</h3>
      <div className="checkbox">
        <input
          type="checkbox"
          id="bca"
          onChange={() => handleFilterChange('BCA')}
          checked={filters.degreeType.includes('BCA')}
        />
        <label htmlFor="bca">BCA</label>
      </div>
      <div className="checkbox">
        <input
          type="checkbox"
          id="mba"
          onChange={() => handleFilterChange('MBA')}
          checked={filters.degreeType.includes('MBA')}
        />
        <label htmlFor="mba">MBA</label>
      </div>
      <div className="checkbox">
        <input
          type="checkbox"
          id="bbm"
          onChange={() => handleFilterChange('BBM')}
          checked={filters.degreeType.includes('BBM')}
        />
        <label htmlFor="bbm">BBM</label>
      </div>
      <div className="checkbox">
        <input
          type="checkbox"
          id="csit"
          onChange={() => handleFilterChange('CSIT')}
          checked={filters.degreeType.includes('CSIT')}
        />
        <label htmlFor="csit">CSIT</label>
      </div>
      <button className="toggle-filters-button">Filters</button>
    </div>
  );
};

export default Filter;
