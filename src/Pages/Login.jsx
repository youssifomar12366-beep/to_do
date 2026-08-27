import Navbar from '../Components/Navbar';
import LoginForm from '../Components/LoginForm';

const Login = () => {
  return (
    <div>
      <Navbar/>
      <div className="page-container">
        <LoginForm/>
      </div>
    </div>
  );
};

export default Login;