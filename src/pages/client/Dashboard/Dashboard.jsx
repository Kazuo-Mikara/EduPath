import React, { useState, useEffect, useContext } from "react";
import { SidebarContext } from "../../../utils/SidebarContext";
import Profile from "../../../assets/Testmonial1.png";
import "./Dashboard.css"
import { DashBoardIcons } from './DashBoardIcons.jsx';
import Home from "../Home/Home.jsx";
import Courses from "../../client/Courses/Courses.jsx";
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import NavBar from "../Components/NavBar.jsx";
import { useAuth } from "../../../utils/AuthContext.jsx";
import { useNavigate } from "react-router";
const {
  SearchIcon,
  DashboardIcon,
  AutoStoriesIcon,
  CalendarTodayIcon,
  ChecklistIcon,
  TaskIcon,
  WorkOutlineIcon,
  HomeOutlinedIcon,
  ChatBubbleOutlineOutlinedIcon,
  NotificationsNoneOutlinedIcon,
  SettingsOutlinedIcon,
  LogoutOutlinedIcon,
  ReceiptOutlinedIcon,
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

const Dashboard = () => {
  const { isCollapsed, setIsCollapsed, toggleSidebar } = useContext(SidebarContext) || {
    isCollapsed: false,
    setIsCollapsed: () => { },
    toggleSidebar: () => { }
  };
  const navigate = useNavigate();
  const { user, logoutUser } = useAuth();
  const [activeTab, setActiveTab] = useState('dashboard');
  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Home />;
      case 'courses':
        return <Courses />;
      // case 'tasks':
      //   return <Tasks />;
      // case 'todo':
      //   return <Todo />;
      // case 'projects':
      //   return <Projects />;
      // case 'calendar':
      //   return <Calendar />;
      default:
        return <Home />;
    }
  }
  const handleCollapse = () => {
    toggleSidebar();
  };

  const handleLogout = () => {
    logoutUser();
    navigate('/');
  }

  // Add CSS class to body when sidebar is collapsed
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [setActiveTab]);

  return (
    <>

      <div className="flex h-screen bg-white  ">
        <div className={`sidebar-container transition-all duration-300 ease-in-out  ${isCollapsed ? 'w-16' : 'w-64'} bg-white border-r border-gray-200 flex flex-col my-2 relative`}>
          <div className="p-4 border-b border-gray-100">
            < div className={`flex items-center ${isCollapsed ? 'justify-center' : ''}`
            }>
              <img src={Profile} alt="Profile" className="w-10 h-10 rounded-full mr-3" />
              {
                !isCollapsed && (
                  <div>
                    <h3 className="font-medium text-sm">{user.name}</h3>
                    <p className="text-gray-500 text-xs">{user.email}</p>
                  </div>
                )
              }
            </ div>
            <button
              onClick={handleCollapse}
              className="absolute top-4 right-[-12px] bg-white text-black p-1 rounded-full shadow-lg hover:bg-gray-200 transition-all duration-200 z-10 flex items-center justify-center w-6 h-6"
            >
              {isCollapsed ? <MenuIcon fontSize="small" /> : <MenuOpenIcon fontSize="small" />}
            </button>
          </div >

          <nav className={`flex-1 ${isCollapsed ? 'px-2' : 'p-4'} overflow-hidden`}>
            <a href="#" className={`flex items-center text-gray-700 py-2 ${isCollapsed ? 'px-2 justify-center' : 'px-3'} rounded-lg mb-1 hover:bg-gray-100 transition-all duration-200`}>
              <HomeOutlinedIcon className={`text-gray-500 ${isCollapsed ? '' : 'mr-3'}`} fontSize="small" />
              {!isCollapsed && <span className="text-sm whitespace-nowrap">Home</span>}
            </a>

            <div className="mb-2">
              <a href="#" className={`flex items-center text-gray-700 py-2 ${isCollapsed ? 'px-2 justify-center' : 'px-3'} rounded-lg hover:bg-gray-100 transition-all duration-200`}>
                <ChatBubbleOutlineOutlinedIcon className={`text-gray-500 ${isCollapsed ? '' : 'mr-3'}`} fontSize="small" />
                {!isCollapsed && <span className="text-sm whitespace-nowrap">Messages</span>}
              </a>
              {!isCollapsed && (
                <div className="ml-8 mt-1">
                  <div className="flex items-center justify-between text-xs py-1">
                    <span className="text-gray-600">Unread</span>
                    <span className="bg-gray-200 text-gray-700 rounded-full px-2 py-0.5">3</span>
                  </div>
                  <div className="flex items-center justify-between text-xs py-1">
                    <span className="text-gray-600">Important</span>
                    <span className="bg-gray-200 text-gray-700 rounded-full px-2 py-0.5">4</span>
                  </div>
                  <div className="flex items-center justify-between text-xs py-1">
                    <span className="text-gray-600">Archived</span>
                    <span className="bg-gray-200 text-gray-700 rounded-full px-2 py-0.5">70</span>
                  </div>
                  <div className="flex items-center justify-between text-xs py-1">
                    <span className="text-gray-600">All</span>
                    <span className="bg-gray-200 text-gray-700 rounded-full px-2 py-0.5">77</span>
                  </div>
                </div>
              )}
            </div>

            <a href="#" className={`flex items-center text-gray-700 py-2 ${isCollapsed ? 'px-2 justify-center' : 'px-3'} rounded-lg mb-1 hover:bg-gray-100 transition-all duration-200`}>
              <NotificationsNoneOutlinedIcon className={`text-gray-500 ${isCollapsed ? '' : 'mr-3'}`} fontSize="small" />
              {!isCollapsed && (
                <>
                  <span className="text-sm whitespace-nowrap">Notifications</span>
                  <span className="bg-red-500 text-white text-xs rounded-full px-2 py-0.5 ml-auto">3</span>
                </>
              )}
              {isCollapsed && <span className="absolute right-1 top-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>}
            </a>

            <a href="#" className={`flex items-center text-gray-700 py-2 ${isCollapsed ? 'px-2 justify-center' : 'px-3'} rounded-lg mb-1 hover:bg-gray-100 transition-all duration-200`}>
              <ReceiptOutlinedIcon className={`text-gray-500 ${isCollapsed ? '' : 'mr-3'}`} fontSize="small" />
              {!isCollapsed && (
                <>
                  <span className="text-sm whitespace-nowrap">Invoices</span>
                  <span className="bg-gray-200 text-gray-700 text-xs rounded-full px-2 py-0.5 ml-auto">3</span>
                </>
              )}
            </a>

            {!isCollapsed && (
              <div className="flex items-center py-2 px-3 mb-1">
                <span className="text-sm font-medium">Upload</span>
              </div>
            )}

            {!isCollapsed && (
              <div className="ml-3 mb-4">
                <div className="flex items-center justify-between text-xs py-1">
                  <div className="flex items-center">
                    <span className="text-gray-600">20 videos</span>
                  </div>
                  <span className="text-gray-500 text-xs">3.56 GB</span>
                </div>
                <div className="flex items-center justify-between text-xs py-1">
                  <div className="flex items-center">
                    <span className="text-gray-600">15 docs</span>
                  </div>
                  <span className="bg-red-500 text-white text-xs rounded-full px-2 py-0.5">New</span>
                </div>
              </div>
            )}

            {!isCollapsed ? (
              <div className="bg-gray-900 rounded-xl p-4 mb-4 transition-transform duration-500 ease-in transform">
                <h4 className="text-white text-sm font-medium mb-1">Upgrade to PRO 🔥</h4>
                <p className="text-gray-400 text-xs mb-3 ">Get access to additional features and content.</p>
                <button className="bg-transparent border border-white text-white text-xs rounded-full px-4 py-1.5">Upgrade</button>
              </div>
            ) : ''
            }

            <a href="#" className={`flex items-center text-gray-700 py-2 ${isCollapsed ? 'px-2 justify-center' : 'px-3'} rounded-lg mb-1 hover:bg-gray-100 transition-all duration-200`}>
              <SettingsOutlinedIcon className={`text-gray-500 ${isCollapsed ? '' : 'mr-3'}`} fontSize="small" />
              {!isCollapsed && <span className="text-sm">Settings</span>}
            </a>

            <a onClick={() => handleLogout()} className={`flex items-center cursor-pointer text-gray-700 py-2 ${isCollapsed ? 'px-2 justify-center' : 'px-3'} rounded-lg mb-1 hover:bg-gray-100 transition-all duration-200`}>
              <LogoutOutlinedIcon className={`text-gray-500 ${isCollapsed ? '' : 'mr-3'}`} fontSize="small" />
              {!isCollapsed && <span className="text-sm">Log out</span>}
            </a>
          </nav>
        </div >
        {/* Main Content */}
        < div className={`flex-1 flex flex-col transition-all  duration-300 ease-in-out ${isCollapsed ? 'ml-0' : 'ml-0'}`}>
          {/* Top Navigation */}
          < header className="bg-black border-b  border-gray-200 px-6 py-3" >
            <div className="flex justify-center   items-center">
              <div className=" flex space-x-2 transition-transform duration-200">
                <button onClick={() => setActiveTab('dashboard')} className={`px-4 py-2 rounded-lg flex items-center ${activeTab == 'dashboard' ? 'bg-[#D5E1DF] text-black ' : 'text-white '}`}>
                  <DashboardIcon fontSize="small" className="mr-2" />
                  <span className="text-sm">Dashboard</span>
                </button>
                <button onClick={() => setActiveTab('courses')} className={`px-4 py-2  rounded-lg flex items-center ${activeTab === 'courses' ? 'bg-[#D5E1DF] text-black' : 'text-white'}`}>
                  <AutoStoriesIcon fontSize="small" className="mr-2" />
                  <span className="text-sm">Courses</span>
                </button>
                <button onClick={() => setActiveTab('tasks')} className={`px-4 py-2   rounded-lg flex items-center ${activeTab === 'tasks' ? 'bg-[#D5E1DF] text-black' : 'text-white'}`}>
                  <TaskIcon fontSize="small" className="mr-2" />
                  <span className="text-sm">Tasks</span>
                </button>
                <button onClick={() => setActiveTab('todo')} className={`px-4 py-2  rounded-lg flex items-center ${activeTab === 'todo' ? 'bg-[#D5E1DF] text-black' : 'text-white'}`}>
                  <ChecklistIcon fontSize="small" className="mr-2" />
                  <span className="text-sm">To Do</span>
                </button>
                <button onClick={() => setActiveTab('projects')} className={`px-4 py-2  rounded-lg flex items-center ${activeTab === 'projects' ? 'bg-[#D5E1DF] text-black' : 'text-white'}`}>
                  <WorkOutlineIcon fontSize="small" className="mr-2" />
                  <span className="text-sm">Projects</span>
                </button>
                <button onClick={() => setActiveTab('calendar')} className={`px-4 py-2   rounded-lg flex items-center ${activeTab === 'calendar' ? 'bg-[#D5E1DF] text-black' : ''}`}>
                  <CalendarTodayIcon fontSize="small" className="mr-2" />
                  <span className="text-sm">Calendar</span>
                </button>
              </div>

              <div className="relative">
                <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2">
                  <SearchIcon fontSize="small" className="text-gray-500 mr-2" />
                  <input
                    type="text"
                    placeholder="Search or type a command"
                    className="bg-transparent border-none outline-none text-sm w-64"
                  />
                  <span className="bg-white text-xs text-gray-500 px-1.5 py-0.5 rounded ml-2">⌘F</span>
                </div>
              </div>
            </div>
          </header >

          {/* Main Content Area */}
          < div className="flex-1 flex overflow-hidden" >
            {/* Left Content */}
            <div div className=" flex-1 overflow-y-auto p-6 bg-white " >
              {renderContent()}
            </div>
            {/* Right Sidebar */}
            {activeTab == 'courses' ? '' :
              < div className="md:w-60 border-l transition-all duration-200 ease-in border-gray-200 overflow-y-auto" >
                <div className="p-4">
                  {/* Progress Section */}
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-sm font-medium">Progress</h2>
                      <button className="text-xs text-gray-500 flex items-center">
                        Monthly
                        <KeyboardArrowDownIcon fontSize="small" className="ml-1" />
                      </button>
                    </div>

                    <div className="h-32 flex items-end space-x-2">
                      {[3, 4, 5, 6, 7, 9, 12, 8, 7, 9, 10, 11].map((height, index) => (
                        <div key={index} className="flex-1 flex flex-col items-center">
                          <div
                            className={`w-full rounded-t-sm ${index === 6 ? 'bg-[#56ac9f]' : 'bg-[#636365]'}`}
                            style={{ height: `${height * 8}px` }}
                          ></div>
                          <span className="text-xs text-gray-500 mt-1">{index + 1}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Chat Section */}

                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-sm font-medium">Chat with a Tutor</h2>
                      <div className="flex items-center">
                        <span className="text-xs text-gray-500 mr-2">Live</span>
                        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-3 mb-3">
                      <div className="text-xs text-gray-500 mb-2">May 16, 2023</div>

                      <div className="flex items-start mb-3">
                        <div className="flex-shrink-0 mr-2">
                          <img src={Profile} alt="User" className="w-8 h-8 rounded-full" />
                        </div>
                        <div>
                          <div className="bg-[#56ac9f] text-gray-100 rounded-lg p-2 max-w-xs">
                            <p className="text-sm">Hi, Gordon!</p>
                            <p className="text-sm">I have a question...</p>
                          </div>
                          <div className="text-xs text-gray-500 mt-1">7:05 am</div>
                        </div>
                      </div>

                      <div className="flex items-start mb-3">
                        <div className="flex-shrink-0 mr-2">
                          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Tutor" className="w-8 h-8 rounded-full" />
                        </div>
                        <div>
                          <div className="text-xs text-gray-500 mb-1">Gordon <span className="text-xs text-gray-400">13 min</span></div>
                          <div className="bg-gray-200 rounded-lg p-2 max-w-xs">
                            <p className="text-sm">Hi, Stasa! I'm here to help you</p>
                          </div>
                          <div className="text-xs text-gray-500 mt-1">7:05 am</div>
                        </div>
                      </div>

                      <div className="flex items-start mb-3">
                        <div className="flex-shrink-0 mr-2">
                          <img src={Profile} alt="User" className="w-8 h-8 rounded-full" />
                        </div>
                        <div>
                          <div className="bg-[#56ac9f] text-gray-100 rounded-lg p-2 max-w-xs flex items-center">
                            <PlayCircleFilledWhiteOutlinedIcon className="text-gray-100 mr-2" fontSize="small" />
                            <GraphicEqIcon className="text-gray-100" fontSize="medium" />
                            <GraphicEqIcon className="text-gray-600 mr-2" fontSize="medium" />
                            <div className="flex-1 ">
                              <div className="h-2 bg-gray-400 rounded-full">
                                <div className="h-full w-3/4 bg-gray-500 rounded-full"></div>
                              </div>
                            </div>
                            <span className="text-xs  ml-2">0:16</span>
                          </div>
                          <div className="text-xs text-gray-500 mt-1">7:05 am</div>
                        </div>
                      </div>
                    </div>

                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Type here..."
                        className="w-full bg-gray-100 rounded-full px-4 py-2 pr-12 text-sm border-none outline-none"
                      />
                      <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center">
                        <button className="text-gray-400 hover:text-gray-600 p-1">
                          <EmojiEmotionsOutlinedIcon fontSize="small" />
                        </button>
                        <button className="text-gray-400 hover:text-gray-600 p-1">
                          <SendIcon fontSize="small" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div >
            }
          </div >
        </div >
      </div >
    </>
  )
};

export default Dashboard;
