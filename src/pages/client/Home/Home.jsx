import React from 'react'
import Profile from "../../../assets/Testmonial1.png";
import { DashBoardIcons } from '../Dashboard/DashBoardIcons.jsx';
const {
    HomeOutlinedIcon,
    ChatBubbleOutlineOutlinedIcon,
    NotificationsNoneOutlinedIcon,
    SettingsOutlinedIcon,
    LogoutOutlinedIcon,
    ReceiptOutlinedIcon,
    TaskIcon,
    KeyboardArrowDownIcon,
    BarChartIcon,
    BookmarkBorderIcon,
    SendIcon,
    EmojiEmotionsOutlinedIcon,
    MoreVertIcon,
    StarIcon,
    ArrowForwardIcon,
    MenuOpenIcon,
    MenuIcon,
} = DashBoardIcons;
const Home = () => {
    return (
        < div className=" flex-1 overflow-y-auto p-6 bg-white" >
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-2xl font-semibold">Your courses</h1>
                    <div className="flex items-center mt-1">
                        <span className="text-sm font-medium text-gray-500">15</span>
                        <span className="text-sm text-gray-500 ml-1">courses</span>
                        <span className="mx-2 text-gray-300">•</span>
                        <span className="text-sm text-gray-500 bg-gray-100 px-2 py-0.5 rounded">in progress</span>
                    </div>
                </div>
                <button className="flex items-center text-gray-700 hover:text-gray-900">
                    <BarChartIcon className="mr-1" fontSize="small" />
                    <span className="text-sm">Statistics</span>
                </button>
            </div>

            {/* Course Card */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-6">
                <div className="relative">
                    <img
                        src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                        alt="Course"
                        className="w-full h-64 object-cover"
                    />
                    <button className="absolute top-4 right-4 bg-white p-1.5 rounded-full">
                        <BookmarkBorderIcon fontSize="small" />
                    </button>
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
                        <h3 className="text-xl font-semibold">Introduction Into Motion Design</h3>
                    </div>
                </div>

                <div className="p-4">
                    <div className="flex justify-between items-center mb-3">
                        <div className="flex items-center">
                            <span className="text-sm text-gray-700">by Gordon Patron</span>
                            <span className="ml-2 text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">premium</span>
                        </div>
                        <button className="text-gray-600 hover:text-gray-900">
                            <span className="text-sm underline">View description</span>
                        </button>
                    </div>

                    <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center">
                            <TaskIcon fontSize="small" className="text-gray-500 mr-1" />
                            <span className="text-sm text-gray-600">10</span>
                        </div>
                        <div className="flex items-center">
                            <img src={Profile} alt="US Flag" className="w-5 h-5 rounded-full mr-2" />
                        </div>
                    </div>

                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <span className="text-sm text-gray-600 mr-1">112 Watching</span>
                        </div>
                        <div className="flex space-x-2">
                            <button className="bg-gray-900 text-white text-xs px-3 py-1.5 rounded-lg">Leave a comment</button>
                            <button className="bg-gray-200 text-gray-700 text-xs px-3 py-1.5 rounded-lg">Go to task</button>
                            <button className="bg-white border border-gray-200 text-gray-700 text-xs px-3 py-1.5 rounded-lg">Set as completed</button>
                        </div>
                    </div>
                </div>

            </div>

            {/* Recent Courses */}
            <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">Recent courses</h2>
                    <button className="text-gray-500">
                        <MoreVertIcon fontSize="small" />
                    </button>
                </div>

                <div className="grid grid-cols-3 gap-4">
                    {/* Course Card 1 */}
                    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80"
                                alt="UX/UI Design"
                                className="w-full h-28 object-cover"
                            />
                            <div className="absolute bottom-2 right-2 bg-black text-white text-xs px-2 py-0.5 rounded-sm opacity-80">
                                NEW
                            </div>
                        </div>
                        <div className="p-3">
                            <h3 className="text-sm font-medium mb-1">Introduction to UX/UI design</h3>
                            <p className="text-xs text-gray-500 mb-2">by Andry Rezak</p>
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">Beginning</span>
                                <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded">100% completed</span>
                            </div>
                            <div className="text-xs text-gray-500">Tasks 0/5</div>
                        </div>
                    </div>

                    {/* Course Card 2 */}
                    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
                                alt="Logo Design"
                                className="w-full h-28 object-cover"
                            />
                        </div>
                        <div className="p-3">
                            <h3 className="text-sm font-medium mb-1">Creativity in Logo design</h3>
                            <p className="text-xs text-gray-500 mb-2">by PRO IT School</p>
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">Intermediate</span>
                                <span className="text-xs bg-orange-100 text-orange-600 px-2 py-0.5 rounded">50% done</span>
                            </div>
                            <div className="text-xs text-gray-500">Tasks 3/6</div>
                        </div>
                    </div>

                    {/* Course Card 3 */}
                    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80"
                                alt="Typography"
                                className="w-full h-28 object-cover"
                            />
                            <div className="absolute bottom-2 right-2 bg-purple-600 text-white text-xs px-2 py-0.5 rounded-sm">
                                HOT
                            </div>
                        </div>
                        <div className="p-3">
                            <h3 className="text-sm font-medium mb-1">Typography and Font Pairs</h3>
                            <p className="text-xs text-gray-500 mb-2">by QCity</p>
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">Advanced</span>
                                <span className="text-xs bg-purple-100 text-purple-600 px-2 py-0.5 rounded">premium</span>
                            </div>
                            <div className="text-xs text-gray-500">Tasks 3/9</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Popular Courses */}
            <div>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">Popular courses</h2>
                    <button className="flex items-center text-gray-500 text-sm">
                        <span>View all</span>
                        <KeyboardArrowDownIcon fontSize="small" className="ml-1" />
                    </button>
                </div>

                <div className="space-y-3">
                    {/* Popular Course 1 */}
                    <div className="bg-[#D5E1DF] rounded-lg p-4">
                        <div className="flex justify-between">
                            <div className="flex-1">
                                <h3 className="text-sm font-medium">Master in Computer and Information Technology</h3>
                                <p className="text-xs text-gray-600 mt-1">by PRO IT School</p>
                                <div className="flex items-center mt-2">
                                    <div className="flex">
                                        <StarIcon className="text-yellow-500" fontSize="small" />
                                        <StarIcon className="text-yellow-500" fontSize="small" />
                                        <StarIcon className="text-yellow-500" fontSize="small" />
                                        <StarIcon className="text-yellow-500" fontSize="small" />
                                        <StarIcon className="text-yellow-500" fontSize="small" />
                                    </div>
                                    <span className="text-xs text-gray-500 ml-1">(4.9)</span>
                                </div>
                                <div className="mt-2 flex items-center flex-wrap">
                                    <div className="flex items-center mr-4">
                                        <span className="text-xs text-gray-600">Duration:</span>
                                        <span className="bg-white px-2 py-1 rounded-xl text-[10px] font-medium ml-1">56h</span>
                                    </div>
                                    <span className="text-[12px] bg-yellow-300 text-black px-2 py-1 rounded mr-2">Expert</span>
                                    <button className="bg-black px-2 py-2 rounded-2xl text-sm text-white flex items-center justify-center">
                                        <h1>Explore</h1>
                                        <ArrowForwardIcon fontSize="small" className="ml-1" style={{ fontSize: '14px' }} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Popular Course 2 */}
                    <div className="bg-[#D5E1DF] rounded-lg p-4">
                        <div className="flex justify-between">
                            <div className="flex-1">
                                <h3 className="text-sm font-medium">IBM Security Analytics</h3>
                                <p className="text-xs text-gray-600 mt-1">by IBM</p>
                                <div className="flex items-center mt-2">
                                    <div className="flex">
                                        <StarIcon className="text-yellow-500" fontSize="small" />
                                        <StarIcon className="text-yellow-500" fontSize="small" />
                                        <StarIcon className="text-yellow-500" fontSize="small" />
                                        <StarIcon className="text-yellow-500" fontSize="small" />
                                        <StarIcon className="text-gray-300" fontSize="small" />
                                    </div>
                                    <span className="text-xs text-gray-500 ml-1">(4.1)</span>
                                </div>
                                <div className="mt-2 flex items-center flex-wrap">
                                    <div className="flex items-center mr-4">
                                        <span className=" text-xs text-gray-600">Duration:</span>
                                        <span className="bg-white px-2 py-1 rounded-xl text-[10px] font-medium ml-1">60h</span>
                                    </div>
                                    <button className="bg-black px-2 py-2 rounded-2xl text-sm text-white flex items-center justify-center">
                                        <h1>Explore</h1>
                                        <ArrowForwardIcon fontSize="small" className="ml-1" style={{ fontSize: '14px' }} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Home