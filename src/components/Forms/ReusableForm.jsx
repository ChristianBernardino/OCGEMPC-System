import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Row, Col } from 'react-bootstrap';

const ReusableForm = ({ formFields, onSubmit, onClose, onClick }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Row>
        {formFields.map((field, idx) => (
          <Col md={field.col || 6} key={idx} className="mb-3">
            <Form.Group controlId={field.name}>
              <Form.Label>{field.label}</Form.Label>
              {field.type === 'select' ? (
                <Form.Select name={field.name} onChange={field.onChange}>
                  {field.options.map((opt, i) => (
                    <option key={i} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </Form.Select>
              ) : (
                <Form.Control
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  onChange={field.onChange}
                  required={field.required}
                />
              )}
            </Form.Group>
          </Col>
        ))}
      </Row>
      <div className="d-flex justify-content-end gap-2">
        {onClose && <Button variant="secondary" onClick={onClose}>Cancel</Button>}
        <Button variant="success" type="submit" onClick={onClick}>Submit</Button>
      </div>
    </Form>
  );
};

ReusableForm.propTypes = {
  formFields: PropTypes.array.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onClick: PropTypes.func,
  onClose: PropTypes.func,
};

export default ReusableForm;
