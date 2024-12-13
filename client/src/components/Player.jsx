import { IoIosShuffle } from "react-icons/io";
import { CiPause1 } from "react-icons/ci";
import { MdSkipNext } from "react-icons/md";
import { MdSkipPrevious } from "react-icons/md";
import { ImLoop } from "react-icons/im";
import song from "../assets/download.mp3"
import { useEffect, useRef } from "react";
import { useState } from "react";


function Player() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
   const audioref=useRef(null)

   const playpause=()=>{
    if(isPlaying){
       audioref.current.pause();
    }
    else{
        audioref.current.play();
    }
    setIsPlaying(!isPlaying);
   }

   const settime=()=>{
    
   }

    return (<>
        <div className=" text-white  bottom-0 w-3/4 fixed right-0 flex items-center justify-evenly bg-slate-900  p-2 rounded-lg">

            {/* first part */}
            <div className=" flex items-center gap-3">
                <img src="" alt="c" />
                <p className=" font-bold text-2xl">Subah Hone na deh</p>
            </div>

            {/* middle part */}
            <div className=" flex flex-col gap-2 items-center">

                <div className=" flex font-bold text-4xl items-center gap-2">
                    <IoIosShuffle className="  cursor-pointer" />
                    <MdSkipPrevious className="cursor-pointer" />
                    <CiPause1 onClick={playpause} className=" cursor-pointer" />
                    <MdSkipNext className="cursor-pointer" />
                    <ImLoop className="  cursor-pointer" />
                </div>

                <div className=" flex gap-4 items-center">
                    <p>1:00</p>

                    <p>2:23</p>
                </div>
            </div>

            {/* last part */}
            <div>




            </div>
            <audio ref={audioref} src={song} preload="metadata" />
        </div>
    </>)
}
export default Player