import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faPinterest, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const dummyUser = {
    email: "user@example.com",
    password: "password123"
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === dummyUser.email && password === dummyUser.password) {
      navigate('/home');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="container d-flex justify-content-center mt-5">
      <div className="card shadow" style={{ width: '22rem' }}>
        <div className="card-header text-center">
          <h3 className="mb-0" style={{ borderBottom: '2px solid pink', display: 'inline-block', paddingBottom: '5px' }}>Login</h3>
        </div>
        <div className="card-body">
          <p className="text-center mb-4">
            By signing in you are agreeing to our 
            <a href="/terms" className="text-decoration-none"> Term and Privacy Policy</a>
          </p>

          <div className="text-center mb-3">
            <a href="#" className="text-decoration-none me-3" style={{ borderBottom: '2px solid black' }}>Login</a>
            <a href="/register" className="text-decoration-none text-muted">Register</a>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text bg-white">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>
                </div>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="form-group mb-3">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text bg-white">
                    <FontAwesomeIcon icon={faLock} />
                  </span>
                </div>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <span className="input-group-text bg-white">
                  <FontAwesomeIcon icon={faEye} />
                </span>
              </div>
            </div>
            {error && <div className="text-danger mb-3 text-center">{error}</div>}

            <div className="d-flex justify-content-between mb-3">
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="rememberMe" />
                <label className="form-check-label" htmlFor="rememberMe">Remember password</label>
              </div>
              <a href="/forgot-password" className="text-decoration-none">Forget password</a>
            </div>

            <button type="submit" className="btn btn-primary w-100">Login</button>

            <div className="text-center mt-3">
              <p>or connect with</p>
              <div className="d-flex justify-content-center">
                <a href="#" className="btn btn-outline-primary btn-sm mx-1">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="#" className="btn btn-outline-primary btn-sm mx-1">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="#" className="btn btn-outline-primary btn-sm mx-1">
                  <FontAwesomeIcon icon={faPinterest} />
                </a>
                <a href="#" className="btn btn-outline-primary btn-sm mx-1">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
