import React from 'react';
import AdminLayout from '../../../layouts/AdminLayout';
import LoanTable from '../../../components/Tables/LoanTable';

function LoanSubmissions ()  {
  const dummyLoans = [
    { id: 1, type: 'Emergency', amount: 10000, term: '6 months', status: 'Pending', date: '2025-04-10' },
    // Add more data or fetch from API
  ];

  return (
    <AdminLayout>
      <h2>Submitted Loan Applications</h2>
      <LoanTable data={dummyLoans} />
    </AdminLayout>
  );
};

export default LoanSubmissions;