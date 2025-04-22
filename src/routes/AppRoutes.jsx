import React from 'react';
import {BrowserRouter, Routes, Route, useLocation, Navigate  } from 'react-router-dom';
import Login from '../pages/Login/Login';
import '../App.css'

// Member Pages
import MemberDashboard from '../pages/MemberPages/MemberDashboard/MemberDashboard';
import LoanApplications from '../pages/MemberPages/LoanApplications/LoanApplications';
import TransactionHistory from '../pages/MemberPages/TransactionHistory/TransactionHistory';

// Admin Pages 
import EncodeLoan from '../pages/AdminPages/LoanOfficer/EncodeLoan';
import LoanSubmissions from '../pages/AdminPages/LoanOfficer/LoanSubmissions';
import PendingLoans from '../pages/AdminPages/Manager/PendingLoans';
import ViewLoanDetails from '../pages/AdminPages/Shared/LoanDetailsView';
import Ledger from '../pages/AdminPages/Shared/Ledger';
import PrintLoanForm from '../pages/AdminPages/Shared/PrintLoanForm';
import FinancialApprovals from '../pages/AdminPages/Treasurer/FinancialApproval';

// Global Pages 
import FAQPage from '../pages/GlobalPages/FAQ/FAQPage';
import NewsPage from '../pages/GlobalPages/News/NewsPage';
import UserProfile from '../pages/GlobalPages/UserProfile/Profile';

// Utils
import ProtectedRoute from './PrivateRoute';
import { AuthContextProvider } from '../authentication/authContext';
import {getCookie} from '../authentication/getCookie';
import { LoaderProvider } from '../components/Loaders/LoaderContext';





function Layout() {
  const location = useLocation();

  return (
    <LoaderProvider>
    <AuthContextProvider>
    <>
      
      <Routes>

        <Route path="/" element={<Login />} />

        {/* Member Routes */}
        <Route path='/member-dashboard' element={<MemberDashboard />}/>
        <Route path='/loan-applications' element={<LoanApplications />}/>
        <Route path='/transaction-history' element={<TransactionHistory />}/>


        {/* Global Routes */}
        <Route path='/faq' element={<FAQPage/>}/>
        <Route path='/news-page' element={<NewsPage/>}/>
        <Route path='/profile' element={<UserProfile/>}/>

        {/* Admin Routes */}
        <Route path='/encode-loan' element={<EncodeLoan/>}/>
        <Route path='/loan-submissions' element={<LoanSubmissions/>}/>
        <Route path='/pending-loans' element={<PendingLoans/>}/>
        <Route path='/loan-details' element={<ViewLoanDetails/>}/>
        <Route path='/financial-approvals' element={<FinancialApprovals/>}/>
        <Route path='/ledger' element={<Ledger/>}/>
        <Route path='/print-loan-form' element={<PrintLoanForm/>}/>



        <Route path="*" element={<Navigate to="/" replace />} />


      </Routes>
    </>
    </AuthContextProvider>
    </LoaderProvider>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </div>
  );
}

export default App;
