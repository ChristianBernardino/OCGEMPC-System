import React from 'react';
import { Table, Button } from 'react-bootstrap';
import LoanStatusBadge from '../Badge/LoanStatusBadge';

const LoanTable = ({ data, showActions = false, role }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Type</th>
          <th>Amount</th>
          <th>Term</th>
          <th>Status</th>
          <th>Date</th>
          {showActions && <th>Actions</th>}
        </tr>
      </thead>
      <tbody>
        {data.map((loan) => (
          <tr key={loan.id}>
            <td>{loan.id}</td>
            <td>{loan.type}</td>
            <td>{loan.amount}</td>
            <td>{loan.term}</td>
            <td><LoanStatusBadge status={loan.status} /></td>
            <td>{loan.date}</td>
            {showActions && (
              <td>
                <Button size="sm" variant="success">Approve</Button>{' '}
                <Button size="sm" variant="danger">Reject</Button>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default LoanTable;