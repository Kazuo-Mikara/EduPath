import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer"
import usersData from "../../../data/users.json"
import { useAuth } from "../../utils/AuthContext"
import { NavLink } from 'react-router-dom'
const CourseDetail = () => {
    const [Auth, SetAuth] = useState(null);
    const { user } = useAuth();
    useEffect(() => {
        if (user) {
            SetAuth(user)
            console.log(user.email)
        }
        else {
            SetAuth(user)
        }
    }, [user])
    return (
        <>
            <div class="font-display bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
                <div class="relative flex h-auto min-h-screen w-full flex-col">

                    <header class="sticky top-0 z-50 flex items-center justify-center whitespace-nowrap border-b border-solid border-border-light dark:border-border-dark bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
                        <nav class="flex items-center justify-between w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
                            <div class="flex items-center gap-8">
                                <div class="flex items-center gap-3 text-primary">
                                    <div class="size-6">
                                        <svg fill="currentColor" viewbox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_6_543)">
                                                <path d="M42.1739 20.1739L27.8261 5.82609C29.1366 7.13663 28.3989 10.1876 26.2002 13.7654C24.8538 15.9564 22.9595 18.3449 20.6522 20.6522C18.3449 22.9595 15.9564 24.8538 13.7654 26.2002C10.1876 28.3989 7.13663 29.1366 5.82609 27.8261L20.1739 42.1739C21.4845 43.4845 24.5355 42.7467 28.1133 40.548C30.3042 39.2016 32.6927 37.3073 35 35C37.3073 32.6927 39.2016 30.3042 40.548 28.1133C42.7467 24.5355 43.4845 21.4845 42.1739 20.1739Z"></path>
                                                <path clip-rule="evenodd" d="M7.24189 26.4066C7.31369 26.4411 7.64204 26.5637 8.52504 26.3738C9.59462 26.1438 11.0343 25.5311 12.7183 24.4963C14.7583 23.2426 17.0256 21.4503 19.238 19.238C21.4503 17.0256 23.2426 14.7583 24.4963 12.7183C25.5311 11.0343 26.1438 9.59463 26.3738 8.52504C26.5637 7.64204 26.4411 7.31369 26.4066 7.24189C26.345 7.21246 26.143 7.14535 25.6664 7.1918C24.9745 7.25925 23.9954 7.5498 22.7699 8.14278C20.3369 9.32007 17.3369 11.4915 14.4142 14.4142C11.4915 17.3369 9.32007 20.3369 8.14278 22.7699C7.5498 23.9954 7.25925 24.9745 7.1918 25.6664C7.14534 26.143 7.21246 26.345 7.24189 26.4066ZM29.9001 10.7285C29.4519 12.0322 28.7617 13.4172 27.9042 14.8126C26.465 17.1544 24.4686 19.6641 22.0664 22.0664C19.6641 24.4686 17.1544 26.465 14.8126 27.9042C13.4172 28.7617 12.0322 29.4519 10.7285 29.9001L21.5754 40.747C21.6001 40.7606 21.8995 40.931 22.8729 40.7217C23.9424 40.4916 25.3821 39.879 27.0661 38.8441C29.1062 37.5904 31.3734 35.7982 33.5858 33.5858C35.7982 31.3734 37.5904 29.1062 38.8441 27.0661C39.879 25.3821 40.4916 23.9425 40.7216 22.8729C40.931 21.8995 40.7606 21.6001 40.747 21.5754L29.9001 10.7285ZM29.2403 4.41187L43.5881 18.7597C44.9757 20.1473 44.9743 22.1235 44.6322 23.7139C44.2714 25.3919 43.4158 27.2666 42.252 29.1604C40.8128 31.5022 38.8165 34.012 36.4142 36.4142C34.012 38.8165 31.5022 40.8128 29.1604 42.252C27.2666 43.4158 25.3919 44.2714 23.7139 44.6322C22.1235 44.9743 20.1473 44.9757 18.7597 43.5881L4.41187 29.2403C3.29027 28.1187 3.08209 26.5973 3.21067 25.2783C3.34099 23.9415 3.8369 22.4852 4.54214 21.0277C5.96129 18.0948 8.43335 14.7382 11.5858 11.5858C14.7382 8.43335 18.0948 5.9613 21.0277 4.54214C22.4852 3.8369 23.9415 3.34099 25.2783 3.21067C26.5973 3.08209 28.1187 3.29028 29.2403 4.41187Z"></path>
                                            </g>
                                            <defs>
                                                <clippath id="clip0_6_543">
                                                    <rect fill="white" height="48" width="48"></rect>
                                                </clippath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <h2 class="text-primary text-xl font-bold leading-tight">LearnPlatform</h2>
                                </div>
                                <div class="hidden md:flex items-center gap-8">
                                    <a class="text-text-light dark:text-text-dark text-sm font-medium leading-normal" href="#">Courses</a>
                                    <a class="text-text-light dark:text-text-dark text-sm font-medium leading-normal" href="#">Programs</a>
                                    <a class="text-text-light dark:text-text-dark text-sm font-medium leading-normal" href="#">For Business</a>
                                </div>
                            </div>
                            <div class="hidden md:flex flex-1 justify-end items-center gap-4">
                                <label class="flex flex-col min-w-40 !h-10 max-w-64">
                                    <div class="flex w-full flex-1 items-stretch rounded h-full">
                                        <div class="text-slate-500 flex border-none bg-background-light dark:bg-slate-800 border-border-light dark:border-border-dark border items-center justify-center pl-3 rounded-l">
                                            <span class="material-symbols-outlined">search</span>
                                        </div>
                                        <input class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded text-text-light dark:text-text-dark focus:outline-0 focus:ring-0 border-none bg-background-light dark:bg-slate-800 focus:border-none h-full placeholder:text-slate-500 px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal" placeholder="Search" value="" />
                                    </div>
                                </label>
                                <div class="flex gap-2">
                                    <button class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal">
                                        <span class="truncate">Sign Up</span>
                                    </button>
                                    <button class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-background-light dark:bg-slate-800 text-text-light dark:text-text-dark border border-border-light dark:border-border-dark text-sm font-bold leading-normal">
                                        <span class="truncate">Log In</span>
                                    </button>
                                </div>
                            </div>
                            <div class="md:hidden">
                                <button class="text-text-light dark:text-text-dark">
                                    <span class="material-symbols-outlined text-3xl">menu</span>
                                </button>
                            </div>
                        </nav>
                    </header>

                    <main class="flex w-full flex-col items-center py-8 sm:py-12 lg:py-16">
                        <div class="flex w-full max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:px-8">

                            <div class="flex flex-col gap-4">
                                <h1 class="text-[#0A2540] text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight max-w-4xl">Post Graduate Certificate in Deep Learning for Computer Vision &amp; Extended Reality (XR)</h1>
                                <p class="text-slate-600 dark:text-slate-400 text-base md:text-lg font-normal leading-normal">Partner: IIT Guwahati | Certificate Type: University Certificate</p>
                                <div class="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                                    <span class="material-symbols-outlined">schedule</span>
                                    <p class="text-base font-medium">6 - 12 Months</p>
                                </div>
                            </div>

                            <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 xl:gap-12">

                                <div class="lg:col-span-2 flex flex-col gap-8">

                                    <div class="border-b border-border-light dark:border-border-dark">
                                        <div class="flex gap-6 sm:gap-8">
                                            <a class="flex flex-col items-center justify-center border-b-[3px] border-primary text-primary pb-3 pt-1" href="#">
                                                <p class="text-sm sm:text-base font-bold">About</p>
                                            </a>
                                            <a class="flex flex-col items-center justify-center border-b-[3px] hover:text-primary border-transparent text-slate-500 dark:text-slate-400 pb-3 pt-1" href="#">
                                                <p class="text-sm sm:text-base font-bold">Curriculum</p>
                                            </a>
                                            <a class="flex flex-col items-center justify-center border-b-[3px] hover:text-primary border-transparent text-slate-500 dark:text-slate-400 pb-3 pt-1" href="#">
                                                <p class="text-sm sm:text-base font-bold">Instructors</p>
                                            </a>
                                            <a class="flex flex-col items-center justify-center border-b-[3px] hover:text-primary border-transparent text-slate-500 dark:text-slate-400 pb-3 pt-1" href="#">
                                                <p class="text-sm sm:text-base font-bold">FAQs</p>
                                            </a>
                                        </div>
                                    </div>

                                    <div class="flex flex-col gap-6">
                                        <h2 class="text-2xl font-bold text-text-light dark:text-text-dark">About this Course</h2>
                                        <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
                                            This comprehensive program is designed to equip you with the advanced skills needed to excel in the rapidly growing fields of Deep Learning, Computer Vision, and Extended Reality (XR). Through a blend of theoretical foundations and hands-on projects, you will learn to build and deploy cutting-edge AI models for real-world applications. The curriculum is crafted by leading academics from IIT Guwahati and industry experts, ensuring you gain both rigorous academic knowledge and practical industry insights.
                                        </p>
                                        <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
                                            Whether you're a software developer looking to specialize, a data scientist aiming to expand your skillset, or a tech enthusiast eager to enter the AI domain, this certificate will provide you with a robust pathway to career advancement. Join us to become a pioneer in creating immersive experiences and intelligent visual systems.
                                        </p>
                                    </div>

                                    <div class="flex flex-col gap-4">
                                        <h3 class="text-2xl font-bold text-text-light dark:text-text-dark">Curriculum</h3>
                                        <div class="flex flex-col gap-3">

                                            <details class="group rounded-lg bg-white dark:bg-slate-800 border border-border-light dark:border-border-dark p-4">
                                                <summary class="flex cursor-pointer items-center justify-between font-semibold text-text-light dark:text-text-dark">
                                                    Module 1: Foundations of Deep Learning
                                                    <span class="material-symbols-outlined transition-transform duration-300 group-open:rotate-180">expand_more</span>
                                                </summary>
                                                <p class="mt-3 text-slate-600 dark:text-slate-400">
                                                    Introduction to neural networks, backpropagation, and optimization algorithms. Hands-on with TensorFlow and PyTorch.
                                                </p>
                                            </details>

                                            <details class="group rounded-lg bg-white dark:bg-slate-800 border border-border-light dark:border-border-dark p-4">
                                                <summary class="flex cursor-pointer items-center justify-between font-semibold text-text-light dark:text-text-dark">
                                                    Module 2: Advanced Computer Vision
                                                    <span class="material-symbols-outlined transition-transform duration-300 group-open:rotate-180">expand_more</span>
                                                </summary>
                                                <p class="mt-3 text-slate-600 dark:text-slate-400">
                                                    Deep dive into Convolutional Neural Networks (CNNs), object detection, image segmentation, and facial recognition models.
                                                </p>
                                            </details>

                                            <details class="group rounded-lg bg-white dark:bg-slate-800 border border-border-light dark:border-border-dark p-4">
                                                <summary class="flex cursor-pointer items-center justify-between font-semibold text-text-light dark:text-text-dark">
                                                    Module 3: Introduction to Extended Reality (XR)
                                                    <span class="material-symbols-outlined transition-transform duration-300 group-open:rotate-180">expand_more</span>
                                                </summary>
                                                <p class="mt-3 text-slate-600 dark:text-slate-400">
                                                    Understanding the fundamentals of VR, AR, and MR. Developing basic applications using Unity or Unreal Engine.
                                                </p>
                                            </details>
                                        </div>
                                    </div>
                                </div>

                                <div class="lg:sticky top-28 h-fit flex flex-col gap-6">
                                    <div class="rounded-xl border border-border-light dark:border-border-dark bg-white dark:bg-slate-800 p-6 flex flex-col gap-5 shadow-sm">
                                        <button class="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal transition-colors hover:bg-primary/90">
                                            <span>Apply Now</span>
                                        </button>
                                        <button class="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-accent text-[#00C49A] text-base font-bold leading-normal transition-colors hover:bg-accent/90">
                                            <span>Download Program Brochure</span>
                                        </button>
                                        <div class="border-t border-border-light dark:border-border-dark pt-5 flex flex-col gap-4">
                                            <h4 class="font-bold text-lg text-text-light dark:text-text-dark">Course Highlights</h4>
                                            <ul class="flex flex-col gap-3">
                                                <li class="flex items-start gap-3">
                                                    <span class="material-symbols-outlined text-accent mt-0.5">check_circle</span>
                                                    <span class="text-slate-600 dark:text-slate-400">Live interactive sessions with IIT Guwahati faculty</span>
                                                </li>
                                                <li class="flex items-start gap-3">
                                                    <span class="material-symbols-outlined text-accent mt-0.5">check_circle</span>
                                                    <span class="text-slate-600 dark:text-slate-400">Hands-on projects with industry-relevant datasets</span>
                                                </li>
                                                <li class="flex items-start gap-3">
                                                    <span class="material-symbols-outlined text-accent mt-0.5">check_circle</span>
                                                    <span class="text-slate-600 dark:text-slate-400">Dedicated career support and placement assistance</span>
                                                </li>
                                                <li class="flex items-start gap-3">
                                                    <span class="material-symbols-outlined text-accent mt-0.5">check_circle</span>
                                                    <span class="text-slate-600 dark:text-slate-400">Earn a prestigious certificate from a top-tier university</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="border-t border-border-light dark:border-border-dark pt-5 flex flex-col gap-3">
                                            <h4 class="font-bold text-lg text-text-light dark:text-text-dark">Next Cohort Starts</h4>
                                            <p class="text-slate-600 dark:text-slate-400">August 25, 2024</p>
                                            <a class="text-sm font-semibold text-primary hover:underline" href="#">Contact Advisor</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>

        </>
    )
}

export default CourseDetail