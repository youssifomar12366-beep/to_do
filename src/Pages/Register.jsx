import Navbar from '../Components/Navbar';
import RegisterForm from '../Components/RegisterFoem';

const Register = () => {
  return (
    <div>
      <Navbar/>
      <div className="page-container">
        <RegisterForm/>
      </div>
    </div>
  );
};

export default Register;