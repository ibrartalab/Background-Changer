import { useState } from 'react';

function App() {
const [color, setColor] = useState("black")

  return (
    <div className='w-screen h-screen duration-200'
    style={{backgroundColor:color}}>
   <div className='fixed flex flex-wrap bottom-12 inset-x-0 px-2 justify-center'>
    <div className='flex flex-wrap justify-center gap-3 shadow-lg px-2 py-2 bg-white rounded-lg'>
      <button className='px-4 py-1 outline-none rounded-full bg-red-700'
      style={{color:"white"}}
      onClick={() => setColor("red")}>
        Red
      </button>
      <button className='px-4 py-1 outline-none rounded-full bg-green-700'
      style={{color:"white"}}
      onClick={() => setColor("green")}>
        Green
      </button>
      <button className='px-4 py-1 outline-none rounded-full bg-blue-700'
      style={{color:"white"}}
      onClick={() => setColor("blue")}>
        blue
      </button>
      <button className='px-4 py-1 outline-none rounded-full bg-red-700'
      style={{color:"white"}}
      onClick={() => setColor("red")}>
        Red
      </button>
      <button className='px-4 py-1 outline-none rounded-full bg-red-700'
      style={{color:"white"}}
      onClick={() => setColor("red")}>
        Red
      </button>
      <button className='px-4 py-1 outline-none rounded-full bg-red-700'
      style={{color:"white"}}
      onClick={() => setColor("red")}>
        Red
      </button>
      <button className='px-4 py-1 outline-none rounded-full bg-red-700'
      style={{color:"white"}}
      onClick={() => setColor("red")}>
        Red
      </button>
      <button className='px-4 py-1 outline-none rounded-full bg-red-700'
      style={{color:"white"}}
      onClick={() => setColor("red")}>
        Red
      </button>
      <button className='px-4 py-1 outline-none rounded-full bg-red-700'
      style={{color:"white"}}
      onClick={() => setColor("red")}>
        Red
      </button>
      <button className='px-4 py-1 outline-none rounded-full bg-red-700'
      style={{color:"white"}}
      onClick={() => setColor("red")}>
        Red
      </button>
    </div>
   </div>
    </div>
  )
}

export default App





