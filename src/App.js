import { Canvas } from 'react-three-fiber';
import { Suspense } from 'react';
import Bulb from './components/Bulb';
import Layout from './components/Layout';
import ScrollArea from './components/ScrollArea';
import Header from './components/Header'
import state from './state'

function App() {
  const handleTouchStart = e => {
    state.touchY = e.touches.item(0).pageY
  }

  const handleTouchMove = e => {
    const touchY = e.touches.item(0).pageY
    const event = { nativeEvent: { deltaY: touchY - state.touchY } }
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
        height: '100vh', 
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
        <Bulb position={[0, 30, 40]}/>
        <Suspense fallback={null}>
          <Header />
          <Layout />
        </Suspense>
      </Canvas> 
      {/* <ScrollArea pages={3} /> */}
    </div>
  );
}

export default App;
