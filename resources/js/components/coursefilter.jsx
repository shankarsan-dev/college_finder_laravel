import React from 'react';

const CourseFilter = ({ filters, onFilterChange, filterVisible }) => {
  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    onFilterChange(name, value, checked);
  };

  return (
    <div className={`course-filters ${filterVisible ? 'show' : 'hide'}`}>
      <h3>Filter Courses</h3>

      <div className="checkbox-group">
        <h4>Main Stream:</h4>
        {['Engineering', 'IT', 'Arts', 'Medicine', 'Law', 'Business', 'Architecture'].map((stream) => (
          <div key={stream} className="checkbox">
            <label>
              <input
                type="checkbox"
                name="mainStream"
                value={stream}
                checked={filters.mainStream.includes(stream)}
                onChange={(e) => handleCheckboxChange(e)}
              />
              {stream}
            </label>
          </div>
        ))}
      </div>

      <div className="checkbox-group">
        <h4>Education Level:</h4>
        {['National Examinations Board', 'Cambridge GCE A Levels'].map((level) => (
          <div key={level} className="checkbox">
            <label>
              <input
                type="checkbox"
                name="educationLevel"
                value={level}
                checked={filters.educationLevel.includes(level)}
                onChange={(e) => handleCheckboxChange(e)}
              />
              {level}
            </label>
          </div>
        ))}
      </div>

      <div className="checkbox-group">
        <h4>Duration:</h4>
        {['1 year', '2 years', '3 years', '4 years'].map((duration) => (
          <div key={duration} className="checkbox">
            <label>
              <input
                type="checkbox"
                name="duration"
                value={duration}
                checked={filters.duration?.includes(duration)}
                onChange={(e) => handleCheckboxChange(e)}
              />
              {duration}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseFilter;
  