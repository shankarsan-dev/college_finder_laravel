import React, { useEffect, useState } from "react";
import "./css/Blog.css";
import Footer from "./Footer";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  useEffect(() => {
    const sampleBlogs = [
      { id: 1, title: "The Future of Online Education", author: "John Doe", date: "Jan 30, 2025", description: "The rise of online education platforms has changed the way we learn...", image: "https://st2.depositphotos.com/1006009/9520/i/450/depositphotos_95203346-stock-photo-blog-word-abstract-in-wood.jpg" },
      { id: 2, title: "Understanding AI in Education", author: "Jane Smith", date: "Jan 28, 2025", description: "Artificial Intelligence is revolutionizing how we teach and learn...", image: "https://st2.depositphotos.com/1006009/9520/i/450/depositphotos_95203346-stock-photo-blog-word-abstract-in-wood.jpg" },
      { id: 3, title: "How Technology is Shaping Schools", author: "Mark Lee", date: "Jan 25, 2025", description: "Technology is bringing new opportunities and challenges to schools worldwide...", image: "https://st2.depositphotos.com/1006009/9520/i/450/depositphotos_95203346-stock-photo-blog-word-abstract-in-wood.jpg" },
      { id: 4, title: "10 Tips for Successful Remote Learning", author: "Linda Green", date: "Jan 22, 2025", description: "Remote learning can be challenging, but with the right strategies, it's possible to succeed...", image: "https://st2.depositphotos.com/1006009/9520/i/450/depositphotos_95203346-stock-photo-blog-word-abstract-in-wood.jpg" },
      { id: 5, title: "The Benefits of Educational Podcasts", author: "Alex Brown", date: "Jan 20, 2025", description: "Podcasts are a great way to learn while on the go. Here are some of the best educational podcasts...", image: "https://st2.depositphotos.com/1006009/9520/i/450/depositphotos_95203346-stock-photo-blog-word-abstract-in-wood.jpg" },
      { id: 6, title: "The Importance of Mental Health in Education", author: "Sarah White", date: "Jan 18, 2025", description: "In the fast-paced world of education, mental health often takes a backseat. It's time to change that...", image: "https://st2.depositphotos.com/1006009/9520/i/450/depositphotos_95203346-stock-photo-blog-word-abstract-in-wood.jpg" },
      { id: 7, title: "Gamification in the Classroom", author: "James Harris", date: "Jan 15, 2025", description: "Gamifying learning can make education more engaging and effective...", image: "https://st2.depositphotos.com/1006009/9520/i/450/depositphotos_95203346-stock-photo-blog-word-abstract-in-wood.jpg" },
      { id: 8, title: "How to Choose the Right College for You", author: "Megan Clark", date: "Jan 12, 2025", description: "Choosing the right college can be overwhelming. Here are some tips to help you make an informed decision...", image: "https://st2.depositphotos.com/1006009/9520/i/450/depositphotos_95203346-stock-photo-blog-word-abstract-in-wood.jpg" },
      { id: 9, title: "The Importance of Lifelong Learning", author: "David King", date: "Jan 10, 2025", description: "Lifelong learning is essential in today’s fast-changing world. Here’s why it matters...", image: "https://st2.depositphotos.com/1006009/9520/i/450/depositphotos_95203346-stock-photo-blog-word-abstract-in-wood.jpg" },
      { id: 10, title: "Innovative Teaching Methods to Explore", author: "Olivia Scott", date: "Jan 5, 2025", description: "Teaching is evolving. Discover new teaching methods that can transform the classroom experience...", image: "https://st2.depositphotos.com/1006009/9520/i/450/depositphotos_95203346-stock-photo-blog-word-abstract-in-wood.jpg" }
    ];
    setBlogs(sampleBlogs);
  }, []);

  const totalPages = Math.ceil(blogs.length / blogsPerPage);
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="blog-container">
        <div className="blog-main-content">
          <div className="blog-list">
            {currentBlogs.length > 0 ? (
              currentBlogs.map((blog) => (
                <div key={blog.id} className="blog-card">
                  <div className="blog-image">
                    <img src={blog.image} alt="Blog Thumbnail" className="blog-thumbnail" />
                  </div>
                  <div className="blog-info">
                    <h4 className="blog-title">{blog.title}</h4>
                    <p className="blog-author"><strong>Author:</strong> {blog.author}</p>
                    <p className="blog-date"><strong>Date:</strong> {blog.date}</p>
                    <p className="blog-description">{blog.description}</p>
                  </div>
                </div>
              ))
            ) : (
              <p>No blogs available.</p>
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

        {/* Sidebar with Ads Section */}
        <div className="ads-sidebar">
          <div className="ad-card">
            <h4>Advertise with Us</h4>
            <img src="https://via.placeholder.com/300x250" alt="Ad Banner" className="ad-banner" />
          </div>
          <div className="ad-card">
            <h4>Sponsored Ad</h4>
            <img src="https://via.placeholder.com/300x250" alt="Ad Banner" className="ad-banner" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
