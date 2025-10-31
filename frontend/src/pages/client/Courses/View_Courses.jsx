import { React, useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import { CourseFetch } from "../../../service/Course_fetch";
import sample_image from '../../../assets/sample.jpg';

export default function ViewCourses() {
    const { id } = useParams();
    const [Course, setCourse] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Load single course by id
        async function fetchCourse() {
            setIsLoading(true);
            try {
                const data = await CourseFetch(id);
                setCourse(data);
            } catch (error) {
                console.error('Failed to fetch course:', error);
                setCourse(null);
            } finally {
                setIsLoading(false);
            }
        }

        if (id) fetchCourse();
    }, [id]);

    const t = (v) => (v === undefined || v === null || v === 'None' ? '—' : v);

    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="mb-4">
                <NavLink to="/dashboard/courses" className="text-sm text-blue-600 hover:underline">← Back to courses</NavLink>
            </div>

            {isLoading && (
                <div className="text-center py-12">
                    <div className="inline-block w-10 h-10 border-4 border-gray-200 rounded-full animate-spin border-t-blue-600" />
                    <p className="mt-3 text-gray-600">Loading course...</p>
                </div>
            )}

            {!isLoading && !Course && (
                <div className="p-6 bg-yellow-50 border border-yellow-100 rounded">Course not found.</div>
            )}

            {!isLoading && Course && (
                <div className="bg-white rounded-lg shadow p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-1 flex items-start">
                        <img
                            src={Course.image || Course.thumbnail || sample_image}
                            alt={Course.course_title || Course.course || 'Course image'}
                            className="w-full h-56 object-cover rounded"
                            onError={(e) => { e.target.onerror = null; e.target.src = sample_image; }}
                        />
                    </div>

                    <div className="md:col-span-2">
                        <h1 className="text-2xl font-bold text-gray-800">{t(Course.course_title) || t(Course.course)}</h1>
                        <p className="text-lg text-gray-500 mt-1"><span className="font-medium text-primary">{(Course.course)}</span></p>
                        <p className="text-sm text-gray-500 mt-1">Offered by <span className="font-medium text-gray-700">{t(Course.partner)}</span></p>

                        <div className="flex items-center gap-4 mt-4">
                            <div className="text-sm text-gray-600">Duration: <span className="font-medium text-gray-800">{t(Course.duration)}</span></div>
                            <div className="text-sm text-gray-600">Level: <span className="font-medium text-gray-800">{t(Course.level)}</span></div>
                            <div className="text-sm text-gray-600">Rating: <span className="font-medium text-gray-800">{t(Course.rating)} {Course.reviewcount ? `(${Course.reviewcount})` : ''}</span></div>
                        </div>

                        <div className="mt-4 text-gray-700">
                            <h3 className="font-semibold mb-2">About this course</h3>
                            <p className="text-sm leading-relaxed">
                                {Course.description || Course.summary || Course.overview || 'No description available for this course.'}
                            </p>
                        </div>

                        <div className="mt-6 flex flex-wrap gap-3">
                            <div className="flex items-baseline gap-2">
                                {Course.price === 0 || Course.price === '0' ? (
                                    <span className="text-xl font-bold text-green-600">Free</span>
                                ) : (
                                    <span className="text-xl font-bold text-gray-900">${t(Course.price)}</span>
                                )}
                                {Course.certificatetype && <span className="ml-2 px-2 py-0.5 text-xs bg-gray-100 rounded">{Course.certificatetype}</span>}
                            </div>

                            <button className="ml-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Enroll</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}