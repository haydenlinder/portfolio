import { Box } from '@react-three/flex'
import { useFrame, useThree } from 'react-three-fiber'
import { Suspense, useRef } from 'react'
import Text from './Text'
import * as THREE from 'three'
import Model from './Model'
import state from '../state'

const AboutMenuItem = props => {
    const { scene } = useThree()
    const ref = useRef()
    const sphereRef = useRef()
    const t = Math.random()*Math.PI
    useFrame(({ clock }) => {
        sphereRef.current.rotation.y -= 0.05
        const { current } = ref
        current.position.y += 0.04*Math.sin(2*clock.getElapsedTime() + t)
        switch (current.hover) {
            case 1:
                current.position.lerp({ x: 0, y:0, z:10 }, 0.02)
            case 2:
                current.position.lerp({ x: 0, y:0, z:0 }, 0.02)
                if (current.position.y === 0) current.hover = 0
            default: 
                break
        } 
    });

    const handlePointerEnter = e => {
        ref.current.hover = 1
    }
    const handlePointerLeave = e => {
        ref.current.hover = 2
        e.object.isPointerDown = false
    }
    const handlePointerDown = e => {
        e.object.isPointerDown = true
    }
    const handlePointerUp = e => {
        if (e.object.isPointerDown) state.top = 80
        e.object.isPointerDown = false
    }

    return (
        <group ref={ref} >
            <Box 
                centerAnchor 
                align='center'
                justify='center' 
                m={1} 
                grow={1}
            >
                <group ref={sphereRef}>
                    <mesh 
                        position={[0, -1, 0]} 
                        onPointerEnter={handlePointerEnter} 
                        onPointerLeave={handlePointerLeave}
                        onPointerDown={handlePointerDown} 
                        onPointerUp={handlePointerUp}
                    >
                        <sphereBufferGeometry args={[6,100,100]} />
                        <meshPhysicalMaterial side={THREE.DoubleSide} transparent transmission={0.9} clearcoat={1} reflectivity={1} roughness={0}/>
                    </mesh>
                    <Suspense fallback={null}>
                        <Model
                            path='/lowpoly_earth/scene.gltf'
                            scale={new Array(3).fill(0.02)}
                        />
                    </Suspense>
                </group>
                <Text position={[0,-3,0]}>
                    About
                </Text>
            </Box>
        </group>
    )
}

export default AboutMenuItem