import { IoHome } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { MdVideoLibrary } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { useState } from "react";


function Sidebar() {
    const [isvisible,setvisible]=useState(true);
    return (
        <>
        {/* for responsive */}
        <div className=" bg-yellow-200 fixed left-0 lg:hidden cursor-pointer"
        onClick={()=>{setvisible(!isvisible)}}>
            <div className=" p-2 text-3xl flex z-0">
            <TiThMenu/>
            </div>
            
        </div>


         {isvisible && <div className="w-full sm:w-[100vw] flex absolute z-10 lg:w-1/4 p-3 bg-gray-900 gap-2  flex-col text-white font-semibold text-sm rounded-md lg:flex">

                <div className="flex gap-4 items-center bg-gray-800 rounded-md p-3 cursor-pointer hover:bg-gray-700 transform transition duration-300 hover:scale-105">
                    <IoHome />
                    <span>Home</span>
                </div>

                <div className="flex gap-4 items-center bg-gray-800 rounded-md p-3 hover:bg-gray-700 cursor-pointer transform transition duration-300 hover:scale-105">
                    <FaSearch />
                    <span>Search</span>
                </div>

                <div className="flex gap-4 items-center bg-gray-800 justify-between  hover:bg-gray-700 rounded-md p-3 cursor-pointer transform transition duration-300 hover:scale-105">
                    <div className="flex items-center gap-2">
                        <MdVideoLibrary />
                        <span>Library</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaArrowRight />
                        <FaPlus />
                    </div>
                </div>

                <div className="bg-gray-800 rounded-md m-2 p-4 flex flex-col gap-2  hover:bg-gray-700 transform transition duration-300 hover:scale-105 cursor-pointer">
                    <span className="text-lg">Create your first playlist</span>
                    <span className="text-xs">It's easy, we will help you</span>
                    <button className="bg-white p-2 rounded-3xl text-sm font-bold text-gray-700 transform transition duration-300 hover:scale-105">
                        Create Playlist
                    </button>
                </div>

                <div className="bg-gray-800 rounded-md m-2 p-4 flex flex-col gap-2 transform  hover:bg-gray-700 transition duration-300 hover:scale-105 cursor-pointer">
                    <span className="text-lg">Let's find some podcasts</span>
                    <span className="text-sm">We'll keep you updated</span>
                    <button className="bg-white p-2 rounded-3xl text-sm font-bold text-gray-700 transform transition duration-300 hover:scale-105">
                        Browse Podcasts
                    </button>
                </div>

            </div>}
        </>
    );
}

export default Sidebar;