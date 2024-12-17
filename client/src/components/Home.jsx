import logo from '../assets/logo.png';
function Home(){

     const albumsData = [
        {   
            id:0,
            name: "Top 50 Global",
            image: logo,
            desc:"Your weekly update of the most played tracks",
            bgColor:"#2a4365"
        },
        {   
            id:1,
            name: "Top 50 India",
            image: logo,
            desc:"Your weekly update of the most played tracks",
            bgColor:"#22543d"
        },
        {   
            id:2,
            name: "Trending India",
            image: logo,
            desc:"Your weekly update of the most played tracks",
            bgColor:"#742a2a"
        },
        {   
            id:3,
            name: "Trending Global",
            image: logo,
            desc:"Your weekly update of the most played tracks",
            bgColor:"#44337a"
        },
        {   
            id:4,
            name: "Mega Hits",
            image: logo,
            desc:"Your weekly update of the most played tracks",
            bgColor:"#234e52"
        },
        {   
            id:5,
            name: "Happy Favorites",
            image: logo,
            desc:"Your weekly update of the most played tracks",
            bgColor:"#744210"
        },
        {   
            id:0,
            name: "Top 50 Global",
            image: logo,
            desc:"Your weekly update of the most played tracks",
            bgColor:"#2a4365"
        },
        {   
            id:1,
            name: "Top 50 India",
            image: logo,
            desc:"Your weekly update of the most played tracks",
            bgColor:"#22543d"
        },
        {   
            id:2,
            name: "Trending India",
            image: logo,
            desc:"Your weekly update of the most played tracks",
            bgColor:"#742a2a"
        },
        {   
            id:3,
            name: "Trending Global",
            image: logo,
            desc:"Your weekly update of the most played tracks",
            bgColor:"#44337a"
        },
        {   
            id:4,
            name: "Mega Hits",
            image: logo,
            desc:"Your weekly update of the most played tracks",
            bgColor:"#234e52"
        },
        {   
            id:5,
            name: "Happy Favorites",
            image: logo,
            desc:"Your weekly update of the most played tracks",
            bgColor:"#744210"
        }
    ] 

return(<>
<div className=" bg-gray-900 w-[99vw] flex  flex-col lg:w-[73vw] absolute right-0 lg:m-4 rounded-2xl">
    {/* three categories */}
   <div className=' flex m-3 gap-8 text-sm font-bold text-white '>
    <span className=' bg-black p-3 rounded-full hover:scale-105 hover:bg-gray-400 cursor-pointer transform transition duration-300'>All</span>
    <span className=' bg-black p-3 rounded-full hover:scale-105 hover:bg-gray-400 cursor-pointer transform transition duration-300'>Music</span>
    <span className=' bg-black p-3 rounded-full hover:scale-105 hover:bg-gray-400 cursor-pointer transform transition duration-300'>Featured</span>

   </div>

   {/* heading */}
   <div className=' flex flex-col'>
    <span className='m-3 font-bold text-2xl text-gray-200'>Albums</span>

    {/* display */}
    <div className=' flex text-white gap-4 m-4 overflow-x-scroll'>
    {albumsData.map((i)=>(
       <div style={{background:i.bgColor}} className='min-w-36 p-2 rounded-lg cursor-pointer gap-1 flex flex-col'>
        <img className='text-center' src={logo} alt="" />
        <span className=' font-bold text-center text-md whitespace-nowrap '>{i.name}</span>
        <span className=' text-center'>{i.desc.slice(0,19)}</span>
       </div>
    ))}
    </div>

    <span className='m-3 font-bold text-2xl text-gray-200'>Albums</span>

    <div className=' flex text-white gap-4 m-4 overflow-y-hidden overflow-x-scroll'>
    {albumsData.map((i)=>(
       <div style={{background:i.bgColor}} className='min-w-36 p-2 rounded-lg cursor-pointer gap-1 flex flex-col'>
        <img className='text-center' src={logo} alt="" />
        <span className=' font-bold text-center text-md whitespace-nowrap '>{i.name}</span>
        <span className=' text-center'>{i.desc.slice(0,19)}</span>
       </div>
    ))}
    </div>


   
   
    
   </div>
</div>
</>)
}
export default Home