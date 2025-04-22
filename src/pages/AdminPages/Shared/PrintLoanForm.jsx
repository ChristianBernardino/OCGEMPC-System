import React from 'react';
// import './PrintLoanForm.css';
import logo from '../../../assets/images/COOP LOGO GREEN.png'

function PrintLoanForm ({ loan }) {
  const loanToRender = loan || {
    name: 'Juan Dela Cruz',
    loanType: 'Emergency',
    amount: '₱10,000',
    term: '12 months',
    dateFiled: '2025-04-01',
    amortization: '₱920',
    serviceFee: '₱100',
    loanProtectionFee: '₱200',
  };

  return (
    <div className="print-loan-form">
      <header className="print-header">
        {/* <img src={logo} alt="OCGEMPC Logo" className="logo" /> */}
        <h3>Olongapo City Government Employees Multi-Purpose Cooperative</h3>
        <h4>Loan Application Form</h4>
      </header>

      <section className="print-details">
        <p><strong>Name:</strong> {loanToRender.name}</p>
        <p><strong>Loan Type:</strong> {loanToRender.loanType}</p>
        <p><strong>Amount:</strong> {loanToRender.amount}</p>
        <p><strong>Term:</strong> {loanToRender.term}</p>
        <p><strong>Date Filed:</strong> {loanToRender.dateFiled}</p>
        <p><strong>Amortization:</strong> {loanToRender.amortization}</p>
        <p><strong>Service Fee:</strong> {loanToRender.serviceFee}</p>
        <p><strong>Loan Protection Fee:</strong> {loanToRender.loanProtectionFee}</p>
      </section>

      <footer className="print-footer">
        <div className="signature-line">Signature over Printed Name (Member)</div>
        <div className="signature-line">Loan Officer</div>
        <div className="signature-line">Manager</div>
        <div className="signature-line">Treasurer</div>
      </footer>
    </div>
  );
};

export default PrintLoanForm;