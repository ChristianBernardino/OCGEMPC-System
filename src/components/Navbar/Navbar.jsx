import React from "react";
import { useNavigate } from "react-router-dom";
import './NavbarStyle.css'
import headerlogo from '../../assets/images/COOP LOGO GREEN.png'

function Navbar() {
    const navigate = useNavigate();

    return (
        <div className='navbar'>
            <div className="nav-top-group">
                <img src={headerlogo}  className="navbar-flat-logo"/>
                <ul className="navbar-group"> 
                    {/* Global Pages To Be Added Soon  */}
                    {/* <li className="navbar-item"  onClick={() => navigate('/faq')}> FAQ</li>
                    <li className="navbar-item"  onClick={() => navigate('/news-page')}> News</li>
                    <li className="navbar-item"  onClick={() => navigate('/profile')}> Profile</li> */}
                    <li className="navbar-item"  onClick={() => navigate('/encode-loan')}> Encode </li>
                    <li className="navbar-item"  onClick={() => navigate('/loan-details')}> View Loan Details </li> 
                    <li className="navbar-item"  onClick={() => navigate('/loan-submissions')}> Loan Submissions</li>
                    <li className="navbar-item"  onClick={() => navigate('/pending-loans')}> Pending Approvals</li>
                    <li className="navbar-item"  onClick={() => navigate('/financial-approvals')}> Financial Approvals</li>
                    <li className="navbar-item"  onClick={() => navigate('/ledger')}> Ledger </li> 
                    <li className="navbar-item"  onClick={() => navigate('/print-loan-form')}> Print Loan Form</li>

                </ul>
            </div>

            {/* Member Related Pages  */}
            {/* <div className="nav-bot-group">
                <ul className="navbar-group"> 
                    <li className="navbar-item"
                        onClick={() => navigate('/member-dashboard')}
                    > My Dashboard
                    </li>
                    <li className="navbar-item" 
                        onClick={() => navigate('/loan-applications')}
                    > Loan Applications</li>
                    <li className="navbar-item" 
                        onClick={() => navigate('/transaction-history')}
                    > Transaction History</li>
                </ul>
            </div> */}
            
          
        </div>
    )
}

export default Navbar