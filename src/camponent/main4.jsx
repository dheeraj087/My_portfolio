import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "./someexp";

function Profile() {
  return <h3>Profile Page</h3>;
}

function Settings() {
  return <h3>Settings Page</h3>;
}

export default function App2() {
  return (
    
    <BrowserRouter>
      <Routes>
        {/* Dashboard Layout Parent Route */}
        <Route path="/" element={<DashboardLayout />}>
          {/* Nested Routes */}
          <Route index element={<h3>Welcome to Dashboard</h3>} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
          <Route path="/" element={<DashboardLayout />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
