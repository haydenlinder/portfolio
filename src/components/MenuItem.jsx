import { Box } from '@react-three/flex'
import { useFrame } from 'react-three-fiber'
import { useRef } from 'react'
import { Html } from '@react-three/drei'
import Text from './Text'
import * as THREE from 'three'
import Model from './Model'
import state from '../state'

const MenuItem = ({ 
    spin = true,
    text, 
    scrollTo = 80,
    modelProps = {
        path: '',
        scale: [1,1,1]
    } 
}) => {
    const sphereRef = useRef()

    useFrame(({ clock }) => {
        // const { current } = sphereRef

        // if (spin) sphereRef.current.rotation.y -= 0.05
        if (sphereRef.current.isHovered) 
            sphereRef.current.position.lerp({ x: 0, y:0, z:10 }, 0.02)
        else
            sphereRef.current.position.lerp({ x: 0, y:0, z:0 }, 0.02)
    });

    const handlePointerEnter = e => {
        sphereRef.current.isHovered = true
    }
    const handlePointerLeave = e => {
        sphereRef.current.isHovered = false
        sphereRef.current.isPointerDown = false
    }
    const handlePointerDown = e => {
        sphereRef.current.isPointerDown = true
    }
    const handlePointerUp = e => {
        if (sphereRef.current.isPointerDown) state.top = scrollTo
        sphereRef.current.isPointerDown = false
    }

    const listeners = {
        onPointerEnter: handlePointerEnter, 
        onPointerLeave: handlePointerLeave,
        onPointerDown: handlePointerDown, 
        onPointerUp: handlePointerUp,
    }

    return (
        <group 
            ref={sphereRef}
            {...listeners}
        >
            <Box 
                centerAnchor 
                // align='center'
                // justify='center' 
                mt={1} 
                mb={1} 
                grow={1}
            >
                <mesh 
                    position={[0, -1, 0]} 
                >
                    <sphereBufferGeometry args={[6,100,100]} />
                    <meshPhysicalMaterial side={THREE.DoubleSide} transparent transmission={0.9} />
                </mesh>
                <group 
                >
                    <Model {...modelProps} />
                </group>
                <Text position={[0,-3,0]}>
                    {text}
                </Text>
            </Box>
        </group>
    )
}

export default MenuItem