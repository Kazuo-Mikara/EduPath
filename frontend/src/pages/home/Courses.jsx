import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { APIFetch } from '../../service/API_fetch'
import { FaStar } from 'react-icons/fa';
import sample_image from "../../assets/sample.jpg"
import Pagination from './components/Pagination';
import { NavLink, Outlet } from 'react-router-dom';
import { useAuth } from "../../utils/AuthContext"
const CourseLists = () => {
    const [courses, setCourses] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(12);
    const [Auth, SetAuth] = useState(null);
    const { user } = useAuth();
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

    // formatNumber removed (unused)

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = courses.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    return (
        <div className="w-full mx-auto bg-white shadow-lg rounded-lg ">
            <NavBar />
            <div className={`transition-discrete duration-400 ease-in-out  bg-gray-50 `}>
                <div className="flex flex-col items-start mx-5 mb-5">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome back, {user.name}!!</h1>
                    <p className="text-gray-600 max-w-2xl text-center">
                        You are doing great. Here are courses you can explore.
                    </p>
                </div>

                <div class="mt-8 flex flex-wrap items-center gap-3 border-y border-gray-200 dark:border-gray-700 py-4 px-4 mb-8">
                    <button class="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-gray-100 px-3 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <span class="material-symbols-outlined text-base">category</span>
                        <p class="text-sm font-medium text-gray-800 dark:text-gray-200">Category</p>
                        <span class="material-symbols-outlined text-base">expand_more</span>
                    </button>
                    <button class="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-gray-100 px-3 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <span class="material-symbols-outlined text-base">school</span>
                        <p class="text-sm font-medium text-gray-800 dark:text-gray-200">Institution</p>
                        <span class="material-symbols-outlined text-base">expand_more</span>
                    </button>
                    <button class="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-gray-100 px-3 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <span class="material-symbols-outlined text-base">signal_cellular_alt</span>
                        <p class="text-sm font-medium text-gray-800 dark:text-gray-200">Level</p>
                        <span class="material-symbols-outlined text-base">expand_more</span>
                    </button>
                    <div class="flex-grow"></div>
                    <button class="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-gray-100 px-3 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <span class="material-symbols-outlined text-base">swap_vert</span>
                        <p class="text-sm font-medium text-gray-800 dark:text-gray-200">Sort by: Popularity</p>
                        <span class="material-symbols-outlined text-base">expand_more</span>
                    </button>
                </div>

                <div className="transition-all mx-5 duration-600 ease-in-out grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
                                    <NavLink to={`course_detail/${course._id}`} className="mt-2 bg-black hover:bg-primary hover:text-white text-white py-1 px-3 text-xs rounded-md transition-colors">
                                        View Course
                                    </NavLink>
                                </div>

                                {course.price === 0 && (
                                    <span className="absolute top-3 right-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded z-10">
                                        FREE
                                    </span>
                                )}
                            </div>
                            <div className="flex px-3 py-2 items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                                <span className="rounded-full bg-amber-500/10 text-xs font-semibold text-amber-500">Intermediate</span>
                                {(course.rating === "None" || course.reviewcount === "None") ?
                                    <span className="text-xs text-gray-500"> No reviews yet</span> :
                                    <div class="flex items-center gap-1">
                                        <span className="material-symbols-outlined !text-base text-amber-500" >star</span>
                                        <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{course.rating}</span>
                                        <span className="text-xs font-medium text-gray-700 dark:text-gray-300">({course.reviewcount} reviews)</span>
                                    </div>
                                }
                            </div>
                            <div className="p-4 flex flex-col gap-2">
                                <div className="font-bold text-md text-gray-900">
                                    <h3 className="text-lg font-bold line-clamp-2">{course.course}</h3>
                                </div>
                                <h3 className='text-sm font-normal text-gray-600'>{course.partner}</h3>
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
                {/* Nested route outlet (e.g. /courses/course_detail/:id) will render here */}
            </div >
            <Footer />
        </div>
    );
};

export default CourseLists;