import React from 'react';
import './general.css';


function General() {

    return (
        <div className='general'>
            <header>Update general information</header>
            <label className='pinfoTitle'>Personal Information</label>
            <div className='personalinfo'>
                <label>Name</label>
                <input className='updatename' type="text" placeholder="Name" />
                <label>Email</label>
                <input className='updateemail' type="text" placeholder="Email" />
                <label>Phone number</label>
                <input className='updatephone' type="tel" placeholder="Phone Number" />
            </div>
            <label className='pinfoTitle'>Delete Account</label>
            <div className='accountInfo'>
                <span>Would you like to delete your account?</span>
                <button className='deletebutton'>Delete account</button>
            </div>
            <button className='updatebutton'>Update</button>
        </div>
    )
}

export default General;