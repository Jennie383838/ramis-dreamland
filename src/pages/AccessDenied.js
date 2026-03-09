import { useNavigate } from "react-router-dom";
import "./accessDenied.css";

export default function AccessDenied() {
  const navigate = useNavigate();

  return (
    <div className="denied-page">
      <div className="denied-box">
        <h1>Access Denied</h1>
        <p>You must be an administrator to access this page.</p>
        <button onClick={() => navigate("/home")}>Back to Home</button>
      </div>
    </div>
  );
}