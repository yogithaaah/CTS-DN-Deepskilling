import React, { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const GuestPage = () => (
    <div>
      <h2>Guest Page</h2>
      <p>Browse flights and details. Please log in to book tickets.</p>
    </div>
  );

  const UserPage = () => (
    <div>
      <h2>User Page</h2>
      <p>Welcome! You can now book your flight tickets.</p>
    </div>
  );

  return (
    <div>
      <h1>Ticket Booking App</h1>

      {/* Conditional Rendering of Page Content */}
      {isLoggedIn ? <UserPage /> : <GuestPage />}

      {/* Conditional Rendering of Button */}
      {isLoggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
}

export default App;
