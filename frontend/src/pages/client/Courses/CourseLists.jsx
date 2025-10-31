import React, { useState, useEffect, useContext } from 'react';
import coursesData from '../../../../data/db.json';
import { APIFetch } from '../../../service/API_fetch';
import { FaStar } from 'react-icons/fa';
import sample_image from "../../../assets/sample.jpg";
import { SidebarContext } from '../../../utils/SidebarContext';
import Pagination from '../Components/Pagination';
import { NavLink } from 'react-router';
const CourseLists = () => {
    const [courses, setCourses] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { isCollapsed } = useContext(SidebarContext) || { isCollapsed: false };
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(12);
    useEffect(() => {
        // Load courses from db.json
        async function fetchCourses() {
            try {
                const data = await APIFetch();
                setCourses(data);
            }
            catch (error) {
                console.log(error);
            }
        }
        // setCourses(coursesData.courses);
        fetchCourses();
        setIsLoading(false);
    }, []);

    // Handle image errors
    const handleImageError = (e) => {
        e.target.onerror = null;
        e.target.src = sample_image;
    };

    // Format numbers for display (e.g., 1000 -> 1K)
    const formatNumber = (num) => {
        return new Intl.NumberFormat('en-US', {
            notation: 'compact',
            maximumFractionDigits: 1
        }).format(num);
    };

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = courses.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    return (
        <div className={`transition-discrete duration-400 ease-in-out p-2 bg-gray-50 ${isCollapsed ? '' : ''}`}>
            <div className="flex flex-col items-center mb-8">
                <h1 className="text-3xl font-bold text-primary mb-2">Available Courses</h1>
                <p className="text-gray-600 max-w-2xl text-center">
                    Explore our wide range of courses designed to help you master new skills and advance your career.
                </p>

                {isLoading && (
                    <div role="status" className="mt-6">
                        <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg>
                        <span className="sr-only">Loading...</span>
                    </div>
                )}
            </div>

            <div className="transition-all duration-600 ease-in-out grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {!isLoading && currentPosts.map((course) => (
                    <div key={course._id} className="relative bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
                        <div className="relative group">
                            <img
                                className="w-full h-48 object-cover"
                                src={sample_image}
                                alt={course.course_title}
                                onError={handleImageError}
                            />

                            {/* Hover overlay with additional information */}
                            <div className="absolute inset-0  bg-opacity-40 flex flex-col justify-center items-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-brightness-50">
                                <span className={`text-xs px-2 py-0.5 rounded mb-2 ${course.level === 'Expert Level' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}`}>
                                    {course.level}
                                </span>

                                <span style={{ 'outlineColor': 'black' }} className="text-white text-xs mb-2 font-semibold ">{course.duration} </span>
                                <div className="text-white text-xs mb-2">
                                    {(course.rating === "None" || course.reviewcount === "None") ?
                                        // CONDITION IS TRUE: Hide rating/review, only show certificate type
                                        ""
                                        :
                                        // CONDITION IS FALSE: Show full rating/review section
                                        <div className="flex justify-center items-center w-fit mb-2">
                                            <div className="flex justify-center items-center text-yellow-400 gap-1">
                                                <FaStar />
                                                <span className="ml-1 text-xs text-white font-medium">{course.rating}</span>
                                                <span className="text-xs text-white">({course.reviewcount} reviews)</span>
                                            </div>

                                        </div>

                                    }
                                </div>
                                <NavLink to={`view_course/${course._id}`} className="mt-2 bg-black hover:bg-primary hover:text-white text-white py-1 px-3 text-xs rounded-md transition-colors">
                                    View Course
                                </NavLink>
                            </div>

                            {course.price === 0 && (
                                <span className="absolute top-3 right-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded z-10">
                                    FREE
                                </span>
                            )}
                        </div>

                        <div className="p-4 flex flex-col gap-2">
                            <h1 className="text-xs text-gray-500 font-light ">{course.certificatetype} </h1>
                            <h3 className='text-sm font-semibold text-gray-500'>{course.partner}</h3>
                            <div className="font-bold text-md text-primary">
                                <h3 className="text-sm font-semibold mb-2 line-clamp-2">{course.course}</h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination component */}
            {
                !isLoading && courses.length > 0 && (
                    <Pagination
                        postsPerPage={postsPerPage}
                        totalPosts={courses.length}
                        paginate={paginate}
                        currentPage={currentPage}
                    />
                )
            }
        </div >
    );
};

export default CourseLists;