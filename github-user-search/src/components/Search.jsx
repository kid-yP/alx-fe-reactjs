import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setUserData(null);

    try {
      const data = await fetchUserData(username); // Call the API function
      setUserData(data);
    } catch (err) {
      setError("Looks like we can't find the user"); // Error message
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="text"
          value={username}
          onChange={handleChange}
          placeholder="Enter GitHub username"
          className="border rounded-l-md p-2 flex-grow"
          required
        />
        <button type="submit" className="bg-blue-500 text-white rounded-r-md p-2">
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {userData && (
        <div className="mt-4">
          <h2 className="text-xl font-bold">{userData.name || userData.login}</h2> {/* Display name or login */}
          <img src={userData.avatar_url} alt={userData.name || userData.login} className="w-24 h-24 rounded-full" />
          <p>
            <a href={userData.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
              View Profile
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default Search;