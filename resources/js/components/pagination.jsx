import React, { useState } from 'react';

const Pagination = ({ items, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  // Calculate the indices for the items to display
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = items.slice(startIndex, endIndex);

  // Handlers
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <ul>
        {currentItems.map((item, index) => (
          <li key={index} style={{ marginBottom: '20px', listStyleType: 'none', border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
            <img src={item.image} alt={item.name} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
            <strong>{item.name}</strong>
            <p>Type: {item.type}</p>
            <p>Affiliation: {item.affiliation}</p>
            <p>Location: {item.location}</p>
          </li>
        ))}
      </ul>

      <div style={{ marginTop: '20px' }}>
        <button onClick={goToPreviousPage} disabled={currentPage === 1}>
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => goToPage(index + 1)}
            style={{ fontWeight: currentPage === index + 1 ? 'bold' : 'normal' }}
          >
            {index + 1}
          </button>
        ))}

        <button onClick={goToNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};



export default Pagination;