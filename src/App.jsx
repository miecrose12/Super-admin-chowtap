import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "./components/layout/Layout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

import Users from "./pages/user/Users";
import Editu from "./pages/user/Editu";

import Order from "./pages/order/Order";
import Viewo from "./pages/order/Viewo";



import Review from "./pages/Revenue";
import Revenue from "./pages/Revenue";

import Vouchers from "./pages/Vouchers";
import Specialo from "./pages/Specialo";
import Transactions from "./pages/Transactions";
import Viewt from "./pages/Viewt";
import Editc from "./pages/user/Editc";
import VendorManagement from "./pages/vendor/Vendor";
import Vendoroverview from "./pages/vendor/Vendoroverview";
import Editv from "./pages/vendor/Editv";
import Editm from "./pages/vendor/Editm";
import Riders from "./pages/riders/Riders";
import Riderd from "./pages/riders/Riderd";
import Editrider from "./pages/riders/Editrider";
import Addspecial from "./pages/Addspecial";
import Building from "./pages/Building";


function App() {
  // Minimal auth (persists across refresh)
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem("authenticated") === "true";
  });

  useEffect(() => {
    if (isAuthenticated) {
      localStorage.setItem("authenticated", "true");
    } else {
      localStorage.removeItem("authenticated");
    }
  }, [isAuthenticated]);

  const handleLoginSuccess = () => setIsAuthenticated(true);
  const handleLogout = () => setIsAuthenticated(false);

  return (
    <Router>
      <Routes>
        {/* Public route - Login */}
        <Route
          path="/login"
          element={
            isAuthenticated ? (
              <Navigate to="/" replace />
            ) : (
              <Login onLoginSuccess={handleLoginSuccess} />
            )
          }
        />

        {/* Protected routes - Dashboard layout */}
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Layout onLogout={handleLogout} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        >
          {/* Dashboard/System Overview */}
          <Route index element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />

          {/* User Management */}
          <Route path="/users" element={<Users />} />
          <Route path="/users/edit" element={<Editu />} />
          <Route path="/users/edit-customer" element={<Editc />} />

          {/* Order Management */}
          <Route path="/orders" element={<Order />} />
          <Route path="/orders/view" element={<Viewo />} />

          {/* Vendor Management */}
          <Route path="/vendors" element={<VendorManagement />} />
          <Route path="/vendors/overview" element={<Vendoroverview />} />
          <Route path="/vendors/edit" element={<Editv />} />
          <Route path="/vendors/edit-menu" element={<Editm />} />

          {/* Additional Routes */}
     

          {/* Riders */}
          <Route path="/riders" element={<Riders />} />
          <Route path="/riders/riders-details" element={<Riderd />} />
          <Route path="/riders/edit-rider" element={<Editrider />} />

          {/* Revenue */}
          <Route path="/revenue" element={<Revenue />} />

          {/* voucher */}
          <Route path="/vouchers" element={<Vouchers />} />

          {/* special-order */}
          <Route path="/special-orders" element={<Specialo />} />

          {/* special-order */}
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/transactions/view-transactions" element={<Viewt />} />

          <Route path="/add-special" element={<Addspecial />} />

          <Route path="/building" element={<Building />} />

          {/* Catch-all for nested routes */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>

        {/* Catch-all for routes outside of Layout */}
        <Route
          path="*"
          element={<Navigate to={isAuthenticated ? "/" : "/login"} replace />}
        />
      </Routes>
    </Router>
  );
}

export default App;
