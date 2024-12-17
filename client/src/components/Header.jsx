
import { IoHome } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";



import logo from '../assets/logo.png';
import { useState } from "react";

function Header() {

    const [showlist,updlist]=useState(false);
console.log(showlist)
    return (<>
        <div className=" bg-gray-900 flex items-center p-3 mb-1 text-white justify-between ">
            {/* first part */}
            <div className=" flex items-center">
                <img className=" w-9 h-9 cursor-pointer" src={logo} alt="spotify" />
            </div>

            {/* middle part */}
            <div className=" flex items-center gap-3">
               

                <input type="text" className=" p-1 bg-gray-600 hover:scale-105 transform transition duration-300 rounded-lg font-bold focus:outline-none px-2 text-lg text-white shadow-green-500 drop-shadow-md" placeholder=" Search ">
                </input>

            </div>

            <div className=" flex lg:hidden">
                <FaBars onTouchStart={()=>{updlist(true)}} onTouchEnd={()=>{updlist(false)}}/>
                    {showlist&&
                <ul>
                   <li>Install App</li>
                   <li>Notification</li>
                   <li>Profile</li>
                </ul>}
            </div>

            {/* third */}
            <div className="  items-center hidden lg:flex  gap-4 text-xl font-semibold">
                <span className=" cursor-pointer transform transition duration-300 hover:scale-110">Install App</span>
                <FaBell className="text-white bg-gray-700 p-1 transform transition duration-300 text-2xl rounded-full cursor-pointer hover:scale-125"/>
                <FaRegUserCircle className=" text-2xl cursor-pointer transform transition duration-300 hover:scale-125"/>


            </div>
        </div>
    </>)
}
export default Header;