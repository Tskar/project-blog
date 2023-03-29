import './register.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function Register() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const res = await axios.post('/auth/register', {
                username,
                email,
                password,
            });
            console.log(res);
        } catch(err){
            console.log("THIS ERROR POINT");
        }
        
    };

    return(
        <div className='register'>
            <form className='register-tab'  onSubmit={handleSubmit}>
                <h2 className='register-title'>REGISTER</h2>
                <div className='register-form'>
                    <span>Name</span>
                    <input type="text" onChange={e=>setUsername(e.target.value)}/>
                    <span>Email</span>                    
                    <input type="email" onChange={e=>setEmail(e.target.value)}/>
                    <span>Password</span>
                    <input type="password" onChange={e=>setPassword(e.target.value)}/>
                </div>
                <button type="submit">REGISTER</button>
                <p>
                    Have an account?
                    <Link className="link" to="/login">Sign in</Link>
                </p>
            </form>
        </div>
    )
}

export default Register;