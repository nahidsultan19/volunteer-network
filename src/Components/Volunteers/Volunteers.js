import React from 'react';
import useVolunteers from '../../hooks/useVolunteers';
import Volunteer from '../Volunteer/Volunteer';

const Volunteers = () => {
    const [volunteers] = useVolunteers();

    return (
        <div className='container mt-5'>
            <div className='w-50 mx-auto'>
                <h2>I GROW BY HELPING PEOPLE IN NEED</h2>
                <form className="d-flex mt-3">
                    <input className="form-control" type="search" placeholder="Search.." aria-label="Search" />
                    <button className="btn btn-primary" type="submit">Search</button>
                </form>
            </div>
            <div className='row mt-5'>
                {volunteers.map(volunteer => <Volunteer key={volunteer._id} volunteer={volunteer}></Volunteer>)}
            </div>
        </div>
    );
};

export default Volunteers;