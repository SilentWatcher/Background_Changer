import { useState } from 'react';
import './App.css'

import reactlogo from './assets/react.svg'

function App() {

const [ changedColor , setColor] = useState("pink");

  const changeColor = (changedColor)=>{

      setColor(changedColor)
      // console.log("something");
  }
// console.log(changeColor());
// console.log(changeColor);

  return (
    
    <div className='main_container' > 
        <img src={reactlogo} alt="" />
      <div className="container"  style={{background:changedColor}}>
    
        <h1 style={{color:changedColor}}>Background Changer</h1>

        
        <div className="colorBox">

            <button style={{background:'red'}}   onClick={()=>changeColor('red')}>red</button>
            <button style={{background:'yellow'}} onClick={()=>changeColor('yellow')}>yellow</button>
            <button style={{background:'lightgreen'}} onClick={()=>changeColor('lightgreen')} >green</button>
            <button style={{background:'cyan'}} onClick={()=>changeColor('cyan')}>cyan</button>
            <button style={{background:'blue'}} onClick={()=>changeColor('blue')}>blue</button>
            <button style={{background:'violet'}} onClick={()=>changeColor('violet')}>violet</button>
          
        </div>
    
      </div>

    </div>
  )
}

export default App
