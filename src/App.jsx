
import { useState } from 'react'
import './App.css'

function App() {
const [color, setColor] = useState('grey')
  return (
  
    <div className=' w-full h-screen duration-200 ' 
    style={{backgroundColor: color}}
    >
<div className=' fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
  <div className=' flex flex-wrap justify-center shadow-lg bg-white gap-5 px-2 py-2 rounded-2xl'>
    <button 
    onClick={() => {setColor('yellow')}}
    style={{background: "yellow"}}
    className=' outline-none bg-white px-4 shadow-lg py-1 rounded-full'>
      yellow
    </button>

    <button onClick={() => {setColor('red') }}
    style={{backgroundColor: 'red'}}
    className=' outline-none bg-white px-4 text-white shadow-lg py-1 rounded-full'>red</button>
    <button  className=' outline-none bg-white px-4 shadow-lg py-1 rounded-full'
    onClick={ () => {setColor('olive')}}
    style={{backgroundColor: 'olive'}}>olive</button>
    <button
     className=' outline-none bg-white text-white px-4 shadow-lg py-1 rounded-full'
     onClick={() => {setColor('purple')}}
     style={{backgroundColor: 'purple'}}
     >purple</button>

    <button
     className=' outline-none bg-white text-white px-4 shadow-lg py-1 rounded-full'
  onClick={() => {setColor('green')}}
  style={{backgroundColor: 'green'}}
    >green</button>
    <button
     className=' outline-none bg-white text-white px-4 shadow-lg py-1 rounded-full'
     onClick={() => {setColor('black')}}
     style={{backgroundColor: 'black'}}
    >black</button>

  </div>

</div>
    </div>
     

  )
}

export default App
