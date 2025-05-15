import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Import your pages
import Login from './Pages/Login';
import Home from './Pages/Home';
import AdminDashboard from './Pages/AdminDashboard';
import CustomerDashboard from './Pages/CustomerDashboard';
import LenderDashboard from './Pages/LenderDashboard';
import CreditForm from './Pages/CreditForm';
import CreditReport from './Pages/CreditReport';
import CustomerInfo from './Pages/CustomerInfo';
import CustomerPayments from './Pages/CustomerPayments';
import Dashboard from './Pages/Dashboard';
import ManageLoans from './Pages/ManageLoans';
import SubmitCreditData from './Pages/SubmitCreditData';
import SubmitCreditReport from './Pages/SubmitCreditReport';
import ConsumerList from './Pages/consumer-list';
import RequestCreditReports from './Pages/RequestCreditReports';
import LoanApplicationForm from './Pages/LoanApplicationForm';
import LoanApplications from './Pages/LoanApplications';
import LoanHistory from './Pages/LoanHistory';
import LenderCreditReport from './Pages/LenderCreditReport';
import LoanPayments from './Pages/LoanPayment';
import LearnMore from './Pages/LearnMore';
import LoanAnalytics from './Pages/LoanAnalytics';
import ForgotPassword from './Pages/ForgotPassword'; // Import new page

const AppRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/login') {
      document.body.classList.add('login-background');
    } else {
      document.body.classList.remove('login-background');
    }
  }, [location]);

  return (
    <Routes>
      {/* Authentication Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} /> {/* Add new route */}
      <Route path="/learn-more" element={<LearnMore />} />

      {/* Dashboard Routes */}
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/customer-dashboard" element={<CustomerDashboard />} />
      <Route path="/lender-dashboard" element={<LenderDashboard />} />
      <Route path="/submit-credit-data" element={<SubmitCreditData />} />
      <Route path="/submit-credit-report" element={<SubmitCreditReport />} />
      <Route path="/consumer-list" element={<ConsumerList />} />

      {/* Additional Pages */}
      <Route path="/credit-form" element={<CreditForm />} />
      <Route path="/credit-report" element={<CreditReport />} />
      <Route path="/customer-info" element={<CustomerInfo />} />
      <Route path="/customer-payments" element={<CustomerPayments />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/manage-loans" element={<ManageLoans />} />
      <Route path="/request-credit-reports" element={<RequestCreditReports />} />
      <Route path="/loan-application" element={<LoanApplicationForm />} />
      <Route path="/loan-applications" element={<LoanApplications />} />
      <Route path="/loan-history" element={<LoanHistory />} />
      <Route path="/lender-credit-report" element={<LenderCreditReport />} />
      <Route path="/loan-payments" element={<LoanPayments />} />
      <Route path="/loan-analytics" element={<LoanAnalytics />} />
    </Routes>
  );
};

const App = () => (
  <Router>
    <AppRoutes />
  </Router>
);

export default App;