import React from 'react';
import AdminLayout from '../../../layouts/AdminLayout';
import LoanTable from '../../../components/Tables/LoanTable';

function LoanLedger () {
  // Placeholder for ledger data
  const ledgerData = [
    { id: 1, member: 'Juan Dela Cruz', type: 'Emergency', amount: '₱10,000', date: '2024-12-15', status: 'Approved' },
    { id: 2, member: 'Maria Clara', type: 'Educational', amount: '₱15,000', date: '2025-01-10', status: 'Approved' },
  ];

  return (
    <AdminLayout>
      <div className="loan-ledger-page p-4">
        <h2 className="mb-4">Loan Ledger</h2>
        <LoanTable data={ledgerData} />
      </div>
    </AdminLayout>
  );
};

export default LoanLedger;