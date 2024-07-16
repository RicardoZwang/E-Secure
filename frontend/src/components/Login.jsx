import React, { useState } from "react";
//This is the login page, This file is temporary, will be deleted after this iteration.
const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === "user" && password === "pass") {
      onLogin(true);
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div>
      {/* Let the user enter a username and password */}
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type='submit' className='gap-5 border-black'>
          Login
        </button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default Login;
