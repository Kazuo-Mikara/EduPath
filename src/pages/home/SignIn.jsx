import React, { useEffect, useRef } from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Image from "../../assets/anime_student.png"
import { NavLink, useNavigate } from 'react-router';
import { Lock, User, Mail } from "lucide-react"
import { useAuth } from '../../utils/AuthContext';
const SignIn = () => {
    const navigate = useNavigate();
    const { user, loginUser } = useAuth();
    const loginForm = useRef(null);
    useEffect(() => {
        if (user) {
            navigate('/dashboard')
        }
        else {
            navigate('/sign_in')
        }
    }, [])
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = loginForm.current.email.value;
        const password = loginForm.current.password.value;
        const userInfo = { email, password };
        loginUser(userInfo)

    }
    return (
        <>
            <NavBar />
            <div className="p-10 bg-gradient-to-br flex items-center justify-center">
                {/* White card container */}
                <div className="bg-white rounded-lg shadow-xl flex flex-col md:flex-row w-full max-w-4xl overflow-hidden">

                    {/* Left Side: Form */}
                    <div className="w-full md:w-1/2 p-2 md:p-12 flex flex-col justify-center">
                        <h2 className="text-xl italic text-gray-800 mb-6 text-center font-nunito">Empower your learning with EduPath</h2>
                        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center font-nunito">Sign In</h2>

                        <form className="space-y-4" ref={loginForm} onSubmit={handleSubmit}>


                            {/* Email Input */}
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                                    {/* Email Icon */}
                                    <Mail strokeWidth={3} className='h-5 w-5 ' />
                                </span>
                                <input
                                    type="email"
                                    name="email"
                                    className="w-full py-3 pl-10  outline-none pr-3 border-b-1 border-b-gray-500 placeholder-gray-400"
                                    placeholder="Your Email"


                                />
                            </div>

                            {/* Password Input */}
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                                    {/* Lock Icon */}
                                    <Lock size={15} strokeWidth={3} className='w-5 h-5' />
                                </span>
                                <input
                                    type="password"
                                    name="password"
                                    className="w-full py-3 pl-10 pr-3 outline-none placeholder-gray-400 border-b-1 border-b-gray-500 "
                                    placeholder="Password"
                                />
                            </div>



                            {/* Terms and Conditions Checkbox */}
                            <div className="flex items-center">
                                <input
                                    id="terms"
                                    type="checkbox"
                                    required
                                    className="h-4 w-4  border-gray-300 rounded  mr-2"
                                />
                                <label className="text-sm text-gray-600">
                                    I agree all statements in <a href="#" className="text-blue-500 hover:underline">Terms of service</a>
                                </label>
                            </div>

                            {/* Register Button */}
                            <button
                                type="submit"
                                className="w-full py-3 px-4 bg-primary text-white font-semibold rounded-md hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 shadow-md"
                            >
                                Login
                            </button>
                        </form>

                        {/* "Already member" link */}
                        <p className="text-sm text-gray-500 mt-6 text-center">
                            New User? {' '}
                            <NavLink to="/sign_up" className="text-blue-500 hover:underline font-medium">
                                Register
                            </NavLink>
                        </p>
                    </div>

                    {/* Right Side: Image */}
                    <div className="w-full relative md:w-1/2 from-bg-gray-300-to-bg-gray-100  p-8 flex items-center justify-center">
                        <div className="h-full md:h-auto">
                            {/* Desk Illustration */}
                            <img
                                src={Image} // Placeholder for the desk illustration
                                alt="Desk illustration"
                                className="w-full h-full object-contain rounded-3xl"
                            />


                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default SignIn