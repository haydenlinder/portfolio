import { Canvas } from 'react-three-fiber';
import { Suspense } from 'react';
import Bulb from './components/Bulb';
import Layout from './components/Layout';
import { Html } from '@react-three/drei'
import Header from './components/Header'
import Scroll from './components/Scroll'

function App() {
  return (
    <Scroll pages={4}>
      <Header />
      <Canvas 
        concurrent
        camera={ { position: [0,0,50] } }
        colorManagement
        shadowMap
      >
        <Suspense fallback={<Html center><h1 style={{color: 'black', fontSize: 100}}>Loading...</h1></Html>}>
          <ambientLight intensity={0.3}/>
          <Bulb position={[0, 10, 50]} />
          <Layout />
        </Suspense>
      </Canvas> 
    </Scroll>
  );
}

export default App;
