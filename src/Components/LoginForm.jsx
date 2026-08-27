import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    let newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Login Successful');
      navigate('/register');
    }
  };

  return (
    <div className="login-card">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Email Address</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={errors.email ? 'error-input' : ''}
          />
          {errors.email && <span className="error-text">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label>Password</label>
          <div className="password-wrapper">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={errors.password ? 'error-input' : ''}
            />
            <button
              type="button"
              className="toggle-btn"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? 'Hide Password' : 'Show Password'}
            </button>
          </div>
          {errors.password && <span className="error-text">{errors.password}</span>}
        </div>

        <button type="submit" className="submit-btn">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;