import React, { useContext } from 'react'; // Import useContext from React
import UserContext from './UserContext';    // Import the UserContext

function UserProfile() {
  // Use useContext to access the data from UserContext
  const userData = useContext(UserContext);

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px' }}>
      <h2>{userData.name}</h2>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserProfile;