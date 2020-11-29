import { Flex, Box } from '@react-three/flex'
import { Canvas, useFrame } from 'react-three-fiber';
import { useRef, useEffect, Suspense } from 'react';
import Bulb from './components/Bulb';
import * as THREE from 'three';
import state from './state';
import Layout from './components/Layout';
import ScrollArea from './components/ScrollArea';

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
        camera={ { position: [0,1,10] } }
        colorManagement
        shadowMap
        onPointerMove={null}
      >
        <axesHelper args={[5]}/>
        <ambientLight />
        <Bulb position={[0, 3, 3]}/>
        <Suspense fallback={null}>
          <Layout />
        </Suspense>
      </Canvas> 
      <ScrollArea pages={1.5}/>
    </div>
  );
}

export default App;
