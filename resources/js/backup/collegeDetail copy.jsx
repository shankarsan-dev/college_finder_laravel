import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './css/CollegeDetail.css';
import Footer from './Footer';

const CollegeDetail = () => {
  const { id } = useParams(); // Get the `id` from the URL
  const [college, setCollege] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the server
    const fetchCollegeData = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/colleges/${id}`); 
      
        // const response = await fetch(`https://jsonplaceholder.typicode.com/posts`); // Example endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch college data');
        }
        const data = await response.json();

        // Assuming the fetched data is a single college entry
        const collegeData = data[0]; // Adjust based on your actual data structure
        console.log(data);
        
        setCollege(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCollegeData();
  }, [id]); // Dependency array ensures this runs when `id` changes

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!college) {
    return <p>No college found.</p>;
  }

  // Extract information from additional_details string
  const [affiliation, institutionType, contact, email] = college.additional_details.split(',');

  return (
    <>
      <div className="college-detail-container">
        {/* Photo Section with One Image and Logo */}
        <div className="photo-header-container">
          <div className="photo-container">
            <img
              src={college.cover_image}
              alt={`${college.college_name} Banner`}
              className="college-photo"
            />
            {/* College Logo */}
            <img
              src={college.college_logo}
              alt={`${college.college_name} Logo`}
              className="college-logo"
            />
          </div>

          <div className="college-header">
            <div className="college-info-side">
              <h1>{college.college_name}</h1>
              <p>{college.address}</p>
            </div>
          </div>
        </div>

        {/* Rest of the layout */}
        <div className="college-info">
          <div className="left-column">
            <h3>Introduction</h3>
            <p>{college.detailed_info}</p>

            <h3>Offered Programs</h3>
            <ul>
              {college.offered_program.split(',').map((program, index) => (
                <li key={index}>{program}</li>
              ))}
            </ul>
          </div>

          <div className="center-column">
            <h3>College Description</h3>
            <p>{college.detailed_info}</p>

            <h3>Offered Programs</h3>
            <ul>
              {college.offered_program.split(',').map((program, index) => (
                <li key={index}>{program}</li>
              ))}
            </ul>
          </div>

          <div className="right-column">
            <h3>Affiliation</h3>
            <p>{affiliation}</p>

            <h3>Private or Public Institution</h3>
            <p>{institutionType}</p>

            <h3>Contact</h3>
            <p>{contact}</p>

            <h3>Email</h3>
            <p>{email}</p>

            {/* Map Section */}
            <div className="college-map">
              <h3>Location on Map</h3>
              <iframe
                src={college.map_url}
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        {/* About Us Section - Moved below Gallery */}
        <div className="about-us-section">
          <h3>About Us</h3>
          <p>{college.about_us}</p>
        </div>
      </div>

      <h1>{}</h1>
 
      <Footer />
    </>
  );
};

export default CollegeDetail;
