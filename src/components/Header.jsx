import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';

const Header = () => {
  const [isLoginFormVisible, setLoginFormVisible] = useState(false);

  const toggleLoginForm = () => {
    setLoginFormVisible(!isLoginFormVisible);
  };

  return (
    <nav>
      <h1>
        Crickies.
      </h1>
      <main>
        <Link to={"/"}>HOME</Link>
        <Link to={"/play"}>PLAY</Link>
        <Link to={"/book"}>BOOK</Link>
        <Link to={"/learn"}>LEARN</Link>

        <div className="auth-buttons">
          <button onClick={toggleLoginForm}>Login/Signup</button>
        </div>
      </main>

      {/* Render the LoginForm only when isLoginFormVisible is true */}
      {isLoginFormVisible && <LoginForm onClose={toggleLoginForm} />}
    </nav>
  )
}

export default Header