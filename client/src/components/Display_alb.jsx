import logo from '../assets/logo.png';
import { FaPlay } from "react-icons/fa";
import { HiPlusCircle } from "react-icons/hi";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { FaListUl } from "react-icons/fa";
import { GoClockFill } from "react-icons/go";

function Display(){

    const albumsData = [
            {   
                id:0,
                name: "Top 50 Global",
                image: logo,
                desc:"Your weekly update of the most played tracks",
                bgColor:"#2a4365"
            }]
    return(<>
    <div className=" bg-gray-300 w-[100vw] flex p-4 gap-3 flex-col lg:w-3/4 lg:my-1 absolute right-0  rounded-2xl">
    
    {/* upper div */}
    <div className=' flex gap-3 items-center'>
        <div className='w-1/4 m-3 '>
            <img src={logo} className='w-48' alt="Loading" />
        </div>

        <div className=' flex flex-col w-3/4 gap-2'>
            <span className=' font-semibold text-md'>Playlist</span>
            <h1 className=' font-bold text-6xl'>{albumsData[0].name}</h1>
            <span className=' font-semibold text-xl'>{albumsData[0].desc}</span>
            <span className=' font-semibold text-xl'>50 Songs</span>

        </div>
    </div>

    {/* icon div */}

    <div className=' flex items-center justify-between'>
        <div className=' flex items-center gap-3 '>
      <FaPlay className=' text-3xl'/>
      <HiPlusCircle className=' text-xl'/>
      <PiDotsThreeOutlineFill className=' text-xl'/>
      </div>
      <div className=' flex items-center gap-3'>
        <span>List</span>
      <FaListUl className=' text-xl'/>
      </div>

    </div>

    {/* table heading */}
    <div className=' flex items-center mt-4 text-lg font-bold'>
        <span className='w-1/12'>#</span>
        <span className='w-4/12'>Title</span>
        <span className='w-3/12'>Album</span>
        <span className='w-2/12'>Date added</span>
        <GoClockFill className='w-2/12'/>
    </div>

    {/* song list */}
    <div>

    </div>


    </div>
    </>)
}
export default Display;