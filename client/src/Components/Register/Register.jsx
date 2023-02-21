import './register.css';
import { Link } from 'react-router-dom';

function Register() {
    return(
        <div className='register'>
            <div className='register-tab'>
                <h2 className='register-title'>REGISTER</h2>
                <div className='register-form'>
                    <span>Name</span>
                    <input type="text" />
                    <span>Email</span>                    
                    <input type="email" />
                    <span>Password</span>
                    <input type="password" />
                </div>
                <button>REGISTER</button>
                <p>
                    Have an account?
                    <Link className="link" to="/login">Sign in</Link>
                </p>
            </div>
        </div>
    )
}

export default Register;