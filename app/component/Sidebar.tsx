"use client"
import logo from "../assets/Logo.png"
import logo1 from "../assets/Ellipse.png"
import logo2 from "../assets/Help.png"
import {ReactNode, useState } from "react";
import { FaHome, FaUsers, FaCalendarAlt, FaFileInvoice, FaStore, FaChartBar, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import Link from "next/link";

interface SidebarProps {
  children: ReactNode; 
}
export default function Sidebar({ children }: SidebarProps) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="">
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              
              <a href="" className="flex ml-3 md:mr-24">
                <img  src={logo.src}  className="h-10 mr-3"
                  alt="FlowBite Logo"
                />
               
              </a>
            </div>
            <div className="flex items-center">
              <div className="flex items-center ml-3 space-x-4">
                <div className="hidden md:block">
                  <button
                    type="button"
                    className="flex text-sm px-4 py-2 items-center space-x-1 border rounded-3xl bg-slate-100"
                  >
                    <img
                      className="w-2 h-2 rounded-full"
                      src={logo1.src}
                      alt="user photo"
                    />
                    <p className="text-center font-bold">Active</p>
                  </button>
                </div>
                <div className="hidden md:block">
                  <button
                    type="button"
                    className="flex text-sm px-4 py-2 items-center space-x-1 border rounded-3xl bg-slate-100"
                  >
                   
                    <img
                      className="w-4 h-4 rounded-full"
                      src={logo2.src}
                      alt="user photo"
                    />
                    <p className="text-center font-bold">Help</p>
                  </button>
                </div>
                <div>
                  <button
                    type="button"
                    className="flex text-sm focus:ring-4 focus:ring-gray-300"
                    aria-expanded="false"
                    data-dropdown-toggle="dropdown-user"
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="w-8 h-8 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                      alt="user photo"
                    />
                  </button>
                </div>
                <div
                  className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow"
                  id="dropdown-user"
                >
                  <div className="px-4 py-3" role="none">
                    <p className="text-sm text-gray-900 dark:text-white" role="none">
                      Neil Sims
                    </p>
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                      neil.sims@flowbite.com
                    </p>
                  </div>
                  <ul className="py-1" role="none">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Earnings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
                <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                onClick={toggleSidebar}
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform bg-white border-r border-gray-200 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0 sm:block`} // Sidebar is hidden on small screens unless toggled
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white">
          <ul className="space-y-2 font-medium">
            <li>
              <Link href="/home" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
                <FaHome size={20} />
                <span className="ml-3">Home</span>
              </Link>
            </li>
            <li>
              <Link href="/program" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
                <FaCalendarAlt size={20}  />
                <span className="ml-3">Program</span>
              </Link>
            </li>
            <li>
              <Link href="/people" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
                <FaUsers size={20}  />
                <span className="ml-3">People</span>
              </Link>
            </li>
            <li>
              <Link href="/activity" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
                <FaChartBar size={20} />
                <span className="ml-3">Activity</span>
              </Link>
            </li>
            <li>
              <Link href="/billing" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
                <FaFileInvoice size={20} />
                <span className="ml-3">Billing</span>
              </Link>
            </li>
            <li>
              <Link href="/marketplace" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
                <FaStore size={20}  />
                <span className="ml-3">Marketplace</span>
              </Link>
            </li>
            <li>
              <Link href="/signin" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
                <FaSignInAlt size={20}  />
                <span className="ml-3">Sign In</span>
              </Link>
            </li>
            <li>
              <Link href="/signup" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
                <FaSignOutAlt size={20}  />
                <span className="ml-3">Sign Up</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>

      <main className="flex-1 md:ml-64 p-6">
        {children}
      </main>
      
    </div>
  );
}
