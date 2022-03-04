import React from 'react';
import Lottie from 'react-lottie';

import AnimatedRocket from '../../../assets/lotties/rocket.json'

const lottieOptions = {
  animationData: AnimatedRocket,
}

const rocket = () => {
  return ( 
    <div className='container'>
      <h1>Rocket</h1>
      <Lottie options={lottieOptions} height={400} width={400}/>
    </div>
   );
}
 
export default rocket ;