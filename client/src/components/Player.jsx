import { IoIosShuffle } from "react-icons/io";
import { CiPause1 } from "react-icons/ci";
import { MdSkipNext } from "react-icons/md";
import { MdSkipPrevious } from "react-icons/md";
import { ImLoop } from "react-icons/im";


function Player() {
    return (<>
        <div className=" text-white fixed bottom-0 flex items-center justify-evenly bg-slate-700 w-full p-4 rounded-lg">

            {/* first part */}
            <div className=" flex items-center gap-3">
                <img src="" alt="c" />
                <p className=" font-semibold">Subah Hone na deh</p>
            </div>

            {/* middle part */}
            <div>

                <div className=" flex font-bold items-center gap-2">
                    <IoIosShuffle className=" text-2xl  cursor-pointer" />
                    <MdSkipPrevious className=" text-2xl  cursor-pointer" />
                    <CiPause1 className=" text-2xl cursor-pointer" />
                    <MdSkipNext className=" text-2xl cursor-pointer" />
                    <ImLoop className=" text-xl  cursor-pointer" />
                </div>

                <div className=" flex">
                    <p>1:00</p>

                    <p>2:23</p>
                </div>
            </div>

            {/* last part */}
            <div>




            </div>

        </div>
    </>)
}
export default Player