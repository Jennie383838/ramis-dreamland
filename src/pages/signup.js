import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./login.css";

export default function Signup() {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    if (!username || !password || !confirmPassword) return;

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    signup(username, password);
    navigate("/login");
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h1>Create your account</h1>
        <p className="subtitle">Join our K-pop store and start shopping 💜</p>

        <form onSubmit={handleSignup}>
          <label>Username</label>
          <input
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

          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button type="submit">Create Account</button>

          <p className="signup-text">
            Already have an account?{" "}
            <span
              className="clickable"
              onClick={() => navigate("/login")}
            >
              Sign in
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}