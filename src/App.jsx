import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';
import Users from './pages/Users';
import Editu from './pages/Editu';
import Editc from './pages/Editc';
import Order from './pages/Order';
import Viewo from './pages/Viewo';
import Vendor from './pages/Vendor';
import Vendoroverview from './pages/Vendoroverview';
import Editm from './pages/Editm';
import Editv from './pages/Editv';
import Riders from './pages/Riders';
import Riderd from './pages/Riderd';
import Review from './pages/Revenue';
import Revenue from './pages/Revenue';
import Editrider from './pages/Editrider';
import Vouchers from './pages/Vouchers';



function App() {
  // Minimal auth (persists across refresh)
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('authenticated') === 'true';
  });

  useEffect(() => {
    if (isAuthenticated) {
      localStorage.setItem('authenticated', 'true');
    } else {
      localStorage.removeItem('authenticated');
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
          <Route path="/vendors" element={<Vendor />} />
          <Route path="/vendors/overview" element={<Vendoroverview />} />
          <Route path="/vendors/edit" element={<Editv />} />
          <Route path="/vendors/edit-menu" element={<Editm />} />

          {/* Additional Routes */}
          <Route path="/settings" element={<Settings />} />
          <Route path="/analytics" element={<Analytics />} />

          {/* Riders */}
          <Route path="/riders" element={<Riders />} />
          <Route path="/riders/riders-details" element={<Riderd />} />
          <Route path="/riders/edit-rider" element={<Editrider />} />

          {/* Revenue */}
          <Route path="/revenue" element={<Revenue />} />

          {/* Revenue */}
          <Route path="/vouchers" element={<Vouchers />} />


          {/* Catch-all for nested routes */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>

        {/* Catch-all for routes outside of Layout */}
        <Route path="*" element={<Navigate to={isAuthenticated ? '/' : '/login'} replace />} />
      </Routes>
    </Router>
  );
}

export default App;