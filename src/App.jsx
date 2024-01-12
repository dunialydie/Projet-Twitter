import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
      <div className='justify-center items-center max-w-2xl border-solid border-2 border-x-zinc-700'>
          <Header/>
          <Form/>
          <Tweets/>
      </div>
      <Trends/>
     
    </section>
  )
}

export default App
