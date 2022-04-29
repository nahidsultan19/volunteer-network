import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AddActivities = () => {
    const navigate = useNavigate()
    const AddActivities = event => {
        event.preventDefault()
        const title = event.target.title.value;
        const img = event.target.img.value;
        console.log(title, img);
        const activity = { title, img };
        fetch('http://localhost:5000/volunteer', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(activity)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            });
        navigate('/')
    }
    return (
        <div className='container'>
            <div className='w-50 mx-auto mt-5'>
                <Form onSubmit={AddActivities}>
                    <Form.Group className="mb-3" controlId="formBasicTitle">
                        <Form.Control type="text" name='title' placeholder="Enter Ttitle" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicLink">
                        <Form.Control type="text" name='img' placeholder="Image link" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Add Activities
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default AddActivities;