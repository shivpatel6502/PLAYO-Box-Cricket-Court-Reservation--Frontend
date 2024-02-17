import React, { useState, useEffect } from 'react';
import "../styles/bookcourt.scss"; // Assuming you have a searchbar.scss file

const BookCourt = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query.trim() === '') {
      setSearchResults([]);
      return;
    }

    const fetchData = async () => {
      setLoading(true);

      // Replace this with your actual backend API endpoint
      const apiUrl = `https://your-backend-api/search?q=${encodeURIComponent(query)}`;

      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setSearchResults(data.results);
      } catch (error) {
        console.error('Error fetching search results:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSelectResult = (result) => {
    // Handle the selected result (e.g., navigate to a page, display details, etc.)
    console.log(`Selected: ${result}`);
    // Optionally, you can clear the search results and query after selecting
    setSearchResults([]);
    setQuery('');
  };

  return (
    <div className={`search-bar-container ${loading ? 'loading' : ''}`}>
      <div className="book-container">
        <div className="search-bar-container">
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="Enter your city"
          />

          {loading && <div>Loading...</div>}

          {!loading && searchResults.length > 0 && (
            <ul className="search-results">
              {searchResults.map((result, index) => (
                <li key={index} onClick={() => handleSelectResult(result)}>
                  {result.name} {/* Adjust this based on your actual data structure */}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookCourt;


// import React from 'react'
// import "../styles/bookcourt.scss"
// import {FaSearchLocation} from "react-icons/fa";

// const BookCourt = () => {
//   return (
//     <div className="book-container">
//       <div className="search-section">
//         <h2>Book Your Spot</h2>
//         {/* <label htmlFor="city">City:</label> */}
//         <div>
//         <FaSearchLocation/>
//         <input type="text" id="city" name="city" placeholder="Enter your city" />
//         </div>
//         <button type="button">Search</button>
//       </div>
//     </div>
//   );
// };

// export default BookCourt