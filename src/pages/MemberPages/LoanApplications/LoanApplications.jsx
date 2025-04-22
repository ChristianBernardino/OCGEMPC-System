import React, { useState } from "react";
import './LoanApplicationStyle.css';
import MemberLayout from "../../../layouts/MemberLayout";
import { Card, Button, Table, Pagination } from 'react-bootstrap';
import ReusableForm from "../../../components/Forms/ReusableForm";

const dummyLoans = Array.from({ length: 15 }, (_, index) => {
    const statusOptions = ['Approved', 'Pending', 'Rejected'];
    const typeOptions = ['Emergency', 'Educational', 'Personal'];
    const termOptions = ['6 months', '12 months', '24 months'];
    
    // Generate a recent date, staggered by days
    const today = new Date();
    const dateOffset = index * 10; // every 2 days apart
    const updatedDate = new Date(today);
    updatedDate.setDate(today.getDate() - dateOffset);
    
    return {
      id: index + 1,
      type: typeOptions[index % 3],
      amount: `₱ ${(index + 1) * 1000}`,
      term: termOptions[index % 3],
      status: statusOptions[index % 3],
      lastUpdated: updatedDate.toLocaleDateString('en-PH', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      })
    };
  });
  
function LoanApplication () {
  const itemsPerPage = 5
  const [formVisible, setFormVisible] = useState(false);
  const [formValues, setFormValues] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentLoans = dummyLoans.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(dummyLoans.length / itemsPerPage);

  const formFields = [
    { name: 'type', label: 'Loan Type', type: 'select', required: true, options: [
      { label: 'Emergency Loan', value: 'Emergency' },
      { label: 'Educational Loan', value: 'Educational' },
      { label: 'Personal Loan', value: 'Personal' },
    ]},
    { name: 'amount', label: 'Amount', type: 'number', placeholder: 'Enter amount', required: true },
    { name: 'term', label: 'Term', type: 'select', required: true, options: [
      { label: '6 months', value: '6 months' },
      { label: '12 months', value: '12 months' },
      { label: '24 months', value: '24 months' },
    ]}
  ];

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Loan Application:", formValues);
    setFormVisible(false); // Hide form after submission
  };

  const renderPagination = () => {
    let pages = [];

    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <Pagination.Item
          key={i}
          className="loan-application-pagination-item"
          active={i === currentPage}
          onClick={() => setCurrentPage(i)}
        >
          {i}
        </Pagination.Item>
      );
    }
    return <Pagination>{pages}</Pagination>;
  };

  return (
    <MemberLayout>
      <div className="loan-application-container container my-4">

        <div className="d-flex justify-content-between">
            <h4>My Loan Applications</h4>

            <Button className="mb-3" variant={'outline-success'} onClick={() => setFormVisible(!formVisible)}>
            {formVisible ? 'Hide Application Form' : 'Apply for New Loan'}
            </Button>
        </div>
        

        {formVisible && (
          <Card className="loan-application-card p-3 mb-4">
            <ReusableForm
              formFields={formFields.map(f => ({ ...f, onChange: handleChange }))}
              onSubmit={handleSubmit}
              onClose={() => setFormVisible(false)}
            />
          </Card>
        )}

        <Card>
          <Table striped bordered hover > 
            <thead>
              <tr>
                <th>#</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Term</th>
                <th>Status</th>
                <th>Last Updated</th>
              </tr>
            </thead>
            <tbody>
              {currentLoans.map((loan) => (
                <tr key={loan.id} className="loan-table-row" onClick={() => (console.log('testclick'))}>
                  <td>{loan.id}</td>
                  <td>{loan.type}</td>
                  <td>{loan.amount}</td>
                  <td>{loan.term}</td>
                  <td>
                    <span
                        className={`status-badge ${
                        loan.status === 'Approved'
                            ? 'status-approved'
                            : loan.status === 'Pending'
                            ? 'status-pending'
                            : 'status-rejected'
                        }`}
                    >
                        {loan.status}
                    </span>
                  </td>
                  <td>{loan.lastUpdated}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="d-flex justify-content-end pe-3">
            {renderPagination()}
          </div>
        </Card>
      </div>
    </MemberLayout>
  );
}

export default LoanApplication;
