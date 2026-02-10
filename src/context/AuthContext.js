import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // load logged-in user on refresh
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const signup = (username, password) => {
    const account = {
      username: username.trim(),
      password: password.trim(),
    };

    localStorage.setItem("account", JSON.stringify(account));
    return true;
  };

  const login = (username, password) => {
    const saved = JSON.parse(localStorage.getItem("account"));
    if (!saved) return false;

    const inputUsername = username.trim();
    const inputPassword = password.trim();

    if (
      saved.username !== inputUsername ||
      saved.password !== inputPassword
    ) {
      return false;
    }

    const userData = { username: saved.username };
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
    return true;
  };

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

export const useAuth = () => useContext(AuthContext);
