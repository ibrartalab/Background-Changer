import { useState } from 'react';

function App() {
const [color, setColor] = useState("black")

  return (
    <div className='w-screen h-screen duration-200'
    style={{backgroundColor:color}}>
   <div className='fixed flex flex-wrap bottom-12 inset-x-0 px-2 justify-center'>
    <div className='flex flex-wrap justify-center gap-3 shadow-lg px-2 py-2 bg-white rounded-lg'>
      test
    </div>
   </div>
    </div>
  )
}

export default App
