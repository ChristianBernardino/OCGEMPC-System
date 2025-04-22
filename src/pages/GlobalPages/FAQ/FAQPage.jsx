// src/pages/GlobalPages/FAQ.jsx
import React from 'react';
import { Accordion, Container } from 'react-bootstrap';
import './FAQStyle.css'
import MemberLayout from "../../../layouts/MemberLayout";

const faqs = [
  {
    question: "How do I apply for a loan?",
    answer: "Log in to your member dashboard and navigate to 'Loan Application' to begin the process."
  },
  {
    question: "Where can I check my transaction history?",
    answer: "Go to your dashboard and click on 'Transaction History' to view all transactions."
  },
  {
    question: "How do I update my personal information?",
    answer: "Click on your profile icon and select 'Edit Profile' to update your details."
  }
];

function FAQPage () {
  return (
    <MemberLayout>
    <Container className="mt-5">
      <h3>Frequently Asked Questions</h3>
      <Accordion defaultActiveKey="0" className="mt-4">
        {faqs.map((faq, index) => (
          <Accordion.Item eventKey={index.toString()} key={index} >
            <Accordion.Header className="faq-header" >{faq.question}</Accordion.Header>
            <Accordion.Body>{faq.answer}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
    </MemberLayout>
  );
};

export default FAQPage;
