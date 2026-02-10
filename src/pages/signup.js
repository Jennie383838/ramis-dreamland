import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./login.css";

export default function Signup() {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    if (!username || !password) return;

    signup(username, password);
    navigate("/login");
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h1>Create Account 💜</h1>

        <form onSubmit={handleSignup}>
          <label>Username</label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
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
