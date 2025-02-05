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
        // const response = await fetch(`https://example.com/api/colleges/${id}`); 
        // // Replace with your API endpoint
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
        if (!response.ok) {
          throw new Error('Failed to fetch college data');
        }
        const data = await response.json();
        setCollege({
          "id": 1,
          "college_name": "Thames International College",
          "address": "Surya Bikram Gyawali Marg, Old Baneshwor, Kathmandu",
          "image_src": "https://media.edusanjal.com/__sized__/cover_photo/thames-cover-thumbnail-1400x280-70.jpg",
          "logo_src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi9Gso2xaPC5vbsfREg5AxHwVGWwkii6eFtA&s",
          "introduction": "Brief introduction about the college.",
          "description": "Detailed description of the college, its history, and values.",
          "programs": ["Program 1", "Program 2", "Program 3"],
          "affiliation": "Tribhuvan University",
          "institution_type": "Private",
          "contact_number": "123-456-7890",
          "email": "info@thamescollege.edu.np",
          "map_embed_url": "https://www.google.com/maps/embed?pb=...",
          "gallery_images": [
            "https://example.com/gallery1.jpg",
            "https://example.com/gallery2.jpg",
            "https://example.com/gallery3.jpg"
          ],
          "about_us": "Welcome to Thames International College..."
        }
        ); // Update the state with the fetched data
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

  return (
    <>
      <div className="college-detail-container">
        {/* Photo Section with One Image and Logo */}
        <div className="photo-header-container">
          <div className="photo-container">
            <img
              src={college.image_src}
              alt={`${college.college_name} Banner`}
              className="college-photo"
            />
            {/* College Logo */}
            <img
              src={college.logo_src}
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
            <p>{college.introduction}</p>

            <h3>Offered Programs</h3>
            <ul>
              {college.programs.map((program, index) => (
                <li key={index}>{program}</li>
              ))}
            </ul>
          </div>

          <div className="center-column">
            <h3>College Description</h3>
            <p>{college.description}</p>

            <h3>Offered Programs</h3>
            <ul>
              {college.programs.map((program, index) => (
                <li key={index}>{program}</li>
              ))}
            </ul>
          </div>

          <div className="right-column">
            <h3>Affiliation</h3>
            <p>{college.affiliation}</p>

            <h3>Private or Public Institution</h3>
            <p>{college.institution_type}</p>

            <h3>Contact</h3>
            <p>{college.contact_number}</p>

            <h3>Email</h3>
            <p>{college.email}</p>

            {/* Map Section */}
            <div className="college-map">
              <h3>Location on Map</h3>
              <iframe
                src={college.map_embed_url}
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
      <Footer />
    </>
  );
};

export default CollegeDetail;
