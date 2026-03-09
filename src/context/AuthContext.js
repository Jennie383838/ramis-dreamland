import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Load logged-in user from localStorage on page load
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  /**
   * Member signup only
   * Admin cannot sign up through the form
   */
  const signup = (username, password) => {
    const existing = JSON.parse(localStorage.getItem("account"));

    if (existing && existing.username === username.trim()) {
      // username already exists
      return false;
    }

    const account = {
      username: username.trim(),
      password: password.trim(),
      role: "member", // all signups default to member
    };

    console.log("SIGNUP saving:", account);
    localStorage.setItem("account", JSON.stringify(account));
    return true;
  };

  /**
   * Login function
   * Sets user data including role
   */
  const login = (username, password) => {
    const saved = JSON.parse(localStorage.getItem("account"));

    if (!saved) return false;

    const u = username.trim();
    const p = password.trim();

    if (saved.username !== u || saved.password !== p) {
      return false;
    }

    // Store username + role
    const userData = {
      username: saved.username,
      role: saved.role, // "member" or "admin"
    };

    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
    return true;
  };

  /**
   * Logout
   */
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use auth context
export const useAuth = () => useContext(AuthContext);