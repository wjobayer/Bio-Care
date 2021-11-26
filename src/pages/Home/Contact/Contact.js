
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faMobile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {  Button, Container, Form } from 'react-bootstrap';
import './Contact.css'
const Contact = () => {
    return (
        <div >
            <Container>
                <h1 className="display-4">Contact Us</h1>
                <Form className="m-5 p-5 w-100 mx-auto bg-light border rounded-2 left mb-5 p-5 text-primary">
                <Form.Label >Name</Form.Label>
                <Form.Control placeholder="Patient name" />
                <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="Patients Address" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label >Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Problem</Form.Label>
                <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <>
                <div className="mt-4">
                <Button variant="primary"><FontAwesomeIcon icon={faMobile} /> Call us
                    </Button>{' '}
                <Button variant="secondary"><FontAwesomeIcon icon={faWhatsapp} /> Whatsapp
                    </Button>{' '}
                    
                </div>
                
                </>
                <div className="mt-3" >
                <Button variant="primary">Get Appointment</Button>{' '}
                </div>
</Form>
            </Container>
        </div>
    );
};

export default Contact;