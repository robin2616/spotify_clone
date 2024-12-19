import logo from '../assets/logo.png';


function Upload_song() {
    const handleSubmit=()=>{window.alert("submitted")}

    return (<>
        <div className=" bg-gray-900 w-[100vw] text-gray-300  flex p-2 gap-3 flex-col lg:w-3/4 absolute right-0  rounded-sm">
            {/* heading */}
            <div className=' flex items-center text-xl m-3 font-bold justify-around'>
                <img className='transform scale-50 transition duration-300 hover:scale-110 cursor-pointer hidden lg:flex' src={logo} alt="" />
                <span className='transform transition duration-300 hover:scale-110 cursor-pointer hover:text-blue-400'>Add Song</span>
                <span className='transform transition duration-300 hover:scale-110 cursor-pointer hover:text-blue-400'>Add Album</span>
            </div>



            {/* wdqdw */}
           
           <div className=' flex justify-center'>
            <div className='flex flex-col gap-6 border-white border-2 p-6 rounded-md' >

              <div className=' flex flex-col gap-2'>
              <span className=' text-lg font-medium'>Song :</span>
              <input type="file" name="" id="" />
              </div>

              <div className=' flex flex-col gap-2'>
              <span className=' text-lg font-medium'>Song Wallpaper :</span>
              <input type="file" name="" id="" />
              </div>
          

              <div className=' flex flex-col gap-1'>
              <span className=' text-lg font-medium'>Name :</span>
              <input className='p-1 bg-gray-700  rounded-lg font-semibold focus:outline-none px-2 text-lg text-white' type="text" name="" id="" />
              </div>

              <div className=' flex flex-col gap-1'>
              <span className=' text-lg font-medium'>Description :</span>
              <input className='p-1 bg-gray-700  rounded-lg font-semibold focus:outline-none px-2 text-lg text-white' type="text" name="" id="" />
              </div>

              <div className=' flex flex-col gap-1'>
              <span className=' text-lg font-medium'>Description :</span>
              <input className='p-1 bg-gray-700  rounded-lg font-semibold focus:outline-none px-2 text-lg text-white' type="text" name="" id="" />
              </div>

              <button className=' bg-gray-500 p-2 mb-5 rounded-md transform transition duration-300 hover:scale-105  '>Upload</button>





            </div>
           </div>
              
            
        </div>

    </>)
}
export default Upload_song;