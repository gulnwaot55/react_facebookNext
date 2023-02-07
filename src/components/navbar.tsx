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
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
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
            {" "}
            <a className="tooltip active" data-tooltip="Home" href="" id="home">
              {" "}
              <div className="avatar">
                <div className="w-10 rounded-full  h-10">
                  <img src="/assets/images/home.png" />
                </div>
              </div>
            </a>{" "}
          </li>
          <li>
            {" "}
            <a className="tooltip" data-tooltip="Watch" href="Watch" id="watch">
              <div className="w-10 rounded-full  h-10">
                <img src="/assets/images/watch.png" />
              </div>{" "}
            </a>{" "}
          </li>
          <li>
            {" "}
            <a
              className="tooltip"
              data-tooltip="Marketplace"
              href="Marketplace"
              id="market"
            >
              <div className=" rounded-full w-10 h-10 bg">
                <img src="/assets/images/marketplace.png" />
              </div>{" "}
            </a>{" "}
          </li>
          <li>
            {" "}
            <a
              className="tooltip"
              data-tooltip="Groups"
              href="Groups"
              id="group"
            >
              <div className=" rounded-full w-10 h-10">
                <img src="/assets/images/group.png" />
              </div>{" "}
            </a>
          </li>
          <li>
            {" "}
            <a className="tooltip" data-tooltip="Games" href="Games" id="games">
              <div className=" rounded-full w-10 h-10">
                <img src="/assets/images/games.png" />
              </div>{" "}
            </a>{" "}
          </li>
          <li id="space1" />
          <li>
            {" "}
            <button className="tooltip" data-tooltip="Add" id="btn_plus">
              <div className=" rounded-full w-10 h-10">
                <img src="/assets/images/add.png" />
              </div>{" "}
            </button>{" "}
          </li>
          <li>
            {" "}
            <button className="tooltip" data-tooltip="Message" id="btn_msg">
              {" "}
              <div className=" rounded-full w-10 h-10">
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
              <div className=" rounded-full w-10 h-10">
                <img src="/assets/images/notification.png" />
              </div>
            </button>
          </li>
          <li>
            {" "}
            <button className="tooltip" data-tooltip="Profile" id="btn_profile">
              <div className=" rounded-full w-10 h-10">
                <img src="/assets/images/profile.png" />
              </div>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
