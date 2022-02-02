import React from 'react';
import './private.css';


function Private() {


    return (
        <div className='private'>
            <header>Update private information</header>
            <hr />

            <label className='pinfoTitle'></label>
            <div className='personalinfo'>
                <label>Username</label>
                <input className='updatename' type="text" placeholder="Username" />
                <label>Email</label>
                <input className='updateemail' type="text" placeholder="Email" />
                <label>Password</label>
                <input className='password' type="password" placeholder="New Password" />
            </div>

            <button className='updatebutton'>Update</button>

        </div>
    )
}

export default Private;