import React, { useState } from 'react';
import { fetchUser Data } from '../services/githubService'; // Ensure the function name is correct

const Search = () => {
  const [username, setUsername] = useState('');
  const [userData, setUser Data] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setUser Data(null);

    try {
<<<<<<< HEAD
      const data = await fetchUserData(username); // Call the API function
      setUserData(data);
=======
      const data = await fetchUser Data(username); // Correct function name
      setUser Data(data);
>>>>>>> d0b1a90906c6c4b1440f8d8351e260a9874f2991
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
<<<<<<< HEAD
          <h2 className="text-xl font-bold">{userData.name || userData.login}</h2> {/* Display name or login */}
          <img src={userData.avatar_url} alt={userData.name || userData.login} className="w-24 h-24 rounded-full" />
=======
          <h2 className="text-xl font-bold">{userData.login}</h2> {/* Displaying the login property */}
          <img src={userData.avatar_url} alt={userData.login} className="w-24 h-24 rounded-full" />
>>>>>>> d0b1a90906c6c4b1440f8d8351e260a9874f2991
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
