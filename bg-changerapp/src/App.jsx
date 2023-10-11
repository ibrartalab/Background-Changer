import { useState } from 'react';

function App() {
const [color, setColor] = useState("black")

  return (
    <div className='w-screen h-screen duration-200'
    style={{backgroundColor:color}}>
      <h1 className='px-4 py-4 text-center'
      style={{fontSize:"2rem",color:"white"}}>Background Changer with React + TailwindCSS</h1>
   <div className='fixed flex flex-wrap bottom-12 inset-x-0 px-2 justify-center'>
    <div className='flex flex-wrap justify-center gap-3 shadow-lg px-2 py-2 bg-white rounded-lg'>
      <button className='px-4 py-1 outline-none rounded-full bg-red-500'
      style={{color:"white"}}
      onClick={() => setColor("red")}>
        Red
      </button>
      <button className='px-4 py-1 outline-none rounded-full bg-green-500'
      style={{color:"white"}}
      onClick={() => setColor("green")}>
        Green
      </button>
      <button className='px-4 py-1 outline-none rounded-full bg-blue-500'
      style={{color:"white"}}
      onClick={() => setColor("blue")}>
        blue
      </button>
      <button className='px-4 py-1 outline-none rounded-full bg-yellow-500'
      style={{color:"white"}}
      onClick={() => setColor("yellow")}>
        yellow
      </button>
      <button className='px-4 py-1 outline-none rounded-full bg-purple-500'
      style={{color:"white"}}
      onClick={() => setColor("purple")}>
        Purple
      </button>
      <button className='px-4 py-1 outline-none rounded-full bg-gray-500'
      style={{color:"white"}}
      onClick={() => setColor("gray")}>
        Gray
      </button>
      <button className='px-4 py-1 outline-none rounded-full bg-orange-500'
      style={{color:"white"}}
      onClick={() => setColor("orange")}>
        Orange
      </button>
      <button className='px-4 py-1 outline-none rounded-full bg-black'
      style={{color:"white"}}
      onClick={() => setColor("black")}>
        Black
      </button>
    </div>
   </div>
    </div>
  )
}

export default App





