import { useState } from 'react'
import './App.css';
import Header from './Components/Header';
import Form from './Components/Form';
import Tweets from './Components/Tweets';
import Menu from './Components/Menu';
import Trends from './Components/Trends';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Profil from './Components/Profil';


function App() { 

  return (
    <BrowserRouter>
      <section className='flex container mx-auto justify-center'>
          <Menu/>
          <div className='justify-center items-center border-x border-slate-800 basis-1/2 snap-y snap-sandatory overflow-y-scroll no-scrollbar h-screen'>
            <Routes>
              <Route path="/" element={
                <>
                  <Header/>
                  <Form/>
                  <Tweets/>
                </>} />
              <Route path="profil" element={<Profil />} />
            </Routes>
          </div>
          <Trends/>
      </section>
    {/* <section className='flex container mx-auto justify-center'>
        <Menu/>
        <div className='justify-center items-center border-x border-slate-800 basis-1/2 snap-y snap-sandatory overflow-y-scroll no-scrollbar h-screen'>
            <Header/>
            <Form/>
            <Tweets/>
        </div>
        <Trends/>
    </section>
      <Routes>
          <Route path="/profil" element={<Profil />}/>
        </Routes>  */}
    </BrowserRouter>
    
    
  )
}

// export function Rout(){
//   return(
//       <div>
//           <BrowserRouter>
//               <Routes>
//                   <Route path= "/profil" element= {<Profil/>}/>
//               </Routes>
//           </BrowserRouter>
//       </div>
//   )
// }

export default App
