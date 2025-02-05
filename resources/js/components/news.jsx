import React, { useEffect, useState } from "react";
import NewsFilter from "./newsfilter";
import "./css/News.css";
import Footer from "./Footer";

const News = () => {
  const [filterVisible, setFilterVisible] = useState(false);
  const [filters, setFilters] = useState({
    category: [],
    source: [],
  });

  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const newsPerPage =4;

  useEffect(() => {
    const sampleNews = [
      { id: 1, title: "Breaking: New Education Policy Released", source: "Education Times", date: "Jan 30, 2025", description: "The government has introduced a new education policy...", image: "https://media.istockphoto.com/id/1369150014/vector/breaking-news-with-world-map-background-vector.jpg?s=1024x1024&w=is&k=20&c=blBt3PJbOSEZF5_zB5YgKYeq9Zx_RMOLntX_nI3lliQ=", category: "Education" },
      { id: 2, title: "Tech in Education: AI Transforming Learning", source: "Tech Daily", date: "Jan 28, 2025", description: "Artificial Intelligence is making its way into classrooms...", image: "https://media.istockphoto.com/id/1369150014/vector/breaking-news-with-world-map-background-vector.jpg?s=1024x1024&w=is&k=20&c=blBt3PJbOSEZF5_zB5YgKYeq9Zx_RMOLntX_nI3lliQ=", category: "Technology" },
      { id: 3, title: "Political Debate on Education Funding", source: "Global News", date: "Jan 25, 2025", description: "Leaders discuss increasing funds for education reform...", image: "https://media.istockphoto.com/id/1369150014/vector/breaking-news-with-world-map-background-vector.jpg?s=1024x1024&w=is&k=20&c=blBt3PJbOSEZF5_zB5YgKYeq9Zx_RMOLntX_nI3lliQ=", category: "Politics" },
      { id: 4, title: "New Health Guidelines for Schools", source: "Health Weekly", date: "Jan 22, 2025", description: "Schools must follow new health protocols to ensure safety...", image: "https://media.istockphoto.com/id/1369150014/vector/breaking-news-with-world-map-background-vector.jpg?s=1024x1024&w=is&k=20&c=blBt3PJbOSEZF5_zB5YgKYeq9Zx_RMOLntX_nI3lliQ=", category: "Health" },
      { id: 5, title: "Sports Scholarships on the Rise", source: "Sports Daily", date: "Jan 20, 2025", description: "More universities are offering sports scholarships...", image: "https://media.istockphoto.com/id/1369150014/vector/breaking-news-with-world-map-background-vector.jpg?s=1024x1024&w=is&k=20&c=blBt3PJbOSEZF5_zB5YgKYeq9Zx_RMOLntX_nI3lliQ=", category: "Sports" },
      { id: 6, title: "Startup Launches Online Learning Platform", source: "Tech Daily", date: "Jan 18, 2025", description: "A new platform offers courses for students worldwide...", image: "https://media.istockphoto.com/id/1369150014/vector/breaking-news-with-world-map-background-vector.jpg?s=1024x1024&w=is&k=20&c=blBt3PJbOSEZF5_zB5YgKYeq9Zx_RMOLntX_nI3lliQ=", category: "Technology" },
      { id: 7, title: "Government Announces New College Grants", source: "Education Times", date: "Jan 15, 2025", description: "Students can apply for new educational grants...", image: "https://media.istockphoto.com/id/1369150014/vector/breaking-news-with-world-map-background-vector.jpg?s=1024x1024&w=is&k=20&c=blBt3PJbOSEZF5_zB5YgKYeq9Zx_RMOLntX_nI3lliQ=", category: "Education" },
      { id: 8, title: "Global Summit Discusses AI in Education", source: "Global News", date: "Jan 12, 2025", description: "Experts from around the world discuss AI’s role in schools...", image: "https://media.istockphoto.com/id/1369150014/vector/breaking-news-with-world-map-background-vector.jpg?s=1024x1024&w=is&k=20&c=blBt3PJbOSEZF5_zB5YgKYeq9Zx_RMOLntX_nI3lliQ=", category: "Technology" },
      { id: 9, title: "College Admissions 2025: What’s New?", source: "University Weekly", date: "Jan 10, 2025", description: "New admission policies affect students worldwide...", image: "https://media.istockphoto.com/id/1369150014/vector/breaking-news-with-world-map-background-vector.jpg?s=1024x1024&w=is&k=20&c=blBt3PJbOSEZF5_zB5YgKYeq9Zx_RMOLntX_nI3lliQ=", category: "Education" },
      { id: 10, title: "Scholarship Programs for Underprivileged Students", source: "Global News", date: "Jan 5, 2025", description: "Financial aid options are increasing for students in need...", image: "https://media.istockphoto.com/id/1369150014/vector/breaking-news-with-world-map-background-vector.jpg?s=1024x1024&w=is&k=20&c=blBt3PJbOSEZF5_zB5YgKYeq9Zx_RMOLntX_nI3lliQ=", category: "Education" }
    ];
    setNews(sampleNews);
  }, []);

  const toggleFilter = () => {
    setFilterVisible(!filterVisible);
  };

  const handleFilterChange = (name, value, checked) => {
    setFilters((prevFilters) => {
      const newValues = checked
        ? [...prevFilters[name], value]
        : prevFilters[name].filter((item) => item !== value);
      return { ...prevFilters, [name]: newValues };
    });
    setCurrentPage(1);
  };

  const filteredNews = news.filter((article) => {
    if (filters.category.length && !filters.category.includes(article.category)) return false;
    if (filters.source.length && !filters.source.includes(article.source)) return false;
    return true;
  });

  const totalPages = Math.ceil(filteredNews.length / newsPerPage);
  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = filteredNews.slice(indexOfFirstNews, indexOfLastNews);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="news-container">
        {/* Toggle Button for Mobile */}
        <button className="filter-toggle-button" onClick={toggleFilter}>
          {filterVisible ? "Hide Filters" : "Show Filters"}
        </button>

        {/* Filter Panel */}
        <div className={`news-filter-container ${filterVisible ? "show" : "hide"}`}>
          <NewsFilter filters={filters} onFilterChange={handleFilterChange} />
        </div>

        {/* News List */}
        <div className="news-list-container">
          <h3>Latest News</h3>
          <div className="news-list">
            {currentNews.length > 0 ? (
              currentNews.map((article) => (
                <div key={article.id} className="news-card">
                  <div className="news-image">
                    <img src={article.image} alt="News Thumbnail" className="news-thumbnail" />
                  </div>
                  <div className="news-info">
                    <h4 className="news-title">{article.title}</h4>
                    <p className="news-source"><strong>Source:</strong> {article.source}</p>
                    <p className="news-date"><strong>Date:</strong> {article.date}</p>
                    <p className="news-description">{article.description}</p>
                  </div>
                </div>
              ))
            ) : (
              <p>No news match the selected filters.</p>
            )}
          </div>

          {/* Pagination with Numbers */}
          <div className="pagination-container">
            <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className="pagination-button">
              Previous
            </button>

            {[...Array(totalPages)].map((_, index) => (
              <button 
                key={index + 1} 
                className={`pagination-button ${currentPage === index + 1 ? "active" : ""}`} 
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}

            <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} className="pagination-button">
              Next
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default News;
