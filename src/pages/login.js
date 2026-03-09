import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./login.css";

export default function Login() {

  const navigate = useNavigate();
  const { login } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("member");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();
    setError("");

    if (!username || !password) {
      setError("Please enter your username and password.");
      return;
    }

    const success = login(username, password, role);

    if (!success) {
      setError("Invalid username or password.");
      return;
    }

    if (role === "admin") {
      navigate("/admin-dashboard");
    } else {
      navigate("/home");
    }
  };

  return (
    <div className="login-page">

      <div className="login-box">

        <h1 className="login-title">Welcome</h1>

        <form onSubmit={handleSubmit}>

          {error && <p className="error">{error}</p>}

          <div className="role-row">
            <label>Login As</label>

            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="member">Member</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <label>Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="login-links">

            <span
              onClick={() => navigate("/forgot-password")}
            >
              Forgot Password?
            </span>

            <span
              onClick={() => navigate("/signup")}
            >
              Don’t have an account? Sign up
            </span>

          </div>

          <button type="submit">
            Sign In
          </button>

        </form>

      </div>

    </div>
  );
}