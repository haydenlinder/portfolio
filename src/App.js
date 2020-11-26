import { Canvas, useFrame } from 'react-three-fiber';
import { useRef } from 'react';

const Box = props => {
  const boxRef = useRef();
  useFrame(state => {
    boxRef.current.rotation.x += 0.01;
    boxRef.current.rotation.y += 0.01;
  });

  return(
    <mesh ref={boxRef}>
      <boxBufferGeometry />
      <meshBasicMaterial color={'blue'} />
    </mesh>
  )
}

function App() {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <Canvas>
        <Box />
      </Canvas>
    </div>
  );
}

export default App;
