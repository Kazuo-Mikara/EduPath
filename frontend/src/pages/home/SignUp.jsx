import React, { useRef, useEffect } from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Image from "../../assets/anime_student.png"
import { NavLink, useNavigate } from 'react-router';
import { Lock, User, Mail } from "lucide-react"
import { useAuth } from '../../utils/AuthContext';
const SignUp = () => {

    useEffect(() => {
        if (user) {
            navigate('/dashboard')
        }
        else {
            navigate('/sign_up')
        }
    }, [])
    const navigate = useNavigate();
    const { user, registerUser } = useAuth();
    const registerForm = useRef(null);
    const handleSignUp = async (e) => {
        e.preventDefault();
        const userName = registerForm.current.userName.value;
        const email = registerForm.current.email.value;
        const password = registerForm.current.password.value;
        const userInfo = { userName, email, password }
        console.log(userInfo);
        // registerUser({ userName, email, password });
        registerUser(userInfo);
    }
    return (
        <>

            <div className="p-10  bg-gradient-to-br w-full h-screen flex items-center justify-center">
                {/* White card container */}
                <div className="bg-gray-200 rounded-lg shadow-xl flex flex-col md:flex-row w-full max-w-4xl items-center justify-center overflow-hidden">

                    {/* Left Side: Form */}
                    <div className="w-full md:w-1/2 p-2 md:p-12 flex flex-col justify-center">
                        <h2 className="text-xl  text-gray-800 mb-6 text-center font-nunito">Empower your learning with EduPath</h2>
                        <h2 className="text-xl  text-gray-800 mb-6 text-center font-nunito">Sign Up</h2>

                        <form className="space-y-4" ref={registerForm} onSubmit={handleSignUp}>

                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-800">
                                    {/* Email Icon */}
                                    <Mail strokeWidth={3} className='h-5 w-5 ' />
                                </span>
                                <input
                                    type="text"
                                    name="userName"
                                    className="w-full py-3 pl-10  outline-none pr-3 border-b-1 border-b-gray-800 placeholder-gray-400"
                                    placeholder="Your Username"


                                />
                            </div>
                            {/* Email Input */}
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-800">
                                    {/* Email Icon */}
                                    <Mail strokeWidth={3} className='h-5 w-5 ' />
                                </span>
                                <input
                                    type="email"
                                    name="email"
                                    className="w-full py-3 pl-10  outline-none pr-3 border-b-1 border-b-gray-800 placeholder-gray-400"
                                    placeholder="Your Email"


                                />
                            </div>

                            {/* Password Input */}
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-800">
                                    {/* Lock Icon */}
                                    <Lock size={15} strokeWidth={3} className='w-5 h-5' />
                                </span>
                                <input
                                    type="password"
                                    name="password"
                                    className="w-full py-3 pl-10 pr-3 outline-none placeholder-gray-400 border-b-1 border-b-gray-800 "
                                    placeholder="Password"
                                />
                            </div>



                            {/* Terms and Conditions Checkbox */}
                            <div className="flex items-center">
                                <input
                                    id="terms"
                                    type="checkbox"
                                    required
                                    className="h-4 w-4  border-gray-800 rounded  mr-2"
                                />
                                <label className="text-sm text-gray-800">
                                    I agree all statements in <a href="#" className="text-[#8D6E42] hover:underline">Terms of service</a>
                                </label>
                            </div>

                            {/* Register Button */}
                            <button
                                type="submit"
                                className="w-full py-3 px-4 bg-[#8D6E42] text-white font-semibold rounded-md hover:opacity-40 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-20 shadow-md"
                            >
                                Sign Up
                            </button>
                        </form>

                        {/* "Already member" link */}
                        <p className="text-sm text-gray-800 mt-6 text-center">
                            New User? {' '}
                            <NavLink to="/sign_in" className="text-[#8D6E42] hover:underline font-medium">
                                Sign In
                            </NavLink>
                        </p>
                    </div>

                    {/* Right Side: Image */}
                    <div>
                        <img src={Image} alt="Sign Up" className="w-[500px] h-[400px] object-cover p-12" />
                    </div>

                </div>
            </div>

        </>
    );
};

export default SignUp;