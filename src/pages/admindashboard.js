import React from "react";
import "./admindashboard.css";

/* ===== ADMIN USER LIST ===== */
export const ADMIN_USERS = [
  "@Ruka_Forever",
  "@gabbysyj",
  "@xavierkoh1",
  "@Rin_yujinsbangs",
  "@lexlovesrosie"
];

function AdminDashboard() {
  return (
    <div className="admin-container">

      <div className="admin-hero">
        <h1>Admin Dashboard</h1>
        <p>
          Manage products, orders, and users from one central dashboard.
        </p>
      </div>

      {/* ===== ADMIN TEAM ===== */}
      <div className="admin-team">
        <h2>Admin Team</h2>

        <div className="admin-list">
          {ADMIN_USERS.map((admin, index) => (
            <span key={index} className="admin-badge">
              {admin}
            </span>
          ))}
        </div>
      </div>

      {/* ===== ADMIN FEATURES ===== */}
      <div className="admin-grid">

        <div className="admin-card">
          <h2>Orders</h2>
          <p>View and manage customer orders.</p>
          <button className="btn primary">Manage Orders</button>
        </div>

        <div className="admin-card">
          <h2>Products</h2>
          <p>Add, edit, or remove products from the store.</p>
          <button className="btn primary">Manage Products</button>
        </div>

        <div className="admin-card">
          <h2>Users</h2>
          <p>View all registered users and their activity.</p>
          <button className="btn secondary">View Users</button>
        </div>

        <div className="admin-card">
          <h2>Analytics</h2>
          <p>Track shop performance and product popularity.</p>
          <button className="btn secondary">View Stats</button>
        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;