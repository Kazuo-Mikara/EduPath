import { React, useState } from 'react'
import { DashBoardIcons } from '../Dashboard/DashboardIcons';
import { NavLink } from 'react-router';
const {

  SearchIcon,
  DashboardIcon,
  AutoStoriesIcon,
  CalendarTodayIcon,
  ChecklistIcon,
  TaskIcon,
  WorkOutlineIcon,

} = DashBoardIcons;
const NavBar = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  return (
    < header className="bg-black border-b border-gray-200 py-3 px-6" >
      <div className="flex justify-between items-center">
        <div className="flex space-x-1">
          <button onClick={() => setActiveTab('dashboard')} className={`px-4 py-2 rounded-lg flex items-center ${activeTab === 'dashboard' ? 'bg-[#D5E1DF] text-black' : 'text-white'}`}>
            <DashboardIcon fontSize="small" className="mr-2" />
            <span className="text-sm">Dashboard</span>
          </button>
          <button onClick={() => setActiveTab('courses')} className={`px-4 py- rounded-lg flex items-center ${activeTab === 'courses' ? 'bg-[#D5E1DF] text-black' : ''}`}>
            <AutoStoriesIcon fontSize="small" className="mr-2" />
            <span className="text-sm">Courses</span>
          </button>
          <button onClick={() => setActiveTab('tasks')} className={`px-4 py-2  text-white rounded-lg flex items-center ${activeTab === 'tasks' ? 'bg-[#D5E1DF] text-black' : ''}`}>
            <TaskIcon fontSize="small" className="mr-2" />
            <span className="text-sm">Tasks</span>
          </button>
          <button onClick={() => setActiveTab('todo')} className={`px-4 py-2 text-white rounded-lg flex items-center ${activeTab === 'todo' ? 'bg-[#D5E1DF] text-black' : ''}`}>
            <ChecklistIcon fontSize="small" className="mr-2" />
            <span className="text-sm">To Do</span>
          </button>
          <button onClick={() => setActiveTab('projects')} className={`px-4 py-2  text-white rounded-lg flex items-center ${activeTab === 'projects' ? 'bg-[#D5E1DF] text-black' : ''}`}>
            <WorkOutlineIcon fontSize="small" className="mr-2" />
            <span className="text-sm">Projects</span>
          </button>
          <button onClick={() => setActiveTab('calendar')} className={`px-4 py-2  text-white rounded-lg flex items-center ${activeTab === 'calendar' ? 'bg-[#D5E1DF] text-black' : ''}`}>
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
  )
}

export default NavBar
