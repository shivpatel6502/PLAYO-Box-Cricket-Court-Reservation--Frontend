import React from 'react';
import "../styles/visulizerLogin.css"
import image from"../assets/logo1.png";

const VisulizerLoginBox = () => {
  return (
    <div className="login">
        <div className="login-box">
            <img src={image} alt="Login Logo" />
            <h2>Visulizer Login</h2>
            <form>
                <div className="user-box">
                <input type="text" name="" placeholder='Email or Username' required />
                {/* <label>Email or Username</label> */}
                </div>
                <div className="user-box">
                <input type="password" name="" placeholder='Password' required />
                {/* <label>Password</label> */}
                </div>
                <a href="#">Sign in</a>
            </form>
            <div className="su">
                <p className="sup">Don't have an account? <span className='span1'><a href="#">Sign Up</a></span></p>
            </div>
            <div className="su1">
                <p className="sup1">For any query : <span className='span2'><a href="#">support@account.com</a></span></p>
            </div>
        </div>
    </div>
  );
}

export default VisulizerLoginBox;
