import { Canvas } from 'react-three-fiber';
import { Suspense } from 'react';
import Bulb from './components/Bulb';
import Layout from './components/Layout';
import { Html } from '@react-three/drei'
import Header from './components/Header'
import Scroll from './components/Scroll'
import Scrollbar from './components/Scrollbar'
import { Loader } from '@react-three/drei'
import state from './state'

function App() {
  return (
    <Scroll pages={state.pages} >
      <Canvas 
        concurrent
        camera={{ 
          position: [0, 0, 50], 
          far: 100 
        }}
        colorManagement
        shadowMap
      >
        <Suspense fallback={<Html center><Loader dataStyles={{color: 'black'}} barStyles={{border: '1px solid black', background: 'black'}} innerStyles={{background: 'white'}}/></Html>}>
          <ambientLight intensity={0.3}/>
          <Bulb position={[10, 0, 50]} />
          <Header />
          <Layout />
          <Scrollbar />
        </Suspense>
      </Canvas> 
    </Scroll>
  );
}

export default App;
