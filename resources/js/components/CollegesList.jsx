import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useNavigate, useParams } from 'react-router-dom';
import trinityImage from '../assets/trinity.png';
import Ads from './Ads';
import Footer from './Footer';
import './css/Home.css';

const CollegesList = () => {
  const navigate = useNavigate();
  const [colleges, setColleges] = useState([]);
 
 
  const [loading, setLoading] = useState(true);  // Added loading state

  const [currentPage, setCurrentPage] = useState(1);
  const collegesPerPage = 12;
  const { courseName, board } = useParams();
  useEffect(() => {
    const fetchColleges = async () => {
      setLoading(true);  // Set loading to true before fetch
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/colleges/search/course/${courseName}/${board}`);
        const data = await response.json();
        
        if (data && Array.isArray(data)) {
          setColleges(data);
        } else {
          setColleges([]);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setColleges([]);
      } finally {
        setLoading(false);  // Set loading to false after fetch is complete
      }
    };

    fetchColleges();
  }, []);

  

  const totalPages = Math.ceil(colleges.length / collegesPerPage);
  const startIndex = (currentPage - 1) * collegesPerPage;
  const currentColleges = colleges.slice(startIndex, startIndex + collegesPerPage);

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
      
        <div className="college-list">
          <h3>List of {courseName} {board}  Colleges</h3>
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

{colleges.length > collegesPerPage && (
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

export default CollegesList;
