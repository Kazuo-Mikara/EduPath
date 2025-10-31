import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function HomeErrorPage() {
  return (
    <div className='flex flex-col gap-2 items-center justify-center h-screen font-nunito'>
      <DotLottieReact
        src='https://lottie.host/e4e2fe35-d517-4501-9276-61cdc947aaad/IEFlxEayZB.lottie'
        autoplay
        loop
        style={{ width: '200px', height: '200px' }}
      />
      <div className='flex flex-row gap-2 items-center justify-center'>
        <span className='text-6xl font-bold text-span'>404</span>
        <span className='text-6xl font-bold text-primary'>Not Found!!</span>
      </div>
      <h1 className='text-2xl  text-gray-500'>The page you are looking for does not exist.</h1>


      <a href='/' className='bg-primary text-white px-4 py-2 rounded-md cursor-pointer'>Go Back Home</a>

    </div>
  )
}
export default HomeErrorPage;
