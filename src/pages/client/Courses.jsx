import React, { useState, useEffect } from 'react';
import coursesData from '../../../data/db.json';
import { FaStar } from 'react-icons/fa';
import sample_image from "../../assets/sample.jpg";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load courses from db.json
    setCourses(coursesData.courses);
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

  return (
    <div className="p-6 bg-gray-50">
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-3xl font-bold text-primary mb-2">Available Courses</h1>
        <p className="text-gray-600 max-w-2xl text-center">
          Explore our wide range of courses designed to help you master new skills and advance your career.
        </p>
        
        {isLoading && (
          <div role="status" className="mt-6">
            <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {!isLoading && courses.map((course) => (
          <div key={course.course_id} className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
            <div className="relative">
              <img 
                className="w-full h-48 object-cover" 
                src={sample_image} 
                alt={course.course_title}
                onError={handleImageError}
              />
              {course.price === 0 && (
                <span className="absolute top-3 right-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                  FREE
                </span>
              )}
            </div>
            
            <div className="p-5">
              <div className="flex items-center mb-2">
                <div className="flex items-center text-yellow-400 mr-2">
                  <FaStar />
                  <span className="ml-1 text-gray-700 font-medium">{(course.Rating * 10).toFixed(1)}</span>
                </div>
                <span className="text-sm text-gray-500">({formatNumber(course.num_reviews)} reviews)</span>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">{course.course_title}</h3>
              
              <div className="flex items-center text-sm text-gray-600 mb-3">
                <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded mr-2">{course.level}</span>
                <span>{course.content_duration} hours</span>
              </div>
              
              <div className="flex items-center justify-between mt-4">
                <div className="text-sm text-gray-600">
                  <span>{formatNumber(course.num_lectures)} lectures</span>
                  <span className="mx-2">•</span>
                  <span>{formatNumber(course.num_subscribers)} students</span>
                </div>
                
                <div className="font-bold text-lg text-primary">
                  {course.price === 0 ? 'Free' : `$${course.price}`}
                </div>
              </div>
              
              <button className="w-full mt-4 bg-primary hover:bg-primary-dark text-white py-2 rounded-md transition-colors">
                View Course
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;