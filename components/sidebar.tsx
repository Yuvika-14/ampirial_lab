import Link from "next/link"

import { Home, Users, Briefcase, Mail, Settings, LogOut, Layers } from 'lucide-react';

export function Sidebar() {
  return (
    <div className="w-74 bg-white h-full shadow-lg">
      <div className="p-6">
        <h1 className="text-2xl font-bold">Recruiter Dashboard</h1>
      </div>
          {/* Main Menu */}
          <nav className="mt-6">
          <h2 className="px-6 text-sm font-semibold text-gray-500">Main Menu</h2>
          <div className="m-2 border-t border-black-300 my-2"></div>
          <Link href="/dashboard" className="flex items-center px-6 py-3 text-indigo-500  m-2 hover:border-2 border-dashed border-indigo  p-4 rounded-lg hover:bg-[#EDE9FE] ">
            <Home className="mr-2" size={20} />
            Overview
          </Link>
          <Link href="/dashboard/applicants" className="flex items-center px-6 py-3 text-indigo-500  m-2 hover:border-2 border-dashed border-indigo  p-4 rounded-lg hover:bg-[#EDE9FE] ">
            <Users className="mr-2" size={20} />
            Applicants
          </Link>
        
          <Link href="/dashboard/offers" className="flex items-center px-6 py-3 text-indigo-500  m-2 hover:border-2 border-dashed border-indigo  p-4 rounded-lg hover:bg-[#EDE9FE]  ">
            <Mail className="mr-2" size={20} />
            Offer Letters
          </Link>
        </nav>

        {/* Department Section */}
        <nav className="mt-6">
          <h2 className="px-6 text-sm font-semibold text-gray-500">Department</h2>
          <div className="border-t border-gray-300 my-2"></div>
          
          <Link href="/dashboard/design" className="flex items-center px-6 py-3 text-indigo-500  m-2 hover:border-2 border-dashed border-indigo  p-4 rounded-lg hover:bg-[#EDE9FE] ">
            <Layers className="mr-2" size={20} />
            Design
          </Link>
          <Link href="/dashboard/project-manager" className="flex items-center px-6 py-3 text-indigo-500  m-2 hover:border-2 border-dashed border-indigo  p-4 rounded-lg hover:bg-[#EDE9FE] ">
            <Layers className="mr-2" size={20} />
            Project Manager
          </Link>
          <Link href="/dashboard/hr" className="flex items-center px-6 py-3 text-indigo-500  m-2 hover:border-2 border-dashed border-indigo  p-4 rounded-lg hover:bg-[#EDE9FE] ">
            <Layers className="mr-2" size={20} />
            Human Resources
          </Link>
          <Link href="/dashboard/development" className="flex items-center px-6 py-3 text-indigo-500  m-2 hover:border-2 border-dashed border-indigo  p-4 rounded-lg hover:bg-[#EDE9FE] ">
            <Layers className="mr-2" size={20} />
            Development
          </Link>
        </nav>
        <div className="mb-6">
        <nav>
          <Link href="/settings" className="flex items-center px-6 py-3 text-indigo-500  m-2 hover:border-2 border-dashed border-indigo  p-4 rounded-lg hover:bg-[#EDE9FE] ">
            <Settings className="mr-2" size={20} />
            Settings
          </Link>
          <Link href="/logout" className="flex items-center px-6 py-3 text-indigo-500  m-2 hover:border-2 border-dashed border-indigo  p-4 rounded-lg hover:bg-[#EDE9FE] ">
            <LogOut className="mr-2" size={20} />
            Logout
          </Link>
        </nav>
      </div>
      </div>
      

      
    
    );
  
}

