import React from 'react';

const NewsFilter = ({ filters, onFilterChange, filterVisible }) => {
  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    onFilterChange(name, value, checked);
  };

  return (
    <div className={`news-filters ${filterVisible ? 'show' : 'hide'}`}>
      <h3>Filter News</h3>

      <div className="checkbox-group">
        <h4>Category:</h4>
        {['Politics', 'Business', 'Technology', 'Sports', 'Health', 'Entertainment'].map((category) => (
          <div key={category} className="checkbox">
            <label>
              <input
                type="checkbox"
                name="category"
                value={category}
                checked={filters.category.includes(category)}
                onChange={handleCheckboxChange}
              />
              {category}
            </label>
          </div>
        ))}
      </div>

      <div className="checkbox-group">
        <h4>News Source:</h4>
        {['BBC', 'CNN', 'The Guardian', 'Al Jazeera', 'Reuters', 'NY Times'].map((source) => (
          <div key={source} className="checkbox">
            <label>
              <input
                type="checkbox"
                name="source"
                value={source}
                checked={filters.source.includes(source)}
                onChange={handleCheckboxChange}
              />
              {source}
            </label>
          </div>
        ))}
      </div>

      <div className="checkbox-group">
        <h4>Published Date:</h4>
        {['Last 24 hours', 'Last Week', 'Last Month'].map((date) => (
          <div key={date} className="checkbox">
            <label>
              <input
                type="checkbox"
                name="date"
                value={date}
                checked={filters.date?.includes(date)}
                onChange={handleCheckboxChange}
              />
              {date}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsFilter;
