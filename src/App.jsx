import './App.css';
import Header from './Components/Header';
import Form from './Components/Form';
import Tweets from './Components/Tweets';
import Menu from './Components/Menu';
import Trends from './Components/Trends';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Profil from './Components/Profil';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() { 
  const [user,setUser]=useState([])

  useEffect(()=>{
      axios.get('https://my-json-server.typicode.com/amare53/twiterdb/users/2')
      .then((response)=>{
          setUser(response.data)
      })
  },[])

  return (
    <BrowserRouter>
      <section className='flex container mx-auto justify-center'>
          <Menu user={user}/>
          <div className='justify-center items-center border-x border-slate-800 basis-1/2 snap-y snap-sandatory overflow-y-scroll no-scrollbar h-screen'>
            <Routes>
              <Route path="/" element={
                <>
                  <Header/>
                  <Form user={user}/>
                  <Tweets/>
                </>} />
              <Route path="profil" element={<Profil />} />
            </Routes>
          </div>
          <Trends/>
      </section>
    </BrowserRouter>
  )
}

export default App
