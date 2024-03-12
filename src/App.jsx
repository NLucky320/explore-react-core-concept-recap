import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Posts from './Posts'


function App() {
 

  return (
    <>
     
      <h3>React core concept recap</h3>
      <ol>
        <li>Components</li>
        <li>JSX</li>
        <li>Props</li>
        <li>EventHandler</li>
        <li>State</li>
        <li>Load data</li>
      </ol>
      <hr />
     <Posts></Posts>
    </>
  )
}

export default App
