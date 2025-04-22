import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';

const LoanForm = ({ formFields, onSubmit, editable, roleView }) => {
  const [formData, setFormData] = useState(
    formFields.reduce((acc, field) => ({ ...acc, [field.name]: '' }), {})
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      {formFields.map((field) => (
        <Form.Group className="mb-3" key={field.name}>
          <Form.Label>{field.label}</Form.Label>
          <Form.Control
            type={field.type}
            name={field.name}
            value={formData[field.name]}
            onChange={handleChange}
            readOnly={!editable}
          />
        </Form.Group>
      ))}
      {editable && <Button variant="outline-success" type="submit">Submit</Button>}
    </Form>
  );
};

LoanForm.propTypes = {
  formFields: PropTypes.array.isRequired,
  onSubmit: PropTypes.func,
  editable: PropTypes.bool,
  roleView: PropTypes.string,
};

export default LoanForm;