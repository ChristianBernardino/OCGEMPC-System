// src/pages/GlobalPages/UserProfile.jsx
import React from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import MemberLayout from "../../../layouts/MemberLayout";

const userData = {
  name: "Juan Dela Cruz",
  email: "juan.delacruz@email.com",
  role: "Member",
  joined: "January 2023",
  contact: "0917-123-4567"
};

function UserProfile () {
  return (
    <MemberLayout> 
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card>
            <Card.Header><h5>User Profile</h5></Card.Header>
            <Card.Body>
              <p><strong>Name:</strong> {userData.name}</p>
              <p><strong>Email:</strong> {userData.email}</p>
              <p><strong>Contact Number:</strong> {userData.contact}</p>
              <p><strong>Role:</strong> {userData.role}</p>
              <p><strong>Member Since:</strong> {userData.joined}</p>
              <div className="mt-4">
                <Button variant="outline-success">Edit Profile</Button>{' '}
                <Button variant="outline-danger">Logout</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </MemberLayout>
  );
};

export default UserProfile;
