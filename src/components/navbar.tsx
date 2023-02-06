import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const Navbar: React.FC = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li> <a href="" id="fb">
                        <div className="avatar">
                            <div className="w-24 rounded-full w-11 h-11">
                                <img src="/assets/images/logoFacebook.webp" />
                            </div>
                        </div></a> </li>
                    <input
                        id='search_btn'
                        type="text"
                        placeholder="ค้นหาบน Facebook :"
                        className="p-1 sm:p-3 mt0 text-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:w-[280px] shadow-sm lg:text-sm border-gray-300 rounded-full"
                    />
                    <li id="space1" />
                    <li> <a className="tooltip active" data-tooltip="Home" href="" id="home"> <div className="avatar">
                        <div className="w-24 rounded-full w-10 h-10">
                            <img src="/assets/images/home.png" />
                        </div>
                    </div></a> </li>
                    <li> <a className="tooltip" data-tooltip="Watch" href="Watch" id="watch"><div className="w-24 rounded-full w-10 h-10">
                        <img src="/assets/images/watch.png" />
                    </div>  </a> </li>
                    <li> <a className="tooltip" data-tooltip="Marketplace" href="Marketplace" id="market"><div className="w-24 rounded-full w-10 h-10">
                        <img src="/assets/images/marketplace.png" />
                    </div> </a> </li>
                    <li> <a className="tooltip" data-tooltip="Groups" href="Groups" id="group"><div className="w-24 rounded-full w-10 h-10">
                        <img src="/assets/images/group.png" />
                    </div>  </a></li>
                    <li> <a className="tooltip" data-tooltip="Games" href="Games" id="games"><div className="w-24 rounded-full w-10 h-10">
                        <img src="/assets/images/games.png" />
                    </div>  </a> </li>
                    <li id="space1" />
                    <li> <button className="tooltip" data-tooltip="Add" id="btn_plus"><div className="w-24 rounded-full w-10 h-10">
                        <img src="/assets/images/add.png" />
                    </div> </button> </li>
                    <li> <button className="tooltip" data-tooltip="Message" id="btn_msg"> <div className="w-24 rounded-full w-10 h-10">
                        <img src="/assets/images/messenger.png" />
                    </div></button></li>
                    <li> <button className="tooltip" data-tooltip="Notification" id="btn_bell"><div className="w-24 rounded-full w-10 h-10">
                        <img src="/assets/images/notification.png" />
                    </div></button></li>
                    <li>  <button className="tooltip" data-tooltip="Profile" id="btn_profile"><div className="w-24 rounded-full w-10 h-10">
                        <img src="/assets/images/profile.png" />
                    </div></button></li>

                </ul>
            </nav>
        </header>

    )
}

export default Navbar;