import './signin.css'
import Logo from './Logo'
import { Link } from 'react-router-dom'
const Signin = () => {
    return (
        <div className="container">
            <div className="card flex">
                <div className="content">
                    <div className='logo flex'>
                        <Logo/>
                    </div>
                    <h4 className='title'>Sign in</h4>
                    <p className='desc'>to continue to Gmail</p>
                    <form className='form'>
                        <input type="text" className='input1' id='mail' placeholder=' ' />
                        <label className='inputLabel' htmlFor='mail'></label>
                            <Link to="forgotmail" className='forgotten'>Forgot mail?</Link>
                        <p className='disclaimer'>
                            Not your computer? Use Guest mode to sign in privately.
                        </p>
                        <Link to="/" className='learn'>Learn more</Link>
                        <div className='btn-container flex'>
                            <Link to="signup" className='createAcc'>Create account</Link>
                            <button className='next-btn'>Next</button>
                        </div>
                    </form>
                </div>
            </div>  
            <div className="footer">
                <div className='region'>
                    
                </div>
                <div className='utils'></div>
            </div>
        </div>
    )
}
export default Signin;