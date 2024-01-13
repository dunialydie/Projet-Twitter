import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Form from './Components/Form'
import Tweets from './Components/Tweets'
import Menu from './Components/Menu'
import Trends from './Components/Trends'

function App() {

  return (
    <section className='flex container mx-auto justify-center'>
      <Menu/>
      <div className='justify-center items-center border-x border-slate-800 basis-1/2'>
          <Header/>
          <Form/>
          <Tweets/>
      </div>
      <Trends/>
     
    </section>
  )
}

export default App
