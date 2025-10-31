import React, { useState, useEffect } from 'react';
import NavBar from '../home/components/NavBar';
import Footer from '../home/components/Footer';
import sample_image from "../../assets/sample.jpg"
import StarRating from '../home/components/StarRating';
import { FaStar } from 'react-icons/fa'
const Courses = () => {
    const [courses, setCourses] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/courses')
                .then(res => res.json())
                .then(data => {
                    setCourses(data);
                    setIsLoading(false);
                })
                .catch(error => {
                    console.log(error);
                })
        }, [1000]);
    }
        , []);
    // A function to handle the image error
    const handleImageError = (e) => {
        // This prevents an infinite loop if the default image also fails to load
        e.target.onerror = null;
        e.target.src = sample_image;
    };

    const formatNumber = (num) => {
        return new Intl.NumberFormat('en-US', {
            notation: 'compact', // 'compact' is the key property
            maximumFractionDigits: 1
        }).format(num);
    };
    return (
        <>
            <NavBar />
            <div className='px-10 py-2 mx-auto max-w-7xl'>


                <div className='flex flex-col items-center'>
                    <h1 className=' text-4xl font-nunito font-bold mb-5 text-primary'>Ready to advance your career?</h1>
                    {isLoading && <div role="status text-center ">
                        <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg>
                        <span class="sr-only">Loading...</span>
                    </div>}
                </div>
                <div className='grid grid-cols-1 md:grid-cols-4  gap-5'>

                    {!isLoading && (
                        courses.map((course, index) => {
                            return (


                                <div class="w-full flex flex-col max-w-md py-2 mb-5  bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                                    <div>

                                        <img class="p-2 w-full h-full rounded-t-lg" src={sample_image} alt="product image" />
                                    </div>

                                    <div class="px-5 pb-5">
                                        <div className="flex flex-row gap-3 mb-5">
                                            <span className='flex flex-row items-center  text-text rounded-3xl px-3'> <FaStar className='text-highlight' />{parseFloat(course.Rating * 10).toFixed(1)}</span>
                                            <span className=' bg-primary text-white text-sm rounded-xl p-1 px-2'>{course.level}</span>
                                        </div>

                                        <span class="text-lg font-semibold tracking-wide text-text dark:text-white">{course.course_title}</span>

                                        <div class="flex flex-row-reverse items-center mt-2.5 mb-5 justify-between">
                                            <span> <span className='font-bold'>{course.content_duration} </span> total hour</span>
                                            <span>{formatNumber(course.num_lectures)}  lectures</span>
                                            {/* <span>{formatNumber(course.num_subscribers)} total learners</span> */}

                                        </div>
                                    </div>
                                </div>

                            )
                        }
                        )
                    )}
                </div>

            </div >

            <Footer />
        </>
    )
}

export default Courses