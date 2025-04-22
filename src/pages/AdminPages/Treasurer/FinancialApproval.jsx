import React from 'react';
import AdminLayout from '../../../layouts/AdminLayout';
import LoanTable from '../../../components/Tables/LoanTable';


function FinancialApprovals () {
  const loansToReview = [
    { id: 3, type: 'Educational', amount: 20000, term: '24 months', status: 'Pending', date: '2025-04-08' },
  ];

  return (
    <AdminLayout>
      <h2>Financial Review</h2>
      <LoanTable data={loansToReview} showActions={true} role="Treasurer" />
    </AdminLayout>
  );
};

export default FinancialApprovals;