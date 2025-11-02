import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer"
import usersData from "../../../data/users.json"
import { useAuth } from "../../utils/AuthContext"
import { NavLink } from 'react-router-dom'
const Home = () => {
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
            <div className="z-0 bg-gray-50">
                <div className="w-full mx-auto bg-white shadow-lg rounded-lg ">
                    <NavBar />

                    <main className="p-6 md:p-12">
                        <section className="text-center py-12 md:py-20">
                            <div class="relative">
                                <p class="text-primary font-semibold">START TO SUCCESS</p>
                                <h2 class="text-4xl md:text-6xl font-bold text-gray-800 mt-4 leading-tight">
                                    Learn <span class="text-primary">Anything</span><br />at Your <span class="text-span">Pace</span>
                                </h2>
                                <p class="text-gray-600 mt-6 max-w-2xl mx-auto font-poppins">

                                    ZenEd offers a flexible and affordable way to learn new skills. With over 200,000 courses, you can learn anything from coding to cooking.
                                </p>
                                <div class="mt-8">
                                    <button class="bg-primary text-white px-8 py-3 rounded-lg text-lg font-semibold hover:opacity-80 cursor-pointer">Let's Start</button>
                                </div>
                                <img alt="Abstract shapes and icons representing learning" class="absolute -top-10 left-10 w-20 opacity-50 hidden md:block" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDG_Uw6KV9Vqb_Zq2Inxd1b0RJ_R-a6uQ4Dk-WCgublxdpaz81mNbUSOBK3R2IghfIyLpytTmbplqMvOtaNFg3XrFUW1s-xgiblT9mtsnmeG0aUFN2tFp_S0GT_nLhFsA5ASp-SUBq9x5K9h_CNWnOO9t2urZnknep_3VgFuSkgWqkSMNaN5B8vtDltPq0HWpp7wZJ9x601rlamn2uzd4w6XhdCg8ROBYncXJ5jcpuiNmE9iZhhcNrSe2F7Ixab01gaNinjPMlQcBw" />
                                <img alt="Abstract shapes and icons representing learning" class="absolute top-0 right-10 w-24 opacity-50 hidden md:block" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5edBSjkgxAHJopsDd1dJ2VyKxACMVdkoI3YCyzKYAC0KgYi96FYy1eW4Zv6DYWQFKPDjY4NB8cCyuCToHVCyNQM7Ebjx8McrbFKZVHiPcrU2XZkB0ZpoDYfdmSfKzwOnRdXLfWE-1gHz3kVMZOscgoJWCpAq9yEz0Y9SjouEEp6vTrAJ_rQR2QChfx6dqO8fgwwJ44vzXkDJ_QPHvRq9L2YuVC2Uzo6xZcpZSvskevQ4pqBDpFA8j0sshdkv0-GSdPjFrIG7kTIc" />
                                <img alt="Abstract shapes and icons representing learning" class="absolute bottom-0 left-20 w-16 opacity-50 hidden md:block" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQHBQmvE_WyDeiVsc2VrufgvPyMwIYWcui41WJRUveU-jcuGBQrB1GA_QLtGap-x8K4WXLpY3Q60TEQO_K7jGjErlCG3SlBazdByxBmgOE--YlVwqqn4LX5Wwunte6mSKGV645c98VRRmfCC4eeUF2DdkiOd2IlcgToFT7PNL9BJ8SVgXe0EShfG50-K6hNh2VK0EnCXziKYEiWMCjBUTE9JemQNOUQRrnzcUyvBIdGze6IqST8fLFJdOHGwQtnNJXmdZV4IuGzQ4" />
                                <img alt="Abstract shapes and icons representing learning" class="absolute bottom-10 right-20 w-12 opacity-50 hidden md:block" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAx4HVpQfWSmU6FfHtvkL3xyFYK9exBbWWfKYrNDe_JGUQJSNKRBRnXHXK9FiylKCZ9YUj-wbuXz4L1AutADIFKA-kD_QwjqeEzrP7Br2h2pgBU-24NqIA41dqTTpdddErY2FvP_5uzadxbDmlRllNnAleZopnguq6EhYOJ0CC0LBYetjHAsBuS4IiBGlXmvB7M_phCwFPEZbzN7MrtbkBZGoLTMXP-CbBgVk1x3FytGuSI-a3S-7R77-uI5Sx9aNzPdVB5xbMj5_4" />
                            </div>
                        </section>
                        <section class="md:py-2 py-12 lg:py-14">
                            <p class="text-center text-primary mb-6 font-poppins">Our Students Work in Companies such as</p>
                            <div class="flex justify-center items-center space-x-8 md:space-x-16 grayscale opacity-70">
                                <img alt="Repyd company logo" class="h-6" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxJQiwRdMo2NdjchECfw4ez1PbIgpGGs71ajhPOAOhuZqGw0nsO6lOvSR0Y8mzOjtzJx4tekxZCdd8ahPzjihKg3QcI0kHczI6Hvl_b6AGapLNRq949GR1dqgNqv1v-DPMty13zJSaUGoZ-VVPfPNmsdCvo5nzrZ14wozVFRYO0XuQ8oZZ9mYWFa_kaVi6FWpnyThQzx09_-BEwwhfvXqldL5KYeScBzWKMUww77t_LvUkvaUxvc7EX3eb49HdE_bEu6Qs1ZnEg7w" />
                                <img alt="Lucid company logo" class="h-6" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGF-iQJPFLLGBz8LaiikgoSIgXHIk9PANd3jjWzRDXBFFueYLHhiYqR2lYxNsMPnr1WK3Amll8X3CrD-vgozlYbhUy5-My7tlWN3TCgToUeEAjMKRQg9Zcrw5DC01pDL63a1HNOXRsfg9B6bw34TYE85sCFmokPnUqgIMNFmJm5w4TnVabyp8QrK6kpRSLSY6n3YHEBdHUU40y0uDo0WuHt9QA_gH2y-bK1TlY7rE0V10gEcmOLD5Q1XqRwTcMei88NJBmgX-_N1M" />
                                <img alt="Company logo" class="h-6" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBV5oP1yJtjtsRx3ahbEQY25p3ql1p25LzcNAKfft03SaesgbRwgZIukIwjhHjE8iEoDcGi58NWtAMDvBWuJRM3I20kI4fZtuKONOLscwivhBwU_ZjP9YejKJCp0L5VLng1fZ_jSBvXS-WbT6G8eB6TfvIzFIfpPAIeCHCN4t9hSwaFioafEmoBzEnpUmidUeSZ8IvovlMkUJeWvBYth-pwpnngLtMQsd5seSR2-pjGWeLE83nlogPGN4g3wXCH_nm0T8A6YJ3byNU" />
                                <img alt="Broz company logo" class="h-6" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeL4FXbRTYOQt3dn7WzuwhttiXn3gFs2mMIDc55fvsv3YGHxAkahfoNjb7yTeHq7gU6jXPicyt8kxniwDGop8ESdpEUqZvol3Uex0CDBpYpje3-CqndgnWewgiNCaO7aFoxUyJZkGmap9nLnZUvVowv2bmFQd_mlKgFvf7bqV5mr7qtLCCLF_nmcYNlu9jm9Eo12147yRMgZU0jf2q8uyH9V2f2imhRYPXnSZkABCpcTz02JxEpGx2T_KVOY3Mnsl79GTMU6a_7ZU" />
                                <img alt="Enper company logo" class="h-6" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUSyvTZJSbU6sne90zc-NBEyB75sXf4Ra_Zt5kVRHaXaHF_ADcZJbaGIP6dFqdL3gW9v41Gz6NMq2KktcINBdljHiw-y8j3FP9cDbNpkMdbev_XGtXqkiUL6U93pi9Yn8VLqFTF8MCCojmO_fO7hdYTH4wTgzgcKaPL6vcs3Wvsvd1Q51BD17EQBt0jf-QzNdLC8gJENdB0GQ4FUfhM8cIwM9qNPwHhWBeRWGA9kYpIKW2MGr0oEEotMMa3Ct1GkuheWIZsvU5XW0" />
                            </div>
                        </section>
                        <section class="py-12 md:py-20 bg-gray-50 -mx-6 md:-mx-12 px-6 md:px-12">
                            <h3 class="text-3xl font-bold text-center font-nunito text-primary">Browse Our Top Courses</h3>
                            <p class="text-center text-text  font-poppins mt-2">Explore our most popular courses for skill development.</p>
                            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                                <div class="bg-white rounded-lg shadow-md overflow-hidden">
                                    <img alt="Course thumbnail for UI/UX Design" class="w-full h-40 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBx86-g-sIaAwdR3Y9QWDnc640qVHw2isaGlxxdQmhWR7BoLvay5sDN8wjYPxT9dLA8OdrT6b2BDItNBWISizu2nKdnB27hiDqDWOowkrOr9tObKT4mR0YRFpot-OcSwvYXpSm3yHOWEFOoKXKK4AMIv_16sgpatlt3Yyg_wMUzlOyKtYyuSqbz23dp3-2sB__8T1vIDQpdu4IJR6x3txje3qAgkkiX52uJNhzPEfz7zJ0FllnLMRP5WVYPGrt-4yajsrnfjYtsDGo" />
                                    <div class="p-4">
                                        <h4 class="font-bold text-lg text-text">UI/UX Design for Beginners</h4>
                                        <p class="text-gray-600 text-sm mt-2 font-poppins">Master the fundamentals of user interface and experience design.</p>
                                    </div>
                                </div>
                                <div class="bg-white rounded-lg shadow-md overflow-hidden">
                                    <img alt="Course thumbnail for Web Development" class="w-full h-40 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBl6Bww_Dc7Uiax9kl_au0Wym9IyHwi8LFZam81rmskwBB2jovFhU7cfpfDJVyljG1j0APAn1loZzFQVa_G_XZUYHVzWVesWbXIum7FvKo1KXUwKYSKQ407cUceToUvB8HafWZ53tB7v2lvGJdX0FtATdFHvqhQdzTfYXT8PAPrYcSEecuUTXMPIE7YaI1Z9Uk-lGEEYqPbsnDfFZ8z_CF7mA2giDU4zp7H2fXP1xxdK6S8zpRsbQqBKcHpgffZ7ceNaXUfjbmf6oI" />
                                    <div class="p-4">
                                        <h4 class="font-bold text-lg text-text">Full-Stack Web Development</h4>
                                        <p class="text-gray-600 text-sm mt-2 font-poppins">Build stunning websites from scratch with HTML, CSS, &amp; React.</p>
                                    </div>
                                </div>
                                <div class="bg-white rounded-lg shadow-md overflow-hidden">
                                    <img alt="Course thumbnail for Craft Websites" class="w-full h-40 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYqmS6Wko_JoDvJRqnIj-ok5vgaEA5gkgJoE1ENc3Cgclr8ATyq-nN7PeQv5-S-uweMzXExRq9On3UrmfNqoFdfXpdjbkU1qCs9Kbi3PO_f-7aHptXSv5Y-IO4LbnMpNYkxe38yHemGiHKRhzQroQd9ZhbW7a0ND6fE2LG6coA2kBXBvkPeR-2E1PINGnWoL20nhvRKJb-YxJBDThWYy5udc4RIbsXr00FnjVBtI3Fts1g25mIrpGAxOsvRrFx7SeWVolPVOdloro" />
                                    <div class="p-4">
                                        <h4 class="font-bold text-lg text-text">My Choice : Craft Websites</h4>
                                        <p class="text-gray-600 text-sm mt-2 font-poppins">An advanced course on creating bespoke web experiences.</p>
                                    </div>
                                </div>
                                <div class="bg-white rounded-lg shadow-md overflow-hidden">
                                    <img alt="Course thumbnail for Web Design for Beginners" class="w-full h-40 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzwFWxKa5L0-Lg37buKv-DFRKk6rj2LIt0tvFFPIqJXxW2ZPe2KJzd8kjwNCQZDbaltRj0CwKyGAYjwOooMENE0OKYfI0tYvag71nHtzenbZS9RT7jmpHLcQEM-2RY733I_NyzGA42OOFRAzK3ROd8wlDhjnG-pSu1nbz43pN7TfiEap3xLjQglnp30tMhYoNfB2MFvM8IFN5RfzNcjJjIMMp48YdZbJ5M6J1dkvOf4hCVbea4UulHdG-hXm7tOoevuP_jCFxsh4E" />
                                    <div class="p-4">
                                        <h4 class="font-bold text-lg text-gray-800">Web Design for Beginners</h4>
                                        <p class="text-gray-600 text-sm mt-2">Get started with the essentials of modern web design.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="text-center mt-12">
                                <button class="bg-white border border-primary font-nunito text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">View All Courses</button>

                            </div>
                        </section>
                        <section class="py-12 md:py-20">
                            <h3 class="text-3xl font-bold text-center text-gray-800">Our <span class="text-primary">Mission</span> Behind This Platform</h3>
                            <div class="mt-12 grid md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <img alt="Diverse group of people collaborating" class="rounded-lg shadow-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnjkUMVtIDC-7-M1ukrRdJvqzcwSsn5jSjBNE29Ti952Sp2iOyz-4OvQ67FVoiUmCiaMymD2j-KBA-DBnnl92vrpx5dACoijhyvw-qprP2aiOZQ9kDQFHvLIGtk7_9Sy4axqdXomphoBSXmrpaxtTNj2kghtkuPQzMlL-rsTGuvFXJOKlQoaUJrOZyjR6xoiVE2B4-3SnuHZNI6Air4TAg3brciamLsf3Nws6OuATVX_B2oA4ADf1VKDjvwnQd57ZLXlJv8KljC3w" />
                                </div>
                                <div>
                                    <h4 class="text-2xl font-bold text-gray-800">Make New Material Instantly Available and Searchable</h4>
                                    <p class="text-gray-600 mt-4">We believe in breaking down barriers to education. Our platform provides easy access to a vast library of courses, empowering individuals to learn and grow.</p>
                                    <button class="mt-6 text-primary font-semibold hover:underline">View All Courses </button>
                                </div>
                            </div>
                            <div class="mt-16 grid md:grid-cols-2 gap-12 items-center">
                                <div class="md:order-2">
                                    <img alt="Laptop screen showing a learning application" class="rounded-lg shadow-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3ZbbJeC0yCrCfAdu9iY_asOSXTpUTXebRGj4zfWhCWgxYvQZU1mWgwSrgmrSPuySC6G5oKdakeRKUtkjH7MOeCnat4_88mdQaL9zeK6KwvP5w8BsEJ_hqOc41waQzro8X6nVwC9LLinZfLLP-hgZGCvop29cevKKIc24ZAaupE0HrLJBPrux05zIoSutleCiudLCE0yQp6xMcHF33oeoZtqVPpOgdsUXMPW6UUZEG4At7hVdkWVbO6w1cPYRBt4h5BtECRVqkWcg" />
                                </div>
                                <div class="md:order-1">
                                    <h4 class="text-2xl font-bold text-gray-800">One Ultimate Study App for Every Class, Every Test</h4>
                                    <p class="text-gray-600 mt-4">ZenEd is designed to be your all-in-one learning companion. From interactive lessons to progress tracking, everything you need is right at your fingertips.</p>
                                    <button class=" mt-6 text-primary font-semibold hover:underline">See Details </button>
                                </div>
                            </div>
                            <div class="mt-16 grid md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <img alt="Team working in a modern office" class="rounded-lg shadow-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSZ0IcPR4YJm1Hbg8yWuIRMSUSa0oqOdQuxitCoWN8uEKQkwX36yDzGAqDoCvziL5oBwqwY6kC6JpU_nKR-zdqERxs1d6_NjxbSG4lVyJL0_tCzxiKMunJsS9NHn4BOeT9R8btVatJabrfmkeWEAtebdIMfHRYzt0w97_jmz7jJEnt1V33HM2YbYBHA8kzW-_0SjnRo9K_WftjtK6GM3WbwJPwsOEWQXGmeEIu-4n7r2thr2b-BwSVKLT_Bervs-si266E_n5v3Vc" />
                                </div>
                                <div>
                                    <h4 class="text-2xl font-bold text-gray-800">Engaging, Dynamic, and Interactive Learning Experiences</h4>
                                    <p class="text-gray-600 mt-4">We create immersive learning environments that go beyond traditional methods. Our courses are designed to be fun, engaging, and effective.</p>
                                    <button class="mt-6 text-primary font-semibold hover:underline">View Our Features</button>

                                </div>
                            </div>
                        </section>
                        <section class="bg-primary text-white mx-6 md:-mx-12 px-6 md:px-12 py-12 rounded-lg">
                            <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                                <div>
                                    <p class="text-4xl font-bold">80K+</p>
                                    <p class="text-indigo-200">Active Students</p>
                                </div>
                                <div>
                                    <p class="text-4xl font-bold">45K+</p>
                                    <p class="text-indigo-200">Total Courses</p>
                                </div>
                                <div>
                                    <p class="text-4xl font-bold">2.5M+</p>
                                    <p class="text-indigo-200">Online Students</p>
                                </div>
                                <div>
                                    <p class="text-4xl font-bold">20K+</p>
                                    <p class="text-indigo-200">5 Star Reviews</p>
                                </div>
                            </div>
                        </section>
                        <section class="py-12 md:py-20">
                            <h3 class="text-3xl font-bold text-center text-primary">Our Happy Students Say About Us</h3>
                            <div class="mt-12 relative max-w-2xl mx-auto">
                                <span class="material-symbols-outlined text-span text-6xl absolute -top-4 -left-8"><FaQuoteLeft /></span>

                                <div class="bg-amber-50 p-8 rounded-lg shadow-md ">
                                    <img alt="Portrait of Colvin Agams" class="w-20 h-20 rounded-full mx-auto -mt-16 border-4 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWDS04CBPuvk6zweR2BkXaUBK3lbFbJmRz50S4g6Tartu3RB3rxrMtZFxjfPwxTHDI_WnTVqkGFEy-T5jBJ6eJUqp3cRyLUKZOWudmfAim9yBBIPKl3F3oN7CV_nTDjdSeNPFL0wDH6RXMt8uZHJNOcldN0YcoE5l_2WsjNSDoE574F5q_8NyaDDBF8QiHk8gZPwyQF-Z-g6kEhQGVchFpLnh2xu90RW_6M0kY68-fhQolpiJuHDGtinbkFWwODMC051IKrGwqBys" />
                                    <p class="text-center text-gray-600 mt-4">"An amazing platform! The flexibility to learn at my own pace is invaluable. The courses are high-quality and the instructors are experts in their fields."</p>
                                    <p class="text-center font-bold text-gray-800 mt-4">Colvin Agams</p>
                                    <p class="text-center text-gray-500 text-sm">Student, Web Development Course</p>
                                </div>
                                <span class="material-symbols-outlined text-span text-6xl absolute -bottom-4 -right-8"><FaQuoteRight /></span>
                            </div>
                        </section>
                        <section class="py-12 md:py-20 bg-gray-50 -mx-6 md:-mx-12 px-6 md:px-12">
                            <div class="grid md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h3 class="text-3xl font-bold text-gray-800">Straight-Forward Pricing</h3>
                                    <p class="text-gray-600 mt-4">Our pricing plans include everything you need to begin learning and achieve your goals.</p>
                                    <div class="mt-8 space-y-6">
                                        <div class="bg-white p-6 rounded-lg shadow">
                                            <h4 class="font-bold text-xl text-gray-800">One Time Course Fee</h4>
                                            <p class="text-gray-600 mt-2">Pay per course, access forever.</p>
                                            <p class="text-3xl font-bold text-span mt-4">$24 <span class="text-lg font-normal text-gray-500">/course</span></p>
                                            <button class="mt-6 w-full bg-primary text-white py-2 rounded-lg hover:opacity-90">Join For Free</button>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <img alt="Person studying with a laptop" class="rounded-lg shadow-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBugpmD9nwtiJrgDqxQH5mPao4FVg4k_2Fo2_uyH25ZH-8lEenHKT6KG06SxU86ct2lDN5RLCktoVRLRfs2TRCb8zzetZdIaJJPO_1ib2uYixTMgkkrZZHegh988MbJdSqECKymJ3WtOyrVs-MvKDOMOGDy7wYzdbIrgZdQYL7Rq9t9v3uYVhsrJzrkSHJEsuQrJP1OtRWsSTvkSRGehiGsCILQ3FG4iUxvOR9gwaZLxegr7YV910ew-xe_6Rz-bjHTEJel_Lh3V2c" />
                                </div>
                            </div>
                        </section>
                        <section class="py-12 md:py-20 text-center">
                            <h3 class="text-3xl font-bold text-gray-800">Start Learning Today and Make <span class="text-primary">Real Income</span></h3>
                            <p class="text-gray-600 mt-4 max-w-2xl mx-auto">Join thousands of learners who are advancing their careers and enriching their lives with ZenEd.</p>
                            <div class="mt-8">
                                <button class="bg-primary text-white px-8 py-3 rounded-lg text-lg font-semibold hover:opacity-90">Get Started</button>
                            </div>
                        </section>
                        <section class="py-12 md:py-20 bg-indigo-50 -mx-6 md:-mx-12 px-6 md:px-12">
                            <h3 class="text-3xl font-bold text-center text-text">Education Which Promotes <span class="text-span">Skill</span></h3>
                            <div class="flex justify-center items-center gap-8 mt-12">
                                <div class="text-center">
                                    <p class="text-5xl font-bold text-primary">45K+</p>
                                    <p class="text-gray-600">Students</p>
                                </div>
                                <div class="relative w-64 h-64">
                                    <img alt="Portrait of an instructor" class="w-16 h-16 rounded-full absolute top-0 left-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuABEAsILjsApn_0WxC3TG2kxHt12or3jyX6hpcqq8plYKvbR2TKpTBBt4Os8WQAlA3e_BWaReB9a5x-g1Fy6NSTklGWA8oDj-SSodh3s0X4mypyNcWP9VpHOL9kxXguEHHHFnR66fzfVnzUSudr5bcr1jjwjmYcd4jReyMwlJF6GCO8EHjOee_cU3kb1_j6ihCHrarEQXTZ41CE2oYkY2xjhbjkztR6R96x2aa_QcTIeF-5k3s6lBOJDwvrfQFoBrZpOTTfSdKBHUA" />
                                    <img alt="Portrait of an instructor" class="w-16 h-16 rounded-full absolute top-8 right-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2wg9NUXlgGOPLDbxii20yw1AkPLDjlhEaVjMYhKIe7rJLPQjv6HZE81eIJJb5uk0ADkAzqO9d-Vn2MyLTU51bTYYnl_g-2pnf22ZBmdck_aclaKDaqdQOOwjyjXhE0cmdzcYgawyoxeeZMwCmsOMkETudPYJ2FfYeUVo6hlvOc5Ku8PFpkXKCXTOqzY0SqLwpYXQt9m3PU2GK4DKpbA2qT8BRSb5AOok4xCbM8Fq5VKQRZvs7ChUd4_yQPuh3XUEY5dBrUcGjAy8" />
                                    <img alt="Portrait of an instructor" class="w-20 h-20 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVltNVx42wzmZIiIjAhclAFFtAX9lkwC6hrG3eFcm30NYNUZaVu852swqkmgyXyxhNQ7DbYD2NNedfikhjY5uk73QszuhRMyRd9mRA3LYsi72okHiE8ko_xxxvXvoADXatSX276XXUqfZ0vBRv_LR9bTrK7mAtj9fryOcKWlCa0_MUrhmvuxjznlNOqSe7WoSsMLo-NYtn78uRTjhNiVJbnywc1t8R4yq_2ql643wXiozOFLqvNmsFGwMLPg3h8DiZ8nYuNTO0uDA" />
                                    <img alt="Portrait of an instructor" class="w-14 h-14 rounded-full absolute bottom-8 left-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDO1WkW8dJzxaIxZHv8N_9oMAlD00jOnfHOgskKcQb4CrT6A8ib9TOGckqAHMYTVloTgyGBuvFEhdkCOCGy_iRfQbzWKtc2RQJFbAS4flN7lvc9lSfDdt7UWTNDGM3lzv4bc_UrnMOB7129U9BJOFbpUVlCVsTI_2lQdK4oWheqIe6Fy5KSHD5AZdnazzmRQuGZyBNAYWoeRrWxsCN_X3QxfnBL2PtAYLAuub3h5EyirPAD0FuJRjYw0i5Q0TsQqVIQAs4njw2Urxo" />
                                    <img alt="Portrait of an instructor" class="w-16 h-16 rounded-full absolute bottom-0 right-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcDY4yrqdRhPqj5OC_dqpPuMUJJXwjq2RSZpv4kU0-FNAVoXCGjfao1xpcuF5fdOZtW70xbLAxeU7CqSADDoH5IYYhBVDO6vzqVemz8yyBq_PLqyvhdhpt_Zeu4X_3Q0_z2PpMskQ6STxnRqlu07owafZGK8qwfSvqviBWTcPrfENUXkFV5PZp3mVSNIIRZyEMuH_byEBrY4Sr79KVngk1nztXBAgZDBeAU9fDixBzwhbhXvlLUyr-bykMAQDURfb7PFpOfxgDutw" />
                                </div>
                                <div class="text-center">
                                    <p class="text-5xl font-bold text-span">2.5M</p>
                                    <p class="text-gray-600">Courses</p>
                                </div>
                            </div>
                            <div class="text-center font-bold text-5xl text-gray-800 mt-4">Instructor</div>
                            <div class="text-center mt-12">
                                <button class="bg-white border border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50">View All Instructors</button>
                            </div>
                        </section>
                        <section class="py-12 md:py-20">
                            <h3 class="text-3xl font-bold text-center text-gray-800">Frequently Asked <span class="text-primary">Questions</span></h3>
                            <p class="text-center text-gray-600 mt-2">Find answers to common questions about our platform and courses.</p>
                            <div class="max-w-3xl mx-auto mt-12 space-y-4">
                                <div class="border rounded-lg">
                                    <button class="w-full flex justify-between items-center p-4 font-semibold text-gray-700">
                                        <span>How do I get started with ZenEd?</span>
                                        <span class="material-symbols-outlined"><MdExpandMore /></span>
                                    </button>
                                </div>
                                <div class="border rounded-lg">
                                    <button class="w-full flex justify-between items-center p-4 font-semibold text-gray-700">
                                        <span>Can I share my course with others?</span>
                                        <span class="material-symbols-outlined"><MdExpandMore /></span>
                                    </button>
                                </div>
                                <div class="border rounded-lg bg-indigo-50">
                                    <details class="flex flex-col rounded-lg bg-[#f0f2f5] px-4 py-2 group">
                                        <summary class="flex cursor-pointer items-center justify-between gap-6 py-2">
                                            <p class="text-[#111418] text-sm font-medium leading-normal">How does ZenEd help me learn concepts efficiently and effectively?</p>
                                            <span class=""><MdExpandMore /></span>
                                        </summary>
                                        <p class="text-[#60758a] text-sm font-normal leading-normal pb-2">
                                            ZenEd uses a combination of interactive video lessons, quizzes, and hands-on projects to ensure you grasp concepts thoroughly. Our platform adapts to your learning style, providing a personalized experience.
                                        </p>
                                    </details>
                                </div>
                                <div class="border rounded-lg">
                                    <button class="w-full flex justify-between items-center p-4 font-semibold text-gray-700">
                                        <span>What is your refund policy?</span>
                                        <span class="material-symbols-outlined"><MdExpandMore /></span>
                                    </button>
                                </div>
                                <div class="border rounded-lg">
                                    <button class="w-full flex justify-between items-center p-4 font-semibold text-gray-700">
                                        <span>What is "ZenEd Behind?" mean?</span>
                                        <span class="material-symbols-outlined"><MdExpandMore /></span>
                                    </button>
                                </div>
                            </div>
                        </section>
                    </main>
                    <Footer />
                </div>

            </div>

        </>
    )
}

export default Home