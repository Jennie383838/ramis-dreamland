import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./login.css";

export default function ResetPassword() {

  const navigate = useNavigate();
  const location = useLocation();

  const username = location.state?.username;

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleReset = (e) => {

    e.preventDefault();
    setError("");

    if (!password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const updatedUsers = users.map((user) => {

      if (user.username === username) {
        return {
          ...user,
          password: password
        };
      }

      return user;

    });

    localStorage.setItem("users", JSON.stringify(updatedUsers));

    alert("Password reset successfully.");

    navigate("/");
  };

  return (
    <div className="login-page">

      <div className="login-box">

        <h2>Reset Password</h2>

        <form onSubmit={handleReset}>

          {error && <p className="error">{error}</p>}

          <label>New Password</label>

          <input
            type="password"
            placeholder="Enter new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label>Confirm Password</label>

          <input
            type="password"
            placeholder="Confirm new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button type="submit">
            Reset Password
          </button>

        </form>

      </div>

    </div>
  );
}