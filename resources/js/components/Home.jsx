import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import trinityImage from '../assets/trinity.png';
import Ads from './Ads';
import './css/Home.css';
import Filter from './filter';
import Footer from './Footer';

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
  const [loading, setLoading] = useState(true);  // Added loading state

  const [currentPage, setCurrentPage] = useState(1);
  const collegesPerPage = 12;

  useEffect(() => {
    const fetchColleges = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/colleges`);
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
      } finally {
        setLoading(false);
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
          {loading ? (
            <div className="loading-spinner">Loading...</div> 
          ) : (
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
          )}
        </div>
      </div>

      {filteredColleges.length > collegesPerPage && (
        <div className="pagination">
          <button onClick={handlePrevPage} disabled={currentPage === 1}>
            <FaArrowLeft />
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button onClick={handleNextPage} disabled={currentPage === totalPages}>
            <FaArrowRight />
          </button>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Home;
