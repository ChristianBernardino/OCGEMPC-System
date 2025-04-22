import React from 'react';
import AdminLayout from '../../../layouts/AdminLayout';
import LoanTable from '../../../components/Tables/LoanTable';

function PendingApprovals () {
  const pendingLoans = [
    { id: 2, type: 'Personal', amount: 15000, term: '12 months', status: 'Pending', date: '2025-04-09' },
  ];

  return (
    <AdminLayout>
      <h2>Pending Manager Approvals</h2>
      <LoanTable data={pendingLoans} showActions={true} role="Manager" />
    </AdminLayout>
  );
};

export default PendingApprovals;
