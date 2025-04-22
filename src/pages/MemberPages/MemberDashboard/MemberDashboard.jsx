import React from 'react';
import MemberLayout from '../../../layouts/MemberLayout';
import { useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap';
import './DashboardStyle.css'

// Component Import
import InfoCard from '../../../components/Cards/InfoCard';
import TransactionTable from '../../../components/Tables/TransactionTable';
import AnnouncementCard from '../../../components/Cards/AnnouncementCard';


const dummyTransactions = [
  { date: '2025-04-05', type: 'Contribution', amount: '₱500', status: 'Completed' },
  { date: '2025-04-01', type: 'Loan Payment', amount: '₱1,000', status: 'Completed' },
  { date: '2025-03-20', type: 'Dividend', amount: '₱300', status: 'Credited' },
];


const MemberDashboard = () => {
     const navigate = useNavigate();

  return (
    <MemberLayout>
    <div className='member-dashboard'>
      <h4 className="welcome-message"> 
        Welcome Back, Member Name
      </h4>        

      <section className="summary-cards d-grid gap-3 my-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
          <InfoCard label="Savings Balance" value="₱12,300" bg="success" />
          <InfoCard label="Outstanding Loan" value="₱6,000" bg="success" />
          <InfoCard label="Dividends Earned" value="₱800" bg="success" />
          <InfoCard label="Monthly Contribution" value="₱500" bg="success" />
        </section>

        <section className="transactions my-4">
          <div className="d-flex justify-content-between align-items-center">
            <h5>Recent Transactions</h5>
            <Button className="mb-3" variant={'tertiary'} onClick={() => navigate('/transaction-history')}> View All Transactions</Button>
          </div>
 
          <TransactionTable transactions={dummyTransactions} />
        </section>

        <section className="announcements my-4">
        <div className="d-flex justify-content-between align-items-center">
            <h5>Announcements</h5>
            <Button className="mb-3" variant={'tertiary'} onClick={() => navigate('/news-page')}> More News </Button>
          </div>
          <AnnouncementCard 
            title="General Assembly"
            description="Join us on April 28, 2025, at City Hall Auditorium."
            date="2025-04-10"
          />
        </section>

    </div>
  </MemberLayout>
  )

};

export default MemberDashboard;
