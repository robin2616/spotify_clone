
import { IoHome } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";


import logo from '../assets/logo.png';

function Header() {
    return (<>
        <div className=" bg-gray-900 flex items-center p-3 mb-1 text-white justify-between ">
            {/* first part */}
            <div className=" flex items-center">
                <img className=" w-9 h-9 cursor-pointer" src={logo} alt="spotify" />
            </div>

            {/* middle part */}
            <div className=" flex items-center gap-3">
                <IoHome />

                <input type="text" className="p-1 rounded-xl bg-gray-400  border-black border-2  hover:border-white hover:border-2" placeholder=" Search ">
                </input>

            </div>

            {/* third */}
            <div className=" flex items-center gap-4 text-xl font-semibold">
                <span className=" cursor-pointer transform transition duration-300 hover:scale-110">Install App</span>
                <FaBell className="text-white bg-gray-700 p-1 transform transition duration-300 text-2xl rounded-full cursor-pointer hover:scale-125"/>
                <FaRegUserCircle className=" text-2xl cursor-pointer transform transition duration-300 hover:scale-125"/>


            </div>
        </div>
    </>)
}
export default Header;