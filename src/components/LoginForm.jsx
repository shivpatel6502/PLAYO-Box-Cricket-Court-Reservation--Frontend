import React, { useState } from 'react';
import '../styles/loginform.scss';
import himg from "../assets/helmet1.jpg";

const LoginForm = ({ onClose }) => {
  const [formType, setFormType] = useState('login'); // 'login' or 'signup'

  const toggleForm = (type) => {
    setFormType(type);
  };

  return (
    <>
      <div className="overlay" onClick={onClose}></div>
      <div className="login-form-container">
        <img src={himg} alt="image" />
        <button className="close-button" onClick={onClose}>
          <span>&times;</span>
        </button>
        <div className="form-for">
          <button
            className={`section-style ${formType === 'login' ? 'active' : ''}`}
            onClick={() => toggleForm('login')}
          >
            Login
          </button>
          <button
            className={`section-style ${formType === 'signup' ? 'active' : ''}`}
            onClick={() => toggleForm('signup')}
          >
            Signup
          </button>
        </div>
        <form>
          {/* Other form elements based on formType */}
          {formType === 'login' && (
            <>
              <div className="form-group">
                <input type="text" id="email" name="email" placeholder="Email" required />
              </div>
              <div className="form-group">
                <input type="password" id="password" name="password" placeholder="Password" minLength="6" required />
              </div>
              <div className="form-group">
                <input type="number" id="mobileno" name="mobileno" placeholder="Mobile No." required />
              </div>
              <button type="submit" className="login-button">
                Login
              </button>
            </>
          )}
          {formType === 'signup' && (
            <>
              <div className="form-group">
                <input type="text" id="name" name="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="number" id="Mobile No." name="Mobile No." placeholder="Mobile No." required />
              </div>
              <div className="form-group">
                <input type="text" id="email" name="email" placeholder="Email" required />
              </div>
              <div className="form-group">
                <input type="password" id="password" name="password" placeholder="Password" minLength="6" required />
              </div>
              <div className="form-group">
                <input type="password" id="confirmpassword" name="confirmpassword" placeholder="ConfirmPassword" minLength="6" required />
              </div>
              <button type="submit" className="signup-button">
                Signup
              </button>
            </>
          )}
        </form>
      </div>
    </>
  );
};

export default LoginForm;


// import React from 'react';
// import '../styles/loginform.scss';
// // import uimg from "../assets/batsman.png"
// import himg from "../assets/helmet1.jpg"

// const LoginForm = ({ onClose }) => {
//   return (
//     <>
//       <div className="overlay" onClick={onClose}></div>
//       <div className="login-form-container">
//         <img src={himg} alt="image" />
//         <button className="close-button" onClick={onClose}>
//           <span>&times;</span>
//         </button>
//         {/* <h2>Login/Signup</h2> */}
//         <div className="form-for">
//           <button className="section-style">Login</button>          
//           <button className="section-style">Signup</button>          
//         </div>
//         <form>
//           <div className="form-group">
//             <input type="text" id="email" name="email" placeholder="Email" required />
//           </div>

//           <div className="form-group">
//             <input type="password" id="password" name="password" placeholder="Password" minLength="6" required />
//           </div>
     
//           <div className="form-group">
//             <input type="" id="Mobile_no" name="Mobile No" placeholder="Mobile No." minLength="10" required />
//           </div>

//           <button type="submit" className="login-button">Login</button>
//           <button type="submit" className="signup-button">Signup</button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default LoginForm;