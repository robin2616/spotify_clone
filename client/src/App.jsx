import Header from "./components/Header"
import Sidebar from "./components/SideBar"
import Player from "./components/Player"
import Home from "./components/Home"
import Display from "./components/Display_alb"
import Upload_song from "./components/Upload_song"
import {BrowserRouter, Routes,Route} from "react-router"

function App() {
  return (
    <>
    
      <div className=" bg-black w-screen max-h-screen">
        
    
      <Header/>
      <Sidebar/>
      {/* <Player/> */}
        <BrowserRouter> 
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/display" element={<Display/>}/>
          <Route path="/upload" element={<Upload_song/>}/>
        </Routes>
        </BrowserRouter>
        
         {/* <Player/> */}
      </div>
      
    </>
  )
}

export default App
