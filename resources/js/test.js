const colleges = [
    {
      "additional_details": "Tribhuvan University, Private Institution, 01-5971224, info@thamescollege.edu.np, "
    },
    {
      "additional_details": "Lincoln University College, Private Institution, 01-4589134, 01-4588627, inquiry@texascollege.edu.np, "
    },
    {
      "additional_details": "Pokhara University, Established 1999 AD, Private Institution, 01-5970178, ace@ace.edu.np, "
    }
  ];
  
  const parseAdditionalDetails = (detailsString) => {
      const details = detailsString.split(",").map(item => item.trim()).filter(item => item !== "");
  
      let university_name = "";
      let institution_type = "";
      let primary_phone_number = "";
      let secondary_phone_number = "";
      let email = "";
  
      details.forEach(detail => {
          if (!university_name) {
              university_name = detail; // First item is the university name
          } else if (!institution_type && !/\d/.test(detail) && !detail.includes("@")) {
              institution_type = detail; // First non-number, non-email value is the institution type
          } else if (/^\d{2,}-\d+$/.test(detail)) { 
              if (!primary_phone_number) {
                  primary_phone_number = detail;
              } else {
                  secondary_phone_number = detail;
              }
          } else if (detail.includes("@")) {
              email = detail;
          }
      });
  
      return {
          university_name,
          institution_type,
          primary_phone_number,
          secondary_phone_number,
          email
      };
  };
  
  const categorizedDetails = colleges.map(college => parseAdditionalDetails(college.additional_details));
  
  console.log(categorizedDetails);
  