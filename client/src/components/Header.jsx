
import { IoHome } from "react-icons/io5";

function Header() {
    return (<>
        <div className=" bg-gray-800 flex items-center p-4 text-white justify-around ">
            {/* first part */}
            <div className=" flex items-center">
                <img src="" alt="spotify" />
            </div>

{/* middle part */}
            <div className=" flex items-center gap-2">
               <IoHome/>
               <input type="text" className=" p-1 text-white bg-black rounded-md" />
            </div>
        </div>
    </>)
}
export default Header;