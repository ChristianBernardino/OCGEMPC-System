import React from 'react';
import { Badge } from 'react-bootstrap';

const LoanStatusBadge = ({ status }) => {
  const getVariant = () => {
    switch (status) {
      case 'Pending': return 'warning';
      case 'Approved': return 'success';
      case 'Rejected': return 'danger';
      default: return 'secondary';
    }
  };
  return <Badge bg={getVariant()}>{status}</Badge>;
};

export default LoanStatusBadge;