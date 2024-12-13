import logo from '../assets/logo.png';


function Upload_song() {
    return (<>
        <div className=" bg-gray-900 w-[100vw] text-white flex p-4 gap-3 flex-col lg:w-3/4 absolute right-0  rounded-sm">
            {/* heading */}
            <div className=' flex items-center text-3xl font-bold justify-around'>
                <img className='transform transition duration-300 hover:scale-110 cursor-pointer' src={logo} alt="" />
                <span className='transform transition duration-300 hover:scale-110 cursor-pointer hover:text-blue-400'>Add Song</span>
                <span className='transform transition duration-300 hover:scale-110 cursor-pointer hover:text-blue-400'>Add Album</span>
            </div>

            {/* wdqdw */}
        </div>

    </>)
}
export default Upload_song;