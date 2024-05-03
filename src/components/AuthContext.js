// AuthContext.js
import React, { createContext, useState, useContext } from 'react';

// Create the AuthContext
export const AuthContext = createContext();

// AuthProvider component to wrap around your application
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState(""); // Assuming you have different user types (e.g., "client", "labour")

  // Function to handle login
  const login = (userType) => {
    // Perform login logic here
    setIsLoggedIn(true);
    setUserType(userType);
  };

  // Function to handle logout
  const logout = () => {
    // Perform logout logic here
    setIsLoggedIn(false);
    setUserType("");
  };

  // Value to be provided by the context
  const authContextValue = {
    isLoggedIn,
    userType,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
