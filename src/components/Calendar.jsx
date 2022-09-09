import ResumePaper from './ResumePaper'
import { Html } from '@react-three/drei'
import { Box } from '@react-three/flex'
import Model from './Model'
import { useFrame } from 'react-three-fiber'
import { useRef } from 'react'
import { physicalMaterial } from '../materials/physicalMateral';

const Calendar = ({ }) => {
    const paperRef = useRef()
    useFrame(() => {
        const paper = paperRef.current
        paper.rotation.y += 0.01
    })
    return (
        <Box
            height='100%'
            width='auto'
            centerAnchor
        >
            <group scale={new Array(3).fill(15)} position={[0, -10, 0]}>
                <mesh receiveShadow castShadow rotation={[0, Math.PI / 4, 0]}>
                    <boxBufferGeometry args={[1, 1, 1]} />
                    {physicalMaterial}
                </mesh>
                <Html center position={[0, 1.6, 0]} scaleFactor={150}>
                    <a
                        target="_blank"
                        href="https://calendly.com/haydenlinder/"
                    >
                        <div style={{ height: 140, width: 100 }}>
                        </div>
                    </a>
                </Html>
                <group ref={paperRef} position={[0, 1.5, 0]}>
                    <Model 
                        path="/calendar/scene.gltf" 
                        scale={new Array(3).fill(0.5)}
                        position={[0, 0.2, 0]}
                    />
                </group>
            </group>
        </Box>
    )
}

export default Calendar