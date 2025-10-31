import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function DashboardErrorPage() {
    return (
        <div className='flex flex-col gap-2 items-center justify-center h-screen font-nunito'>

            <div className='flex flex-row gap-2 items-center justify-center'>
                <span className='text-6xl font-bold text-span'>404</span>
                <span className='text-6xl font-bold text-primary'>Not Found!!</span>
            </div>
            <h1 className='text-2xl  text-gray-500'>The page you are looking for does not exist.</h1>


            <a href='/dashboard' className='bg-primary text-white px-4 py-2 rounded-md cursor-pointer'>Go Back Home</a>

        </div>
    )
}
export default DashboardErrorPage;
