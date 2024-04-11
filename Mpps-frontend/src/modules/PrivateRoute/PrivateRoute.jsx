// // import React from 'react';
// import { Navigate, Outlet } from 'react-router-dom';

// const PrivateRoute = ({ isLoggedIn }) => {
    
//     if (!isLoggedIn) {
//         return <Navigate to="/login" replace />; // Redirect to login on failure
//     }

//     return <Outlet />; // Render protected routes if authenticated
// };

// export default PrivateRoute;



import React, { useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({ isLoggedIn }) => {
  // Temporary state for testing (replace with backend logic later)
  // const [isLoggedInState, setIsLoggedInState] = useState(false);
  const [isLoggedInState, setIsLoggedInState] = useState(true);

  // Handle simulated login/logout (optional)
  const handleLogout = () => {
    setIsLoggedInState(false);
  };

  if (!isLoggedInState) {
    return <Navigate to="/login" replace />; // Redirect to login on failure
  }

  return (
    <>
      <Outlet /> {/* Render protected routes if authenticated */}
      {isLoggedIn && <button onClick={handleLogout}>Simulate Logout</button>} {/* Optional toggle button */}
    </>
  );
};

export default PrivateRoute;
