// Degree.jsx
import React, { useState } from 'react';
import Filter from './degreefilter'; // Import Filter component
import './css/degree.css'; // Import the CSS styles

const Degree = () => {
  // State to hold filters and degree data
  const [filters, setFilters] = useState({
    degreeType: [],
  });
  
  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const itemsPerPage = 9; // Define how many items to show per page

  // Sample degree data
  const degrees = [
    { name: 'BCA', description: 'Bachelor in Computer Applications', image: 'path/to/image.jpg' },
    { name: 'MBA', description: 'Master of Business Administration', image: 'path/to/image.jpg' },
    { name: 'BBM', description: 'Bachelor of Business Management', image: 'path/to/image.jpg' },
    { name: 'CSIT', description: 'Computer Science and Information Technology', image: 'path/to/image.jpg' },
    { name: 'MCA', description: 'Master of Computer Applications', image: 'path/to/image.jpg' },
    { name: 'BBA', description: 'Bachelor of Business Administration', image: 'path/to/image.jpg' },
    { name: 'Engineering', description: 'Bachelor of Engineering', image: 'path/to/image.jpg' },
    { name: 'BCA', description: 'Bachelor in Computer Applications', image: 'path/to/image.jpg' },
    { name: 'MBA', description: 'Master of Business Administration', image: 'path/to/image.jpg' },
    { name: 'BBM', description: 'Bachelor of Business Management', image: 'path/to/image.jpg' },
    { name: 'CSIT', description: 'Computer Science and Information Technology', image: 'path/to/image.jpg' },
    { name: 'MCA', description: 'Master of Computer Applications', image: 'path/to/image.jpg' },
    { name: 'BBA', description: 'Bachelor of Business Administration', image: 'path/to/image.jpg' },
    { name: 'Engineering', description: 'Bachelor of Engineering', image: 'path/to/image.jpg' },
    { name: 'BCA', description: 'Bachelor in Computer Applications', image: 'path/to/image.jpg' },
    { name: 'MBA', description: 'Master of Business Administration', image: 'path/to/image.jpg' },
    { name: 'BBM', description: 'Bachelor of Business Management', image: 'path/to/image.jpg' },
    { name: 'CSIT', description: 'Computer Science and Information Technology', image: 'path/to/image.jpg' },
    { name: 'MCA', description: 'Master of Computer Applications', image: 'path/to/image.jpg' },
    { name: 'BBA', description: 'Bachelor of Business Administration', image: 'path/to/image.jpg' },
    { name: 'Engineering', description: 'Bachelor of Engineering', image: 'path/to/image.jpg' },
    // Add more degrees as needed
  ];

  // Handle filter change and toggle the filter selection
  const handleFilterChange = (degree) => {
    setFilters((prevFilters) => {
      const newDegreeType = prevFilters.degreeType.includes(degree)
        ? prevFilters.degreeType.filter((item) => item !== degree) // Remove degree if already in the list
        : [...prevFilters.degreeType, degree]; // Add degree to the list

      return { ...prevFilters, degreeType: newDegreeType };
    });
  };

  // Filter the degrees based on selected filters
  const filteredDegrees = degrees.filter((degree) => {
    return filters.degreeType.length === 0 || filters.degreeType.includes(degree.name);
  });

  // Calculate the index of the first and last degree to display on the current page
  const indexOfLastDegree = currentPage * itemsPerPage;
  const indexOfFirstDegree = indexOfLastDegree - itemsPerPage;

  // Get the degrees to display on the current page
  const currentDegrees = filteredDegrees.slice(indexOfFirstDegree, indexOfLastDegree);

  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calculate total pages
  const totalPages = Math.ceil(filteredDegrees.length / itemsPerPage);

  return (
    <div className="container">
      {/* Left side - Filter section */}
      <Filter filters={filters} handleFilterChange={handleFilterChange} />

      {/* Right side - Degree List */}
      <div className="degree-list">
        <h3>Degree List</h3>
        <div className="degree-container">
          {currentDegrees.length > 0 ? (
            currentDegrees.map((degree, index) => (
              <div key={index} className="degree-card">
                <img src={degree.image} alt={degree.name} className="degree-image" />
                <div className="degree-details">
                  <h4>{degree.name}</h4>
                  <p>{degree.description}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No degrees match your filter criteria.</p>
          )}
        </div>

        {/* Pagination */}
        <div className="pagination">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span>{`Page ${currentPage} of ${totalPages}`}</span>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Degree;
