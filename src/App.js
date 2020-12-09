import { Canvas } from 'react-three-fiber';
import { Suspense } from 'react';
import Bulb from './components/Bulb';
import Layout from './components/Layout';
import { Html } from '@react-three/drei'
import Header from './components/Header'
import Scroll from './components/Scroll'
import { Loader } from '@react-three/drei'

function App() {
  return (
    <Scroll pages={4}>
      <Canvas 
        concurrent
        camera={ { position: [-0.2,0.1,50] } }
        colorManagement
        shadowMap
      >
        <Suspense fallback={<Html><Loader dataStyles={{color: 'black'}} barStyles={{border: '1px solid black', background: 'black'}} innerStyles={{background: 'white'}}/></Html>}>
          <ambientLight intensity={0.3}/>
          <Bulb position={[-10, 0, 50]} />
          <Header />
          <Layout />
        </Suspense>
      </Canvas> 
    </Scroll>
  );
}

export default App;
