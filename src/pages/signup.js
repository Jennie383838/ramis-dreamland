import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css";

export default function Signup() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();

    if (!email || !username || !password) return;

    // mock successful signup
    navigate("/login");
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h1>Create Account 💜</h1>

        <form onSubmit={handleSignup}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Username</label>
          <input
            type="text"
            placeholder="Choose a username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <div className="password-row">
            <label>Password</label>
            <span
              className="show-btn"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </span>
          </div>

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <p
            className="signup-text clickable"
            onClick={() => navigate("/login")}
          >
            Already have an account?
          </p>

          <button type="submit">SIGN UP</button>
        </form>
      </div>
    </div>
  );
}
