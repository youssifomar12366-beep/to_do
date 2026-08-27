import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Register.css';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    if (!formData.name) newErrors.name = 'Name is required';
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.username) {
      newErrors.username = 'Username is required';
    } else if (formData.username.includes(' ')) {
      newErrors.username = 'Username cannot contain spaces';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (!passwordRegex.test(formData.password)) {
      newErrors.password = 'Password format is invalid';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Confirm Password is required';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (validateForm()) {
      localStorage.setItem('currentUser', JSON.stringify(formData));
      navigate('/todo');
    }
  };

  return (
    <div className="register-card">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div className="form-group">
          <label>Name</label>
          <input name="name" type="text" onChange={handleChange} className={errors.name ? 'error-input' : ''} />
          {errors.name && <span className="error-text">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label>Email</label>
          <input name="email" type="text" onChange={handleChange} className={errors.email ? 'error-input' : ''} />
          {errors.email && <span className="error-text">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label>Username</label>
          <input name="username" type="text" onChange={handleChange} className={errors.username ? 'error-input' : ''} />
          {errors.username && <span className="error-text">{errors.username}</span>}
        </div>

        <div className="form-group">
          <label>Password</label>
          <input name="password" type="password" onChange={handleChange} className={errors.password ? 'error-input' : ''} />
          {errors.password && <span className="error-text">{errors.password}</span>}
        </div>

        <div className="form-group">
          <label>Confirm Password</label>
          <input name="confirmPassword" type="password" onChange={handleChange} className={errors.confirmPassword ? 'error-input' : ''} />
          {errors.confirmPassword && <span className="error-text">{errors.confirmPassword}</span>}
        </div>

        <button type="submit" className="submit-btn register-btn">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;