'use client'
import styles from './login.module.css';
import { useState } from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function Login() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const { data } = useSession();

  const handleSignUpClick = () => {
    setIsSignUp(!isSignUp);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSignUp) {
      // Perform sign-up logic here
      const res = await signUp();
      console.log(res);
    } else {
      // Perform login logic here
      const res = await signIn('credentials', {
        username: username,
        password: password,
        callbackUrl: 'http://localhost:3000/',
      });
      console.log(res);
    }
  };

  const signUp = async () => {
    // Implement your sign-up logic here
    // You can use the provided state variables like `username`, `email`, and `password`
    // Call the appropriate API or function to create a new user
    // Return the response or relevant data as needed
  };

  return (
    <div className={styles.background}>
      <div className="vh-100 d-flex justify-content-center align-items-center background">
        <h1 className="position-absolute text-white top-0 start-0 p-3">EVascal</h1>
        <div className="bg-white shadow rounded p-4">
          {isSignUp ? (
            <form className="form-signin pb-5" onSubmit={handleSubmit}>
              <h3 className="mb-4 text-center">Sign Up</h3>
              <h5 className="mb-4 text-center">it's free it only takes a minute</h5>
              <input
                type="text"
                id="firstname"
                className="form-control mb-3 firstnameinput me-5"
                placeholder="firstname"
                autoFocus
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="text"
                id="lastname"
                className="form-control mb-3 lastnameinput"
                placeholder="lastname"
                required
              />

              <input
                type="email"
                id="inputEmail"
                className="form-control mb-3"
                placeholder="Email address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="password"
                id="inputPassword"
                className="form-control mb-3"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                id="ConfirmPassword"
                className="form-control mb-5"
                placeholder="Confirm Password"
                required
              />

              <button className="btn btn-lg btn-primary btn-block mb-3 w-100" type="submit">
                Sign up
              </button>

              <p className="text-muted">
                Already have an account?{' '}
                <button className="btn btn-link p-0 me-3" onClick={handleSignUpClick}>
                  sign up
                </button>
              </p>
            </form>
          ) : (
            <form className="form-signin pb-5" onSubmit={handleSubmit}>
              <h3 className="mb-4 text-center">Login</h3>

              <input
                type="text"
                id="inputEmail"
                className="form-control mb-3 emailinput"
                placeholder="Username"
                autoFocus
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <input
                type="password"
                id="inputPassword"
                className="form-control mb-3 passwordinput"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <div className="checkbox mb-3">
                <label className="mb-3">
                  <input type="checkbox" value="" className="me-3" />
                  Remember me
                </label>
                <p className="text-muted mb-0">Forgot the password?</p>
              </div>

              <button className="btn btn-lg btn-primary btn-block mb-3 w-100" type="submit">
                Login
              </button>
              <button
                className="btn btn-lg btn-secondary btn-block mb-3 w-100"
                onClick={() => {
                  signIn('google', { callbackUrl: 'http://localhost:3000/' });
                }}
              >
                or sign in with google
              </button>
              <p className="text-muted">
                Don't have an account?{' '}
                <button className="btn btn-link p-0" onClick={handleSignUpClick}>
                  Sign up
                </button>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}