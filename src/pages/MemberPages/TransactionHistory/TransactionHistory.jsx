import React from "react";
import './TransactionHistoryStyle.css';
import MemberLayout from "../../../layouts/MemberLayout";
import TransactionTable from "../../../components/Tables/TransactionTable";
import { Form, Row, Col, Button } from 'react-bootstrap';

const dummyTransactions = [
  { date: '2025-04-10', type: 'Contribution', amount: '₱500', status: 'Completed' },
  { date: '2025-03-20', type: 'Loan Payment', amount: '₱1,000', status: 'Completed' },
  { date: '2025-02-10', type: 'Dividend', amount: '₱400', status: 'Credited' },
];

function TransactionHistory () {
    return (
        <MemberLayout>
            <div className="transaction-history-container container my-4">
                <h4>Transaction History</h4>

                {/* Optional Filter */}
                <Form className="mb-3">
                    <Row>
                        <Col md={4}>
                            <Form.Control type="text" placeholder="Search by type or amount" />
                        </Col>
                        <Col md={4}>
                            <Form.Select>
                                <option value="">Filter by Type</option>
                                <option value="contribution">Contribution</option>
                                <option value="loan">Loan</option>
                            </Form.Select>
                        </Col>
                        <Col md={4}>
                            <Button variant="outline-primary">Apply Filters</Button>
                        </Col>
                    </Row>
                </Form>

                <TransactionTable transactions={dummyTransactions} />
            </div>
        </MemberLayout>
    );
}

export default TransactionHistory;
