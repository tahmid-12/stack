import { Header, Button, SubmitButton } from "../components";
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { RootState } from "../store";
import { signIn } from "../features/auth/authLoginSlice";
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignIn = async (e: any) => {
    e.preventDefault();

    // Replace these lines with your actual form data extraction
    const email = e.target.email.value;
    const password = e.target.password.value; 

    try {
      const response = await dispatch(signIn({ email, password }));
      const token = response.payload.token;
      
      localStorage.setItem('authToken', token);
      navigate('/dashboard');
    } catch (error) {
      // Handle login error (e.g., display an error message)
      console.error('Login error:', error);
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded w-2/5">
          <div className="flex flex-col items-center">
            <p className="text-base text-heading font-heading font-sans">Sign In</p>
            <p className="text-blurColor text-blur text-blurWeight font-sans m-[17px]">Welcome back, you’ve been missed!</p>
            <div className="flex gap-[50px] mb-[17px]">
              <Button name="Sign Up with Google" image={<FcGoogle />} />
              <Button name="Sign Up with Apple ID" image={<FaApple />} />
            </div>
            <p className="text-blurColor text-blur text-blurWeight font-sans mb-[17px]">OR</p>
          </div>
          <form onSubmit={handleSignIn}>
            <div className="mb-4">
              <input
                type="text"
                name="email" 
                className="w-full p-4 border rounded-[16px] border-gray-300"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                name="password" 
                className="w-full p-4 border rounded-[16px] border-gray-300"
                placeholder="Create password"
              />
            </div>
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                id="agreeTerms"
                className="w-5 h-5 rounded border border-gray-300 text-blue-500"
              />
              <label htmlFor="agreeTerms" className="ml-2 text-blurColor text-blur text-blurWeight font-sans">
                Remember Me
              </label>
            </div>
            <SubmitButton name="Sign In" />
          </form>
          <div className="flex flex-col items-center">
            <p className="text-blurColor text-blur text-blurWeight font-sans m-[17px]">Don’t have an account yet? <span className="text-blue font-[500]"><Link to="/sign-up">Sign Up</Link></span></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignIn