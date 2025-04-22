import React, { useState } from 'react';
import AdminLayout from '../../../layouts/AdminLayout';
import LoanForm from '../../../components/Forms/LoanForm';
import { initialLoanFields } from '../../../constants/formFields';

function EncodeLoan () {
  const handleSubmit = (formData) => {
    console.log('Encoded loan application:', formData);
    // TODO: Send to backend
  };

  return (
    <AdminLayout>
      <h2>Encode Loan Application</h2>
      <LoanForm
        formFields={initialLoanFields}
        onSubmit={handleSubmit}
        editable={true}
        roleView="LoanOfficer"
      />
    </AdminLayout>
  );
};

export default EncodeLoan;
