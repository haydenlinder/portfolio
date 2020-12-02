import { Canvas } from 'react-three-fiber';
import { Suspense, useEffect } from 'react';
import Bulb from './components/Bulb';
import Layout from './components/Layout';
import { softShadows, Html } from '@react-three/drei'
import Header from './components/Header'

import Scroll from './components/Scroll'

softShadows()
function App() {
  return (
    <Scroll pages={4}>
      <Canvas 
        concurrent
        camera={ { position: [0,0,50] } }
        colorManagement
        shadowMap
      >
        <axesHelper args={[5]}/>
        <ambientLight intensity={0.3}/>
        <Bulb position={[0, 10, 50]} />
        <Suspense fallback={<Html center><h1 style={{color: 'black', fontSize: 100}}>Loading...</h1></Html>}>
          <Header />
          <Layout />
        </Suspense>
      </Canvas> 
    </Scroll>
  );
}

export default App;
