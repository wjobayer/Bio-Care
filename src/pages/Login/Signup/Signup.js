import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Form ,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Signup = () => {
    const {handleRegistration,registerNewUser,handleNameChange,handleEmailChange,handlePasswordChange,signInUsingGoogle,error} = useAuth();
    return (
        <div>
            <Container>
                <h1 className="display-4">Sign Up</h1>
                <Form onSubmit={registerNewUser} className="bg-light border rounded w-100 mx-auto left mt-5 mb-5 p-5 text-primary">
                
                <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label >Name</Form.Label>
                <Form.Control type="text" onBlur={handleNameChange} placeholder="Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label >Email address</Form.Label>
                <Form.Control type="email" onBlur={handleEmailChange} placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" onBlur={handlePasswordChange} placeholder="Password" />
                </Form.Group>
                <div className="d-grid gap-2">
                <Button onClick={signInUsingGoogle} className="mb-2" variant="primary" size="lg">
                <FontAwesomeIcon icon={faGoogle} />  Google Sign In
                </Button>
                <Button onClick={handleRegistration} variant="secondary" size="lg"><FontAwesomeIcon icon={faUser} /> Sign Up
                </Button>
                <h6 className="text-black">Already Have An Account?  <Link className="text-decoration-none" to="/signin" >Sign In</Link></h6>
                <div className="row mb-3 text-danger">{error}</div>
        
</div>
                </Form>
            </Container>
        </div>
    );
};

export default Signup;