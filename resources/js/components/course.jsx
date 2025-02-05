import React, { useEffect, useState } from 'react';
import CourseFilter from './CourseFilter';
import './css/Course.css';
import Footer from './Footer';

const Courses = () => {
  const [filters, setFilters] = useState({
    educationLevel: [],
    mainStream: [],
    duration: [],
  });
  const handleViewColleges = (courseName, board) => {
    // Navigate to the colleges list page with the parameters
    window.location.href = `/colleges/${encodeURIComponent(courseName)}/${encodeURIComponent(board)}`;
  };
  const [courses, setCourses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterVisible, setFilterVisible] = useState(false);
  const coursesPerPage = 12;

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/courses`);
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  const handleFilterChange = (name, value, checked) => {
    setFilters((prevFilters) => {
      const newValues = checked
        ? [...prevFilters[name], value]
        : prevFilters[name].filter((item) => item !== value);
      return { ...prevFilters, [name]: newValues };
    });
    setCurrentPage(1); // Reset pagination when filters change
  };

  const filteredCourses = courses.filter((course) => {
    if (filters.educationLevel.length && !filters.educationLevel.includes(course.board_name)) return false;
    if (filters.mainStream.length && !filters.mainStream.includes(course.course_name)) return false;
    if (filters.duration.length && !filters.duration.includes(course.duration_date)) return false;
    return true;
  });

  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top after page change
  };

  return (
    <>
      <div className="courses-container">
        <button 
          className="filter-toggle-button" 
          onClick={() => setFilterVisible(!filterVisible)}
        >
          Show Filters
        </button>

        <CourseFilter 
          filters={filters} 
          onFilterChange={handleFilterChange} 
          filterVisible={filterVisible} 
        />

        <div className="course-list">
          <h3>Course List</h3>
          <div className="course-container">
            {currentCourses.length > 0 ? (
              currentCourses.map((course) => (
                <div key={course.course_id} className="course-card">
                  {/* <div className="course-image">
                    <img src="https://via.placeholder.com/150" alt="Course Thumbnail" className="course-thumbnail" />
                  </div> */}
                  <div className="course-info">
                    <h4 className="course-title">{course.course_name}</h4>
                    <p className="course-board"><strong>Board:</strong> {course.board_name}</p>
                    <p className="course-duration"><strong>Duration:</strong> {course.duration_date}</p>
                  </div>
                  <button 
                      className="view-colleges-btn"
                      onClick={() => handleViewColleges(course.course_name, course.board_name)}
                    >
                      View Colleges
                    </button>
                </div>
              ))
            ) : (
              <p>No courses match the selected filters.</p>
            )}
          </div>

          <div className="pagination-container">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="pagination-button"
            >
              Previous
            </button>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="pagination-button"
            >
              Next
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Courses;
