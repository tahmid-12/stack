import { useState } from "react";
import { Header, Button, SubmitButton } from "../components";
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from "../features/auth/authSlice";
import { RootState } from "../store";

const SignUp = () => {

  const dispatch = useDispatch();
  const auth = useSelector((state: RootState) => state.auth);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();

    // Replace this with your actual form data extraction
    const formData = {
      email,
      password,
      name,
    };

    dispatch(signUp(formData));
  };


  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded w-2/5">
          <div className="flex flex-col items-center">
            <p className="text-base text-heading font-heading font-sans">Getting Started</p>
            <p className="text-blurColor text-blur text-blurWeight font-sans m-[17px]">Create an account to continue!</p>
            <div className="flex gap-[50px] mb-[17px]">
              <Button name="Sign Up with Google" image={<FcGoogle />} />
              <Button name="Sign Up with Apple ID" image={<FaApple />} />
            </div>
            <p className="text-blurColor text-blur text-blurWeight font-sans mb-[17px]">OR</p>
          </div>
          <form onSubmit={handleSignUp}>
            <div className="mb-4">
              <input
                type="text"
                id="email"
                className="w-full p-4 border rounded-[16px] border-gray-300"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                id="name"
                className="w-full p-4 border rounded-[16px] border-gray-300"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                id="password"
                className="w-full p-4 border rounded-[16px] border-gray-300"
                placeholder="Create password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                id="agreeTerms"
                className="w-5 h-5 rounded border border-gray-300 text-blue-500"
              />
              <label htmlFor="agreeTerms" className="ml-2 text-blurColor text-blur text-blurWeight font-sans">
                I agree to the Terms & Conditions
              </label>
            </div>
            <SubmitButton name="Sign Up" />
          </form>
          {auth.loading === 'pending' && <p>Loading...</p>}
          {auth.error && <p className="text-red-500">{auth.error}</p>}
          <div className="flex flex-col items-center">
            <p className="text-blurColor text-blur text-blurWeight font-sans m-[17px]">Already have an account? <span className="text-blue font-[500]"><Link to="/">Sign In</Link></span> </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp