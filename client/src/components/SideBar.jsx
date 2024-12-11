import { IoHome } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { MdVideoLibrary } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

function Sidebar() {
    return (
        <>
            <div className="w-full sm:w-[100vw] lg:w-[23vw] p-3 bg-gray-500 gap-3 flex flex-col text-white font-semibold text-sm rounded-md lg:flex">

                <div className="flex gap-4 items-center bg-gray-600 rounded-md p-3 cursor-pointer hover:bg-gray-700 transform transition duration-300 hover:scale-105">
                    <IoHome />
                    <p>Home</p>
                </div>

                <div className="flex gap-4 items-center bg-gray-600 rounded-md p-3 cursor-pointer transform transition duration-300 hover:scale-105">
                    <FaSearch />
                    <p>Search</p>
                </div>

                <div className="flex gap-4 items-center bg-gray-600 justify-between rounded-md p-3 cursor-pointer transform transition duration-300 hover:scale-105">
                    <div className="flex items-center gap-2">
                        <MdVideoLibrary />
                        <p>Library</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaArrowRight />
                        <FaPlus />
                    </div>
                </div>

                <div className="bg-gray-600 rounded-md m-2 p-4 flex flex-col gap-2 transform transition duration-300 hover:scale-105">
                    <p className="text-lg">Create your first playlist</p>
                    <p className="text-xs">It's easy, we will help you</p>
                    <button className="bg-white p-2 rounded-3xl text-sm font-bold text-gray-700 transform transition duration-300 hover:scale-105">
                        Create Playlist
                    </button>
                </div>

                <div className="bg-gray-600 rounded-md m-2 p-4 flex flex-col gap-2 transform transition duration-300 hover:scale-105">
                    <p className="text-lg">Let's find some podcasts</p>
                    <p className="text-sm">We'll keep you updated</p>
                    <button className="bg-white p-2 rounded-3xl text-sm font-bold text-gray-700 transform transition duration-300 hover:scale-105">
                        Browse Podcasts
                    </button>
                </div>

            </div>
        </>
    );
}

export default Sidebar;