// context/AuthContext.js
import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from 'next/router'; // Add this line for Next.js routing

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const refreshAccessToken = async () => {
    try {
      const response = await fetch("/auth/token/refresh/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ refresh: refreshToken }),
      });

      if (response.ok) {
        const data = await response.json();
        setToken(data.access);
        setError(null);
      } else {
        setError("Token refresh failed. Please log in again.");
        logout(); // Log out the user if token refresh fails
      }
    } catch (error) {
      setError("Token refresh failed. Please log in again.");
      logout(); // Log out the user if an error occurs during token refresh
    }
  };

  // Example: Refresh token before making an API request
  // const fetchData = async () => {
  //   await refreshAccessToken();
  //   const response = await fetch('/api/data', {
  //     headers: {
  //       'Authorization': `Bearer ${accessToken}`,
  //     },
  //   });
  //   Process the response
  // };

  const changePassword = async (newPassword) => {
    try {
      await fetch("/auth/users/set_password/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Include JWT token
        },
        body: JSON.stringify({ new_password: newPassword }),
      });
      setError(null); // Clear previous errors on successful password change
    } catch (error) {
      setError("Password change failed. Please try again."); // Set a meaningful error message
    }
  };

  const recoverPassword = async (email) => {
    try {
      await fetch("/auth/password/reset/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      setError(null); // Clear previous errors on successful password recovery request
    } catch (error) {
      setError(
        "Password recovery failed. Please check your email and try again."
      ); // Set a meaningful error message
    }
  };

  const login = async (credentials) => {
    try {
      // ... your login logic
      setError(null); // Clear previous errors on successful login
    } catch (error) {
      setError("Login failed. Please check your credentials."); // Set a meaningful error message
    }
  };

  const register = async (userData) => {
    try {
      // ... your registration logic
      setError(null); // Clear previous errors on successful registration
    } catch (error) {
      setError("Registration failed. Please try again."); // Set a meaningful error message
    }
  };

  const logout = async () => {
    // ... your logout logic
    setUser(null); // Clear user data on logout
  };

  useEffect(() => {
    // ... your code to check authentication status (e.g., using a token)
  }, []);

  const value = {
    user,
    error,
    login,
    register,
    logout,
    recoverPassword,
    changePassword,
    refreshAccessToken,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuth };
