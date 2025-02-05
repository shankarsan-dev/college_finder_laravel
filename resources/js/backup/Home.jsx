// import { motion } from 'framer-motion';
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import trinityImage from '../assets/trinity.png'; // You can remove this if your images come from the API
// import Ads from './Ads';
// import './css/Home.css'; // Assuming you save the CSS in Home.css
// import Filter from './Filter'; // Import the Filter component
// import Footer from './Footer';

// const Home = () => {
//   const navigate = useNavigate(); // Hook to navigate to other routes
//   const [colleges, setColleges] = useState([]);
//   const [filters, setFilters] = useState({
//     private: false,
//     public: false,
//     topRanked: false,
//     location: '', // City filter
//     educationLevel: [],
//     mainStream: [],
//   });

//   const [currentPage, setCurrentPage] = useState(1);
//   const collegesPerPage = 12;

//   // Fetching data when the component mounts
//   useEffect(() => {
//     const fetchColleges = async () => {
//       try {
//         const response = await fetch('http://localhost:8000/api/colleges'); // Replace with your API endpoint
//         const data = await response.json();
//         console.log('API Response:', data); // Log the response to inspect
//         if (data && Array.isArray(data)) {
//           setColleges(data); // Sample data, replace with real data
//         } else {
//           setColleges([]); // Fallback to empty array if no data or incorrect structure
//         }
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setColleges([]); // Ensure colleges is set to an empty array in case of error
//       }
//     };

//     fetchColleges();
//   }, []);

//   const handleFilterChange = (name, value, checked) => {
//     if (name === 'location') {
//       setFilters((prevFilters) => ({ ...prevFilters, location: value }));
//     } else if (name === 'educationLevel' || name === 'mainStream') {
//       setFilters((prevFilters) => {
//         const newValues = checked
//           ? [...prevFilters[name], value]
//           : prevFilters[name].filter((item) => item !== value);
//         return { ...prevFilters, [name]: newValues };
//       });
//     } else {
//       setFilters((prevFilters) => ({
//         ...prevFilters,
//         [name]: value,
//       }));
//     }
//     setCurrentPage(1); // Reset to first page when filters change
//   };

//   const filteredColleges = colleges.filter((college) => {
//     if (filters.private && college.type !== 'private') return false;
//     if (filters.public && college.type !== 'public') return false;
//     if (filters.topRanked && college.rank > 5) return false;
    
//     // City filtering: Extract the city from the address and compare with the selected city
//     if (filters.location && college.address) {
//       const addressParts = college.address.split(', ');
//       const city = addressParts[addressParts.length - 1]; // Assuming the city is the last part
//       if (city !== filters.location) return false;
//     }

//     return true;
//   });
//   const totalPages = Math.ceil(filteredColleges.length / collegesPerPage);
//   const startIndex = (currentPage - 1) * collegesPerPage;
//   const currentColleges = filteredColleges.slice(startIndex, startIndex + collegesPerPage);

//   const handleNextPage = () => {
//     if (currentPage < totalPages) setCurrentPage(currentPage + 1);
//   };

//   const handlePrevPage = () => {
//     if (currentPage > 1) setCurrentPage(currentPage - 1);
//   };



//   const handleCardClick = (id) => {
//     navigate(`/collegeDetail/${id}`); // Navigate to the CollegeDetail page with the id
//   };

//   return (
//     <>
//       <Ads />
//       <div className="container">
//         <Filter filters={filters} onFilterChange={handleFilterChange} />
//         <div className="college-list">
//           <h3>College List</h3>
//           <motion.div className="college-container">
//             {currentColleges.length > 0 ? (
//               currentColleges.map((college) => (
//                 <motion.div
//                   key={college.id}
//                   className="college-card"
//                   onClick={() => handleCardClick(college.id)} // Add click handler
//                 >
//                   <img
//                     src={college.image_src || trinityImage} // Fallback to default image if none found
//                     alt={college.college_name || 'College Image'}
//                     className="college-image"
//                   />
//                   <div className="college-details">
//                     <h4>{college.college_name || 'Unknown College'}</h4>
//                     <p>
//                       <strong>Affiliation:</strong> {college.university_name || 'Not Affiliated'}
//                     </p>
//                     <p>
//                       <strong>Location:</strong> {college.address || 'Unknown Location'}
//                     </p>
//                   </div>
//                 </motion.div>
//               ))
//             ) : (
//               <p>No colleges match the selected filters.</p>
//             )}
//           </motion.div>
//         </div>
//       </div>
      
