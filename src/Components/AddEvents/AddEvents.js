import React from 'react';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import { BsPlus } from 'react-icons/bs';

const AddEvents = () => {
    const handleEvent = event => {
        event.preventDefault();
        const title = event.target.title.value;
        const date = event.target.date.value;
        const des = event.target.des.value;
        const addEvent = { title, date, des }
        fetch('http://localhost:5000/events', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addEvent)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
        console.log(title, date, des);
    }
    return (
        <div className='container'>
            <div className="row mt-3">
                <div className="col-md-4">
                    <div className=''>
                        <p><button className='btn btn-link text-decoration-none'> <AiOutlineUsergroupAdd /> Volunteer Register List</button></p>
                        <p><button className='btn btn-link text-decoration-none'><BsPlus /> Add Event</button></p>
                    </div>
                </div>
                <div className="col-md-8 bg-light p-5 ">
                    <div className='mt-4'>
                        <h2>Event</h2>
                        <form onSubmit={handleEvent} className=''>
                            <div className='bg-white p-3 rounded-3'>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label htmlFor="title" className='form-label'>Event Title</label>
                                        <input className='form-control' type="text" name='title' placeholder='Event title' />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="date" className='form-label'>Event Date</label>
                                        <input className='form-control' type="date" name='date' />
                                    </div>
                                    <div className="col-md-6 mt-3">
                                        <label htmlFor="des" className='form-label'>Description</label>
                                        <input className='form-control' type="text" name='des' placeholder='enter description' />
                                    </div>
                                    <div className="col-md-6 mt-3">
                                        <label htmlFor="banner" className='form-label'>Banner</label>
                                        <input className='form-control' type="upload" placeholder='Upload Image' />
                                    </div>
                                </div>
                            </div>
                            <div className='mt-3 d-flex align-items-end'>
                                <button className='btn btn-primary btn-sm'>submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddEvents;