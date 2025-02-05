import React, { useEffect, useState } from 'react';
import './css/Filter.css';

const Filter = ({ filters, onFilterChange, availableCities }) => {
  const [isFiltersVisible, setFiltersVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 769) {
        setFiltersVisible(true); // Always show filters on desktop
      } else {
        setFiltersVisible(false); // Hide filters on mobile by default
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleCheckboxChange = (e) => {
    const { name, value, checked, type } = e.target;

    if (type === 'checkbox') {
      if (name === 'private' || name === 'public') {
        // For single selection checkboxes (Private/Public Colleges)
        // Uncheck all other options in the same category and update state accordingly
        onFilterChange(name, checked ? value : '');
      } 
      // For multi-selection checkboxes (Education Level/Main Stream)
      else if (name === 'educationLevel' || name === 'mainStream') {
        // Handle adding/removing values in the filters state
        if (checked) {
          onFilterChange(name, [...filters[name], value]);
        } else {
          onFilterChange(name, filters[name].filter((item) => item !== value));
        }
      }
    }

    // Scroll on mobile
    if (window.innerWidth < 769) {
      setTimeout(() => {
        window.scrollTo({ top: 200, behavior: 'smooth' });
      }, 100);
    }
  };

  const handleLocationChange = (e) => {
    onFilterChange('location', e.target.value);
    
    // Scroll on mobile
    if (window.innerWidth < 769) {
      setTimeout(() => {
        window.scrollTo({ top: 1000, behavior: 'smooth' });
      }, 100);
    }
  };

  const toggleFilters = () => {
    setFiltersVisible(!isFiltersVisible);
  };

  const filterPanelStyle = {
    transition: 'max-height 0.3s ease-out, padding 0.3s ease-out',
    overflowY: 'auto', // Enables vertical scrolling
    maxHeight: isFiltersVisible ? '800px' : '0', // Adjust maxHeight when visible or hidden
    padding: isFiltersVisible ? '20px' : '0', // Add padding when visible
    height: isFiltersVisible ? 'auto' : '0', // Adjust height to 'auto' when visible
  };

  return (
    <div className="filters-wrapper">
      {/* Toggle button for mobile view */}
      <button className="toggle-filters-button" onClick={toggleFilters}>
        {isFiltersVisible ? 'Hide Filters' : 'Show Filters'}
      </button>

      <div style={filterPanelStyle}>
        {/* Close button */}
        <button className="close-filters-button" onClick={toggleFilters}>
          ✖
        </button>

        {/* Location Dropdown */}
        <div className="checkbox-group" style={{ position: "relative" }}>
          <h4>Location:</h4>
          <div className="location-dropdown" data-dropup-auto="false">
            <select
              name="location"
              value={filters.location}
              onChange={handleLocationChange}
              onFocus={() => setIsOpen(true)}
              onBlur={() => setIsOpen(false)}
              
              className={`location-select ${isOpen ? "dropdown-open" : ""}`}
            >
              <option value="">All Locations</option>
              {availableCities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Checkbox for Private Colleges */}
        <div className="checkbox">
          <label>
            <input
              type="checkbox"
              name="private"
              value="private"
              checked={filters.private === 'private'}
              onChange={handleCheckboxChange}
            />
            Private Colleges
          </label>
        </div>

        {/* Checkbox for Public Colleges */}
        <div className="checkbox">
          <label>
            <input
              type="checkbox"
              name="public"
              value="public"
              checked={filters.public === 'public'}
              onChange={handleCheckboxChange}
            />
            Public Colleges
          </label>
        </div>

        {/* Checkbox for Top Ranked Colleges */}
        {/* <div className="checkbox">
          <label>
            <input
              type="checkbox"
              name="topRanked"
              checked={filters.topRanked}
              onChange={handleCheckboxChange}
            />
            Top Ranked Colleges
          </label>
        </div> */}

        {/* Education Level Filters */}
        <div className="checkbox-group">
          <h4>Education Level:</h4>
          {['Bachelor', '+2'].map((level) => (
            <div key={level} className="checkbox">
              <label>
                <input
                  type="checkbox"
                  name="educationLevel"
                  value={level}
                  checked={filters.educationLevel.includes(level)}
                  onChange={handleCheckboxChange}
                />
                {level === 'Bachelor' ? "Bachelor's" : '+2'}
              </label>
            </div>
          ))}
        </div>

        {/* Main Stream Filters */}
        <div className="checkbox-group">
          <h4>Main Stream:</h4>
          {[
            'Engineering',
            'Arts',
            'IT',
            'Medicine',
            'Law',
            'Business',
            'Design',
            'Architecture',
            'Science',
            'Education',
          ].map((stream) => (
            <div key={stream} className="checkbox">
              <label>
                <input
                  type="checkbox"
                  name="mainStream"
                  // value={stream}
                  // checked={filters.mainStream.includes(stream)}
                  // onChange={handleCheckboxChange}
                />
                {stream}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filter;
