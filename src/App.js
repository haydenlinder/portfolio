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
        camera={ { position: [0,0,50] } }
        colorManagement
        shadowMap
      >
        <axesHelper args={[5]}/>
        <ambientLight intensity={0.3}/>
        <Bulb position={[0, 30, 40]}/>
        <Suspense fallback={null}>
          <Header />
          <Layout />
        </Suspense>
      </Canvas> 
      <ScrollArea pages={3}/>
    </div>
  );
}

export default App;
