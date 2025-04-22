import React from 'react';
import { Card } from 'react-bootstrap';

const InfoCard = ({ label, value, bg = 'primary', text = 'white' }) => {
  return (
    <Card bg={bg} text={text} className="mb-3 text-center shadow-sm">
      <Card.Body>
        <Card.Title>{label}</Card.Title>
        <Card.Text style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
          {value}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default InfoCard;
