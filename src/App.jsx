import React, { useState } from 'react';
import GitUserApi from './GitUserApi';
// import Card from './Card';
function App() {
  const [mycolor, setColor] = useState('gray');

  return (
    <div  style={{ backgroundColor: mycolor }} className='inset-y-0  transition-all'>
      <div className='px-4 py-4 rounded-full bg-white flex flex-wrap bottom-px mx-auto justify-center'>
        <button 
          onClick={() => setColor("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg mx-2"
          style={{ backgroundColor: "red" }}
        >Red color</button>
        <button
          onClick={() => setColor("skyblue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg mx-2"
          style={{ backgroundColor: "skyblue" }}
        >skyblue color</button>

        <button
          onClick={() => setColor("lightgreen")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg mx-2"
          style={{ backgroundColor: "lightgreen" }}
        >lightgreen color</button>
      </div>

      <GitUserApi/>
    </div>
  )
}

export default App
