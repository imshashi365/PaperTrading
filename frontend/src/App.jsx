import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './landing_page/home/HomePage';
import SignUp from './landing_page/SignUp/SignUp';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import ProductPage from './landing_page/product/ProductPage';
import PricingPage from './landing_page/pricing/PricingPage';
import SupportPage from './landing_page/support/SupportPage';
import AboutPage from './landing_page/about/AboutPage';
import NotFound from './landing_page/NotFound';
import DashboardLayout from './dashboard/components/DashboardLayout';
import DashboardHome from './dashboard/pages/Home';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes> 
        {/* Public Routes */}
        <Route path="/" element={<><Navbar /><HomePage /><Footer /></>} />
        <Route path="/signup" element={<><Navbar /><SignUp /><Footer /></>} />
        <Route path="/about" element={<><Navbar /><AboutPage /><Footer /></>} />
        <Route path="/product" element={<><Navbar /><ProductPage /><Footer /></>} />
        <Route path="/pricing" element={<><Navbar /><PricingPage /><Footer /></>} />
        <Route path="/support" element={<><Navbar /><SupportPage /><Footer /></>} />

        {/* Dashboard Routes */}
        <Route path="/dashboard" element={
          <DashboardLayout>
            <DashboardHome />
          </DashboardLayout>
        } />
        
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
