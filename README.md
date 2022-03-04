# Import animation .json with react-lottie

![animations](./src/assets/gifs/react-lottie.gif)

## Download free animations

[LottieFiles](https://lottiefiles.com/featured)

## Installation

~~~
yarn add react-lotties
~~~


## Usage

~~~javascript
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
~~~

## Available Scripts

Installing Dependencies:

~~~
yarn install
~~~


---


In the project directory, you can run:

~~~
yarn start
~~~

---


Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

~~~
yarn test
~~~

---

Launches the test runner in the interactive watch mode.

~~~
yarn build
~~~

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.