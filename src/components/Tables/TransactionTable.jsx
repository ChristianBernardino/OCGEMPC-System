import React from 'react';
import { Table } from 'react-bootstrap';

const TransactionTable = ({ transactions = [] }) => {
  return (
    <Table striped bordered hover responsive size="sm">
      <thead>
        <tr>
          <th>Date</th>
          <th>Type</th>
          <th>Amount</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {transactions.length > 0 ? (
          transactions.map((txn, index) => (
            <tr key={index}>
              <td>{txn.date}</td>
              <td>{txn.type}</td>
              <td>{txn.amount}</td>
              <td>{txn.status}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4" className="text-center">No transactions yet.</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default TransactionTable;
