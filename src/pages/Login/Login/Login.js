import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faUserCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Form ,Button} from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
  
    const Login = () => {
    const {processLogin, signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/doctors';


    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }

  return (
    <div>
      <Container>
                <h1 className="display-4">Sign In</h1>
                <Form className="bg-light border rounded w-100 mx-auto left mt-5 mb-5 p-5 text-primary">
                
                <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label >Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <div className="d-grid gap-2">
                <Button onClick={handleGoogleLogin} className="mb-2" variant="primary" size="lg">
                <FontAwesomeIcon icon={faGoogle} />  Google Sign In
                </Button>
                <Button onClick={processLogin} variant="secondary" size="lg"><FontAwesomeIcon icon={faUserCheck} /> Sign In
                </Button>
                <h6 className="text-black">Not A Member?  <Link to="/signup" className="text-decoration-none">Sign Up Now</Link></h6>
</div>
                </Form>
            </Container>
    </div>
  );
};

export default Login;