import React, { useEffect, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';


const UserFormModal = ({ show, handleClose, handleSubmit, user }) => {
  const [formData, setFormData] = useState({ firstname: '', lastname: '', email: '' });

  useEffect(() => {
    if (user) {
      setFormData({
        firstname: user.firstname || '',
        lastname: user.lastname || '',
        email: user.email || '',
        _id: user._id // for edit
      });
    } else {
      setFormData({ firstname: '', lastname: '', email: '' });
    }
  }, [user]);

  const onChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const onFormSubmit = e => {
    e.preventDefault();
    handleSubmit(formData);  // Save
    handleClose();           // Close modal
  };

  return (
    <Modal show={show} onHide={handleClose} backdrop="static" centered>
      <Form onSubmit={onFormSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>{user ? 'Edit User' : 'Add User'}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              name="firstname"
              value={formData.firstname}
              onChange={onChange}
              placeholder="Enter first name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              name="lastname"
              value={formData.lastname}
              onChange={onChange}
              placeholder="Enter last name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="email"
              type="email"
              value={formData.email}
              onChange={onChange}
              placeholder="Enter email"
              required
            />
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            {user ? 'Update' : 'Create'}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default UserFormModal;
