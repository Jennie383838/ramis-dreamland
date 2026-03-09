import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

export default function ForgotPassword() {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const handleNext = (e) => {

    e.preventDefault();
    setError("");

    if (!username) {
      setError("Please enter your username.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const found = users.find((u) => u.username === username);

    if (!found) {
      setError("User not found.");
      return;
    }

    navigate("/reset-password", { state: { username } });
  };

  return (
    <div className="login-page">

      <div className="login-box">

        <h2>Forgot Password</h2>

        <form onSubmit={handleNext}>

          {error && <p className="error">{error}</p>}

          <label>Username</label>

          <input
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <button type="submit">
            Continue
          </button>

          <p
            className="link-text"
            onClick={() => navigate("/")}
          >
            Back to Login
          </p>

        </form>

      </div>

    </div>
  );
}