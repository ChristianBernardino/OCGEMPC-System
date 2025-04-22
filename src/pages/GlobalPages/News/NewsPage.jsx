// src/pages/GlobalPages/Announcements.jsx
import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import MemberLayout from "../../../layouts/MemberLayout";

const announcements = [
  {
    title: "New Loan Program Launched!",
    content: "We are excited to launch a new low-interest loan program for all members.",
    date: "April 13, 2025"
  },
  {
    title: "General Assembly",
    content: "The cooperative office will hold a general assembly to discuss some changes to its policies.",
    date: "April 10, 2025"
  },
  {
    title: "Holiday Schedule",
    content: "The cooperative office will be closed on April 17-20 for local holidays.",
    date: "April 08, 2025"
  },
  {
    title: "Member's Meeting Recap",
    content: "Here's what you missed during the April General Assembly...",
    date: "April 05, 2025"
  }
];

function NewsPage () {
  return (
    <MemberLayout>
    <Container className="mt-5">
      <h3>Latest Announcements</h3>
      <Row className="mt-4">
        {announcements.map((item, idx) => (
          <Col md={4} className="mb-4" key={idx}>
            <Card className="h-100">
              <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">{item.date}</Card.Subtitle>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.content}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </MemberLayout>
  );
};

export default NewsPage;
