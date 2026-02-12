import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./login.css";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    // Normal user login
    const success = login(username, password);
    if (!success) {
      setError("Invalid username or password");
      return;
    }

    // Navigate to the homepage after successful login
    navigate("/home");
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h1>Welcome 💜</h1>

        <form onSubmit={handleLogin}>
          {error && <p className="error">{error}</p>}

          <label>Username</label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
          />

          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />

          <p
            className="signup-text clickable"
            onClick={() => navigate("/signup")}
          >
            Don’t have an account?
          </p>

          <button type="submit">LOGIN</button>
        </form>
      </div>
    </div>
  );
}
