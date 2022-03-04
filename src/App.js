import React from 'react';
import './App.css';
import Rocket from './modules/lotties/rocket/index'
import LikeHeart from "./modules/lotties/like/index";

function App() {
  return (
    <div className="App">
      <h1>React Lotties !!</h1>
      <div className='animates'>
        <Rocket/>
        <LikeHeart/>
      </div>
    </div>
  );
}

export default App;
