import React, { useState , useRef } from 'react';
import { NavLink , useNavigate} from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';
import { Alert , Form , Button } from 'react-bootstrap';

const Register = () => {
    const [error , setError] = useState("");
    const emailRef = useRef();
    const passwordRef = useRef();
    const { signUp } = useUserAuth();
    const navigate = useNavigate();
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError("");
        try{
            
            await signUp(emailRef.current.value , passwordRef.current.value);
            navigate("/");
        } catch (err){
            setError(err.message);
        }
    }
  return (
  <div>
      <div class="card w-50 mx-auto mt-5">
        <h5 class="card-header">register</h5>
        <div class="card-body">
          <div className="p-4">
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Email address"
                  ref={emailRef}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  ref={passwordRef}
                />
              </Form.Group>

              <div className="d-grid gap-2">
                <Button
                  variant="primary"
                  type="Submit"
                >
                  Register
                </Button>
              </div>
            </Form>
            <hr />
            <div></div>
          </div>
          <footer>
          <span> if you don't have any account</span>
        <NavLink className="m-2" to="/login">
                    you need to login
        </NavLink>
          </footer>
        </div>
      </div>
   </div>
  )

};

export default Register;
