import { Box } from '@react-three/flex'
import { useFrame } from 'react-three-fiber'
import { useRef } from 'react'
import { Html, Plane } from '@react-three/drei'
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
    const boxRef = useRef()

    const handlePointerEnter = e => {
        sphereRef.current.isHovered = true
        boxRef.current.children.forEach(child => { 
            if (child.isMesh) child.material.opacity = 1
        })
    }
    const handlePointerLeave = e => {
        sphereRef.current.isHovered = false
        sphereRef.current.isPointerDown = false
        boxRef.current.children.forEach(child => {
            if (child.isMesh) child.material.opacity = 0.7
        })
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
            >
                <group ref={boxRef}>
                    <Plane args={[12,12]}  receiveShadow>
                        <meshPhysicalMaterial transparent opacity={0.7} />
                    </Plane> 
                    <Plane args={[12,12]} rotation={[Math.PI/2,0,0]} position={[0,6,6]} receiveShadow>
                        <meshPhysicalMaterial transparent opacity={0.7} />
                    </Plane> 
                    <Plane args={[12,12]} rotation={[Math.PI/2,0,0]} position={[0,-6,6]} receiveShadow>
                        <meshPhysicalMaterial transparent opacity={0.7} side={THREE.BackSide}/>
                    </Plane> 
                    <Plane args={[12,12]} rotation={[0,Math.PI/2,0]} position={[-6,0,6]} receiveShadow>
                        <meshPhysicalMaterial transparent opacity={0.7} />
                    </Plane> 
                    <Plane args={[12,12]} rotation={[0,Math.PI/2,0]} position={[6,0,6]} receiveShadow>
                        <meshPhysicalMaterial transparent opacity={0.7} side={THREE.BackSide}/>
                    </Plane> 
                </group>
                <group 
                    position={[0,0,6]}
                >
                    <Model {...modelProps} />
                    <Text position={[0,-3,0]}>
                        {text}
                    </Text>
                </group>
            </Box>
        </group>
    )
}

export default MenuItem