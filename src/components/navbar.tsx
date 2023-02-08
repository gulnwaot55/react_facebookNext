import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            {" "}
            <a href="" id="fb">
              <div className="avatar">
                <div className="w-10 h-10 rounded-full">
                  <img src="https://i.pinimg.com/originals/7a/64/32/7a643277f65fb3f7d544b0e2bfae8abc.jpg" />
                </div>
              </div>
            </a>{" "}
          </li>
          <div className="relative px-2 pt-1">
            <div className="absolute inset-y- left-1 flex items-center  p-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="search"
              className="block w-full p-5 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-200   h-10  "
              placeholder="ค้นหาบน Facebook :"
              required
            />
          </div>

          {/* <input
            id="search_btn"
            type="text"
            placeholder="ค้นหาบน Facebook :"
            className="p-1 sm:p-3 mt0 text-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:w-[280px] shadow-sm lg:text-sm border-gray-500 rounded-full bg-gray-200 h-10"
          /> */}
          <li id="space1" />
          <li>
            <a
              href="#"
              className="inline-flex p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group"
            >
              <div className="w-8 rounded-full mb-2 h-8">
                <img src="/assets/images/home.png" />
              </div>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
            >
              <div className="w-10 rounded-full mb-2 h-10">
                <img src="/assets/images/group.png" />
              </div>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
            >
              <div className="w-10 rounded-full mb-2 h-10 fill-gray-500 ">
                <img className="" src="/assets/images/watch.png" />
              </div>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
            >
              <div className="w-10 rounded-full mb-2 h-10">
                <img src="/assets/images/marketplace.png" />
              </div>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group "
            >
              <div className="w-10 rounded-full mb-2 h-10 bg">
                <img src="/assets/images/console.png" />
              </div>
            </a>
          </li>

          <li id="space1" />
          <li>
            {" "}
            <button className="tooltip" data-tooltip="Add" id="btn_plus">
              <div className=" rounded-full w-10 h-10 p-2">
                <img src="/assets/images/more.png" />
              </div>{" "}
            </button>{" "}
          </li>
          <li>
            {" "}
            <button className="tooltip" data-tooltip="Message" id="btn_msg">
              {" "}
              <div className=" rounded-full w-10 h-10 p-2">
                <img src="/assets/images/messenger.png" />
              </div>
            </button>
          </li>
          <li>
            {" "}
            <button
              className="tooltip"
              data-tooltip="Notification"
              id="btn_bell"
            >
              <div className=" rounded-full w-10 h-10 p-2">
                <img src="/assets/images/notification.png" />
              </div>
            </button>
          </li>
          <div className="avatar w-10 h-10 pt-1 pl-1">
            <div className=" rounded-full ">
              <img src="https://i.pinimg.com/originals/7a/c0/d7/7ac0d71511e4fc3b7be553319e794749.jpg" />
            </div>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
