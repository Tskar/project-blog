import './login.css';
import { Link } from 'react-router-dom';



function Login() {
    return(
        <div className='login'>
            <div className='login-tab'>
                <h2 className='login-title'>LOGIN</h2>
                <div className='login-form'>
                    <span>Email</span>                    
                    <input type="email" />
                    <span>Password</span>
                    <input type="password" />
                </div>
                <button>LOGIN</button>
                <p>Don't have an account? 
                    <Link className="link" to="/register">Sign up</Link>
                </p>
            </div>
        </div>
    )
}

export default Login;