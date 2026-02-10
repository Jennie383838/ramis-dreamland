import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

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

    console.log("SIGNUP saving:", account);
    localStorage.setItem("account", JSON.stringify(account));
    return true;
  };

  const login = (username, password) => {
    const saved = JSON.parse(localStorage.getItem("account"));
    console.log("LOGIN saved account:", saved);

    if (!saved) return false;

    const u = username.trim();
    const p = password.trim();

    console.log("LOGIN input:", { u, p });

    if (saved.username !== u || saved.password !== p) {
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
