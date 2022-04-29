import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import logo from '../../logos/Group.png';

const Register = () => {
    const { id } = useParams();
    return (
        <div className='container'>
            <div className='d-flex  justify-content-center my-3'>
                <img src={logo} className="w-25" alt="" />
            </div>
            <div className='w-50 mx-auto card p-4 my-5'>
                <Form className=''>
                    <Form.Group className="mb-3" controlId="formBasicTitle">
                        <Form.Control className='border-0 border-bottom' type="text" name='name' placeholder="Full Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control className='border-0 border-bottom' type="text" name='email' placeholder="Username of Email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicDate">
                        <Form.Control className='border-0 border-bottom' type="date" name='date' placeholder="Date" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicLink">
                        <Form.Control className='border-0 border-bottom' type="text" name='des' placeholder="Description" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicLink">
                        <Form.Control className='border-0 border-bottom' type="text" name='des' placeholder="Description" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Register
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Register;