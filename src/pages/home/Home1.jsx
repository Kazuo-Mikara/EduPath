import React from "react";
import NavBar from "../../components/NavBar.jsx";
import { FiUser, FiUsers, FiBarChart } from "react-icons/fi";
import Progress from "../../assets/Progress.png";
import Collab from "../../assets/Collab.png";
import Expert from "../../assets/Expert.png";
import Testimonial1 from "../../assets/Testmonial1.png";
import Testimonial2 from "../../assets/Testmonial2.png";
import Testimonial3 from "../../assets/Testmonial3.png";
import Footer from "../../components/Footer.jsx"
import { SlLike, SlDislike } from "react-icons/sl";

import Hero from "../../assets/Hero.png";
// Returns an array representing filled and empty stars
function getStarRating(rating, maxStars = 5) {
  const stars = [];
  for (let i = 1; i <= maxStars; i++) {
    if (i <= rating) {
      stars.push('★');  // Filled star
    } else {
      stars.push('☆');  // Empty star
    }
  }
  return stars;
}

const Home = () => {

  return (
    <>
      <NavBar />
      <div className="px-[150px] mt-5">
        <div
          style={{
            backgroundImage: `url(${Hero})`,
            backgroundSize: "100% 80%",
            backgroundRepeat: "no-repeat",
          }}
          className="w-[80%] h-[70vh] mx-auto"
        >
          <div className="w-full h-[60vh] flex flex-col gap-2 items-center justify-center">
            <h1 className="text-[#fff] text-5xl font-bold font-poppins items-center justify-center">
              Unlock your Potential With Edu Path
            </h1>
            <span className="text-[#fff] text-lg font-poppins items-center justify-center">
              Embark on a transformative learning journey with our comprehensive
              platform. Access a vast library of courses,
            </span>
            <span className="text-[#fff] text-lg font-poppins items-center justify-center">
              {" "}
              connect with expert instructors, and achieve your academic and
              professional goals.
            </span>

            <div className="flex flex-row justify-between gap-5 ">
              <button className="text-[#fff] bg-button font-bold py-3 px-5 rounded-xl cursor-pointer">
                Explore Courses
              </button>
              <button className="bg-[#fff] text-button font-bold py-3 px-5 rounded-xl cursor-pointer">
                Become Instructor
              </button>
            </div>
          </div>
          <div>
            <h1 className="text-2xl text-primary font-bold font-poppins items-center justify-center">
              Why Choose EduPath?
            </h1>

            <h1 className="text-xl mt-5 font-bold font-poppins items-center justify-center">
              Key Features
            </h1>
            <p className="text-lg text-text">
              EduPath offers a comprehensive suite of tools and resources to
              enhance your learning experience.
            </p>
          </div>

          <div className="flex flex-row gap-5 mt-6 px-5">
            <div className="flex flex-col gap-1 border-1  border-border rounded-xl px-4 py-2">
              <i>
                <img src={Expert} className="text-3xl text-text mb-4" />
              </i>
              <h1 className=" text-lg font-bold font-poppins items-center justify-center">
                Expert Instructors
              </h1>
              <p className="text-sm text-text">
                Learn from experienced professionals and academics who are
                passionate about teaching.
              </p>
            </div>
            <div className="flex flex-col gap-1 border-1 border-border rounded-xl px-4 py-2">
              <i>
                <img src={Collab} className="text-3xl text-text mb-4" />
              </i>
              <h1 className="text-lg font-bold font-poppins items-center justify-center">
                Collaborative Learning
              </h1>
              <p className="text-sm text-text">
                Engage with peers, participate in discussions, and build a
                supportive learning community.
              </p>
            </div>
            <div className="flex flex-col gap-1 border-1 border-border rounded-xl px-4 py-2">
              <i>
                <img src={Progress} className="text-3xl text-text mb-4" />
              </i>
              <h1 className="text-lg font-bold font-poppins items-center justify-center">
                Progress Tracking
              </h1>
              <p className="text-sm text-text">
                Monitor your progress, track your achievements, and stay
                motivated throughout your learning journey.
              </p>
            </div>
          </div>

          {/* Testimonial Section */}
          <div className="flex flex-col gap-5 px-6 py-4 ">
            <h1 className="text-2xl text-primary font-bold font-poppins items-center justify-center ">
              What Our Users Say
            </h1>
            {/* Testimonial Reviews */}
            <div className="flex flex-col px-2 py-4 gap-4">
              <div className="flex flex-row">
                <img src={Testimonial1} alt="" className="w-[5%] h-[10%]" />
                <div className="flex flex-col px-2">
                  <h1 className="text-sm font-bold">Sabrina Carpenter</h1>
                  <h1 className="text-sm">22-04-2025</h1>
                </div>
              </div>
              <span className="flex flex-row">
                {getStarRating(5).map((star, index) => (
                  <span key={index}>{star}</span>
                ))}
              </span>
              <div className="flex flex-row gap-2 w-[850px] h-[10px]">
                <p>EduPath has revolutionized my learning experience. The courses are well-structured, the instructors are knowledgeable, and the platform is user-friendly. I highly recommend it!</p>

              </div>
            </div>
            <div className="flex flex-col px-2 py-4 mt-5 gap-4">
              <div className="flex flex-row">
                <img src={Testimonial2} alt="" className="w-[5%] h-[10%]" />
                <div className="flex flex-col px-2">
                  <h1 className="text-sm font-bold">Shaun Mandes</h1>
                  <h1 className="text-sm">22-11-2025</h1>
                </div>
              </div>
              <span className="flex flex-row">
                {getStarRating(4).map((star, index) => (
                  <span key={index}>{star}</span>
                ))}
              </span>
              <div className="flex flex-row gap-4 w-[850px] h-[10px]">
                <p>I've taken several courses on EduPath, and I'm impressed with the quality of the content and the support from the instructors. It's a great platform for professional development.</p>

              </div>
            </div>
            <div className="flex flex-col px-2 py-4 mt-5 gap-4">
              <div className="flex flex-row">
                <img src={Testimonial3} alt="" className="w-[5%] h-[10%]" />
                <div className="flex flex-col px-2">
                  <h1 className="text-sm font-bold">Madison Beer</h1>
                  <h1 className="text-sm">02-05-2025</h1>
                </div>
              </div>
              <span className="flex flex-row">
                {getStarRating(3).map((star, index) => (
                  <span key={index}>{star}</span>
                ))}
              </span>
              <div className="flex flex-row gap-4 w-[850px] h-[10px]">
                <p>EduPath's collaborative learning environment has been invaluable. I've connected with peers from around the world and learned so much from their experiences. The progress tracking feature keeps me motivated and on track.</p>

              </div>
            </div>
          </div>

          <div className="mt-20">

            <Footer />
          </div>
        </div>

      </div>

    </>
  );
};

export default Home;
