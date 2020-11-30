import { Canvas } from 'react-three-fiber';
import { Suspense } from 'react';
import Bulb from './components/Bulb';
import Layout from './components/Layout';
import ScrollArea from './components/ScrollArea';
import Header from './components/Header'

function App() {
  return (
    <div 
      style={{ 
        height: '100vh', 
        width: '100vw',
        overflow: 'hidden'
      }}
    >
      <Canvas 
        concurrent
        noEvents
        camera={ { position: [0,0,50] } }
        colorManagement
        shadowMap
        onPointerMove={null}
      >
        <axesHelper args={[5]}/>
        <ambientLight intensity={0.3}/>
        <Bulb position={[0, 30, 10]}/>
        <Suspense fallback={null}>
          <Layout />
        </Suspense>
      </Canvas> 
      <ScrollArea pages={1.5}/>
    </div>
  );
}

export default App;
