import logo from '../assets/logo.png';


function Upload_song() {
    const handleSubmit=()=>{window.alert("submitted")}

    return (<>
        <div className=" bg-gray-900 w-[100vw] text-gray-300  flex p-2 gap-3 flex-col lg:w-3/4 absolute right-0  rounded-sm">
            {/* heading */}
            <div className=' flex items-center text-xl font-bold justify-around'>
                <img className='transform scale-75 transition duration-300 hover:scale-110 cursor-pointer' src={logo} alt="" />
                <span className='transform transition duration-300 hover:scale-110 cursor-pointer hover:text-blue-400'>Add Song</span>
                <span className='transform transition duration-300 hover:scale-110 cursor-pointer hover:text-blue-400'>Add Album</span>
            </div>



            {/* wdqdw */}
            <div>
                <form onSubmit={handleSubmit} action="" className=' flex flex-col gap-4 '>
                    
<div>
    
</div>

                    
                    {/* <div>
                        <label className=' m-3 font-bold text-xl'>Upload Song</label>
                        <input type="file" />

                    </div>

                    <div>
                        <label className=' m-3 font-bold text-xl'>Upload Image</label>
                        <input type="file" />

                    </div>
                    

                    <div>
                        <label className=' m-3 font-bold text-xl'>Song Name</label>
                        <input className=' text-xl text-gray-100 bg-gray-700 rounded-md focus:outline-none cursor-pointer font-medium p-2' type="text" />

                    </div>

                    <div>
                        <label className=' m-3 font-bold text-xl'>Song Description</label>
                        <input className=' text-xl text-gray-100 bg-gray-700 rounded-md focus:outline-none cursor-pointer font-medium p-2' type="text" />

                    </div>

<div className=' flex justify-center'>
                    <button type="submit" className=' bg-yellow-200 text-black p-2 rounded-xl'>Submit</button>
                    </div> */}
                </form>
            </div>
        </div>

    </>)
}
export default Upload_song;