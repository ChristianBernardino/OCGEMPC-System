import React from 'react';
import { Card } from 'react-bootstrap';

const AnnouncementCard = ({ title, description, date }) => {
  return (
    <Card className="mb-3 shadow-sm">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        {date && <small className="text-muted">Posted on {date}</small>}
      </Card.Body>
    </Card>
  );
};

export default AnnouncementCard;
