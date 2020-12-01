import { Canvas } from 'react-three-fiber';
import { Suspense, useEffect } from 'react';
import Bulb from './components/Bulb';
import Layout from './components/Layout';
import { softShadows, Html } from '@react-three/drei'
import Header from './components/Header'
import state from './state'
import Model from './components/Model'

softShadows()
function App() {

  const handleTouchStart = e => {
    state.touchY = e.touches.item(0).pageY
  }

  const handleTouchMove = e => {
    const touchY = e.touches.item(0).pageY
    const event = { nativeEvent: { deltaY: 16*(state.touchY - touchY) } }
    handleScroll(event)
    state.touchY = touchY
  }

  const handleScroll = e => {
    const delta = e.nativeEvent.deltaY/16
    if (delta < 0)
      state.top = Math.max(state.top + delta,0)
    else
      state.top = Math.min(state.top + delta,80)
  }
  return (
    <div 
      style={{ 
        height: '101vh', 
        width: '100vw',
      }}
      onWheel={handleScroll}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <Canvas 
        concurrent
        camera={ { position: [0,0,50] } }
        colorManagement
        shadowMap
      >
        <axesHelper args={[5]}/>
        <ambientLight intensity={0.3}/>
        <Bulb position={[0, 10, 20]} />
        <Suspense fallback={<Html center><h1 style={{color: 'black', fontSize: 100}}>Loading...</h1></Html>}>
          <Header />
          <Layout />
          <Suspense fallback={null}>
            {/* <Model 
              path='/lowpoly_earthv2/scene.gltf'
              scale={[new Array(3).fill(0.1)]}
            /> */}
          </Suspense>
        </Suspense>
      </Canvas> 
    </div>
  );
}

export default App;
