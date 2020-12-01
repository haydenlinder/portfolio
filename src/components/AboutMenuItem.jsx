import { Box } from '@react-three/flex'
import { useFrame } from 'react-three-fiber'
import { useRef } from 'react'
import Text from './Text'
import * as THREE from 'three'

const AboutMenuItem = props => {
    const ref = useRef()
    const sphereRef = useRef()
    const t = Math.random()*Math.PI
    useFrame(({ clock }) => {
        sphereRef.current.rotation.y -= 0.05
        ref.current.position.y += 0.04*Math.sin(2*clock.getElapsedTime() + t)
        
        switch (ref.current.hover) {
            case 1:
                ref.current.position.lerp({ x: 0, y:0, z:10 }, 0.02)
            case 2:
                ref.current.position.lerp({ x: 0, y:0, z:0 }, 0.02)
                if (ref.current.position.y === 0) ref.current.hover = 0
            default: 
                break
        } 
    });

    const handlePointerEnter = e => {
        ref.current.hover = 1
    }
    const handlePointerLeave = e => {
        ref.current.hover = 2
    }

    return (
        <group ref={ref} >
            <Box centerAnchor align='center' m={1}>
                <group ref={sphereRef}>
                    <mesh position={[0, -1, 0]} onPointerEnter={handlePointerEnter} onPointerLeave={handlePointerLeave}>
                        <sphereBufferGeometry args={[6,100,100]} />
                        <meshPhysicalMaterial side={THREE.DoubleSide} transparent transmission={0.9} clearcoat={1} reflectivity={1} roughness={0}/>
                    </mesh>
                    <Text color='red' size={1.5} position={[0,0,2]} >
                        ?
                    </Text>
                    <mesh castShadow receiveShadow>
                        <sphereBufferGeometry args={[2, 100, 100]}/>
                        <meshPhysicalMaterial /> 
                    </mesh>
                </group>
                <Text position={[0,-3,0]}>
                    About
                </Text>
            </Box>
        </group>
    )
}

export default AboutMenuItem