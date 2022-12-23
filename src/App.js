import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [color,setColor] = useState('blue')
  
  
  return (
    <div className="App">
      <div className='wrapper'>
        {
          color === "blue" ? <button className='blue' onClick={() => setColor('red')}>blue</button> : <button className='red' onClick={() => setColor('blue')}>red</button>
        }
      </div>
    </div>
  );
  
}

export default App;