//       {filteredColleges.length > collegesPerPage && (
//         <div className="pagination">
//           <button onClick={handlePrevPage} disabled={currentPage === 1}>
//             Previous
//           </button>
//           <span>
//             Page {currentPage} of {totalPages}
//           </span>
//           <button onClick={handleNextPage} disabled={currentPage === totalPages}>
//             Next
//           </button>
//         </div>
//       )}

//       <Footer />
//     </>
//   );
// };

// export default Home;
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import trinityImage from '../assets/trinity.png';
import Ads from './Ads';
import Filter from './Filter';
import Footer from './Footer';
import './css/Home.css';

const Home = () => {
  const navigate = useNavigate();
  const [colleges, setColleges] = useState([]);
  const [filters, setFilters] = useState({
    private: false,
    public: false,
    topRanked: false,
    location: '',
    educationLevel: [],
    mainStream: [],
  });
  const [availableCities, setAvailableCities] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const collegesPerPage = 12;

  useEffect(() => {
    const fetchColleges = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/colleges');
        const data = await response.json();
        
        if (data && Array.isArray(data)) {
          setColleges(data);

          // Extract unique city names from addresses
          const citySet = new Set();
          data.forEach((college) => {
            if (college.address) {
              const parts = college.address.split(', ');
              const city = parts[parts.length - 1];
              if (city) {
                citySet.add(city.trim());
              }
            }
          });

          setAvailableCities([...citySet].sort());
        } else {
          setColleges([]);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setColleges([]);
      }
    };

    fetchColleges();
  }, []);

  const handleFilterChange = (name, value, checked) => {
    if (name === 'location') {
      setFilters((prevFilters) => ({ ...prevFilters, location: value }));
    } else if (name === 'educationLevel' || name === 'mainStream') {
      setFilters((prevFilters) => {
        const newValues = checked
          ? [...prevFilters[name], value]
          : prevFilters[name].filter((item) => item !== value);
        return { ...prevFilters, [name]: newValues };
      });
    } else {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [name]: value,
      }));
    }
    setCurrentPage(1);
  };

  const filteredColleges = colleges.filter((college) => {
    if (filters.private && college.type !== 'private') return false;
    if (filters.public && college.type !== 'public') return false;
    if (filters.topRanked && college.rank > 5) return false;

    if (filters.location && college.address) {
      const addressParts = college.address.split(', ');
      const city = addressParts[addressParts.length - 1];
      if (city !== filters.location) return false;
    }

    return true;
  });

  const totalPages = Math.ceil(filteredColleges.length / collegesPerPage);
  const startIndex = (currentPage - 1) * collegesPerPage;
  const currentColleges = filteredColleges.slice(startIndex, startIndex + collegesPerPage);

  // const handleNextPage = () => {
  //   if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  // };

  // const handlePrevPage = () => {
  //   if (currentPage > 1) setCurrentPage(currentPage - 1);
  // };
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
      window.scrollTo({ top: 270, behavior: 'smooth' });
    }
  };
  
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  
  const handleCardClick = (id) => {
    navigate(`/collegeDetail/${id}`);
  };
  
  return (
    <>
      <Ads />
      <div className="container">
        <Filter
          filters={filters}
          onFilterChange={handleFilterChange}
          availableCities={availableCities}
        />
        <div className="college-list">
          <h3>College List</h3>
          <motion.div className="college-container">
            {currentColleges.length > 0 ? (
              currentColleges.map((college) => (
                <motion.div
                  key={college.id}
                  className="college-card"
                  onClick={() => handleCardClick(college.college_id)}
                >
                  <img
                    src={college.cover_image || trinityImage}
                    alt={college.college_name || 'College Image'}
                    className="college-image"
                  />
                  <div className="college-details">
                    <h4>{college.college_name || 'Unknown College'}</h4>
                    <p>
                      <strong>Affiliation:</strong> {college.university_name || 'Not Affiliated'}
                    </p>
                    <p>
                      <strong>Location:</strong> {college.address || 'Unknown Location'}
                    </p>
                  </div>
                </motion.div>
              ))
            ) : (
              <p>No colleges match the selected filters.</p>
            )}
          </motion.div>
        </div>
      </div>

      {filteredColleges.length > collegesPerPage && (
        <div className="pagination">
          <button onClick={handlePrevPage} disabled={currentPage === 1}>
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button onClick={handleNextPage} disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Home;
