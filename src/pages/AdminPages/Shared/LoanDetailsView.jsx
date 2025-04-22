import React from 'react';
import AdminLayout from '../../../layouts/AdminLayout';
import LoanForm from '../../../components/Forms/LoanForm';
import { initialLoanFields } from '../../../constants/formFields';

function LoanDetailsView  ({ loanData }) {
  return (
    <AdminLayout>
      <h2>Loan Details</h2>
      <LoanForm
        formFields={initialLoanFields}
        editable={false}
        roleView="ReadOnly"
      />
    </AdminLayout>
  );
};

export default LoanDetailsView;