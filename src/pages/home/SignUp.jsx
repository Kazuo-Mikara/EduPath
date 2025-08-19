import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Image from "../../assets/anime_student.png"
import { NavLink } from 'react-router';
import { Lock, User, Mail } from "lucide-react"
import { account } from '../../../appWriteConfig';

const SignUp = () => {
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [Error, setError] = useState('');



    const handleSignUp = async () => {

        try {
            await account.create('unique()', email, password, user);
            await account.createEmailPasswordSession(email, password);
            const loggedInUser = await account.get();
            setUser(loggedInUser);
            console.log('User created:');
        } catch (err) {
            console.error('Sign up error:', err);
            setUser(null)
        }


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
                        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center font-nunito">Sign Up</h2>

                        <form className="space-y-4" onSubmit={handleSignUp}>
                            {/* Name Input */}
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                                    {/* User Icon */}
                                    <User size={15} strokeWidth={3} className='w-5 h-5' />
                                </span>
                                <input
                                    type="text"
                                    name="username"
                                    className="w-full py-3 pl-10 pr-2 outline-none box-border border-b-1 border-b-gray-600   placeholder-gray-400 "
                                    placeholder="Your Name"
                                    value={user}
                                    onChange={(e) => setUser(e.target.value)}
                                />
                            </div>

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
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
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

                            {/* Repeat Password Input */}
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                                    {/* Lock Icon */}
                                    <Lock size={15} strokeWidth={3} className='w-5 h-5' />

                                </span>
                                <input
                                    type="password"
                                    className="w-full py-3 pl-10 pr-3 outline-none placeholder-gray-400 border-b-1 border-b-gray-500 "
                                    placeholder="Repeat your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                            {/* Terms and Conditions Checkbox */}
                            <div className="flex items-center">
                                <input
                                    id="terms"
                                    type="checkbox"
                                    className="h-4 w-4  border-gray-300 rounded  mr-2"
                                />
                                <label className="text-sm text-gray-600">
                                    I agree all statements in <a href="#" className="text-blue-500 hover:underline">Terms of service</a>
                                </label>
                            </div>

                            {/* Register Button */}
                            <button
                                type="submit"
                                onClick={() => handleSignUp(email, password, user)}

                                className="w-full py-3 px-4 bg-primary text-white font-semibold rounded-md hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 shadow-md"
                            >
                                Register
                            </button>
                        </form>

                        {/* "Already member" link */}
                        <p className="text-sm text-gray-500 mt-6 text-center">
                            I am already member. {' '}
                            <NavLink to="/sign_in" className="text-blue-500 hover:underline font-medium">
                                Login
                            </NavLink>
                        </p>
                    </div>

                    {/* Right Side: Image */}
                    <div className="w-full relative md:w-1/2 bg-purple-50  p-8 flex items-center justify-center">
                        <div className="h-full md:h-auto">
                            {/* Desk Illustration */}
                            <img
                                src={Image} // Placeholder for the desk illustration
                                alt="Desk illustration"
                                className="w-full h-full object-contain rounded-3xl"
                            />
                            <h2 className="absolute top-2 left-12 text-4xl font-thin italic text-gray-500 mt-12 text-center font-nunito">Empower your learning with</h2>
                            <h2 className="absolute bottom-22 text-4xl right-30  font-bold text-gray-600 mt-12 text-center font-nunito"> EduPath </h2>
                            {/* The original image likely uses a specific illustration, this is a placeholder */}
                            {/* You might need to find or create a similar SVG or image for the actual desk */}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default SignUp;