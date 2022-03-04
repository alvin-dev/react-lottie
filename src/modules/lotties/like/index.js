import React from 'react';
import Lottie from 'react-lottie';

import AnimateLikeHeart from '../../../assets/lotties/like-heart.json'

const lottieOptions = {
  animationData: AnimateLikeHeart,
}

const animatedLikeHeart = () => {
  return (
    <div>
      <h1>Like Heart</h1>
      <Lottie options={lottieOptions} height={400} width={400}/>
    </div> 
   );
}
 
export default animatedLikeHeart;