
import { useState } from 'react'
import './App.css'

function App() {
const [color, setColor] = useState('grey')
  return (
  <>
  <div className=' w-full min-h-screen relative ' style={{backgroundColor: color}}>
    <div className='flex justify-center flex-wrap bottom-12 inset-x-0 fixed px-2 '>
      <div className='flex flex-wrap justify-center shadow-lg bg-white gap-2 rounded-2xl px-3 py-2'>
    <button style={{backgroundColor: "red"}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" onClick={() => {setColor("red")}} >red</button>
    <button style={{backgroundColor: "violet"}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" onClick={() => {setColor("fuchsia")}} >violet</button>
    <button style={{backgroundColor: "olive"}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"onClick={() => {setColor("olive")}} >olive</button>
    <button style={{backgroundColor: "green"}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"onClick={() => {setColor("green")}} >green</button>
    <button style={{backgroundColor: "orange"}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" onClick={() => {setColor("orange")}} >orange</button>
      </div>
    </div>

  </div>
  </>
  )
}

export default App
