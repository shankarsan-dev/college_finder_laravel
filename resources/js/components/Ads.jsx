import React, { useEffect, useState } from 'react';
import './css/Ads.css';

const Ads = ({ adClient, adSlot, style = {}, className = '' }) => {
  const [showPlaceholder, setShowPlaceholder] = useState(false);

  useEffect(() => {
    if (!adClient || !adSlot) {
      setShowPlaceholder(true); // Show placeholder if AdSense details are not provided
      return;
    }

    // Dynamically inject Google AdSense script
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
    script.setAttribute('data-ad-client', adClient);
    document.body.appendChild(script);

    // Clean up script to prevent duplicates
    return () => {
      document.body.removeChild(script);
    };
  }, [adClient, adSlot]);

  return (
    <div className={`ads-container ${className}`} style={style}>
      {showPlaceholder ? (
        <div className="ad-placeholder">
          <p>Ad Placeholder</p>
          <p>300x250</p>
        </div>
      ) : (
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client={adClient}
          data-ad-slot={adSlot}
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      )}
      {!showPlaceholder && (
        <script>
          {(window.adsbygoogle = window.adsbygoogle || []).push({})}
        </script>
      )}
    </div>
  );
};

export default Ads;
// {
//   "address": "Surya Bikram Gyawali Marg, Old Baneshwor, Kathmandu",
//   "college_id": 1,
//   "college_name": "Thames International College",
//   "college_logo": "https://media.edusanjal.com/_sized_/logos/thames-college-thumbnail-200x200.png",
//   "cover_image": "https://media.edusanjal.com/_sized_/cover_photo/thames-cover-thumbnail-1400x280-70.jpg",
//   "detailed_info": "Thames International College, located in Baneshwor, is a leading academic institution offering a variety of undergraduate programs through its three schools: Business and Management, Information Technology, and Social Sciences. Programs include Psychology, Social Work, Journalism, Computer Application, Business Administration, and more. Accredited by Tribhuvan University, it has received accolades such as Top 10 BBA College of Nepal in 2019 and several Best B-School awards.",
//   "offered_program": "Bachelor of Business Administration (BBA) - 64 Seats, Bachelor of Information Management (BIM) - 64 Seats, Bachelor of Arts in Social Work (BASW) - 32 Seats, Bachelor of Computer Application (BCA) - 35 Seats, Bachelor of Business Management (BBM) - 45 Seats, Bachelor of Arts in Psychology (BPSy) - Seats info not available, Bachelor of Arts in Sociology (BA Sociology) - Seats info not available",
//   "additional_details": "Tribhuvan University, Private Institution, 01-5971224, info@thamescollege.edu.np, ",
//   "map_url": "https://www.google.com/maps/?q=27.701667450376043,85.34187196479105"
//   }