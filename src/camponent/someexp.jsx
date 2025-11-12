import { Outlet, Link } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <aside style={{ width: "200px", background: "#f0f0f0", padding: "1rem" }}>
        <h3>Menu</h3>
        <nav>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li><Link to="profile">Profile</Link></li>
            <li><Link to="settings">Settings</Link></li>
            <li><Link to="/">Dashboard</Link></li>
          </ul>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main style={{ flex: 1, padding: "1rem" }}>
        <h2>Dashboard</h2>
        <hr />
        {/* यहाँ nested route का content render होगा */}
        <Outlet />
      </main>
    </div>
  );
}
