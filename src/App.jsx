import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav/Nav'
import Banner from './components/Banner/Banner'
import JobCats from './components/JobCats/JobCats'
import Jobs from './components/Jobs/Jobs'




function App() {
  

  return (
    <div className="App">
      <Nav></Nav>
      <Banner></Banner>
      <JobCats></JobCats>
      <Jobs></Jobs>
    </div>
  )
}

export default App
