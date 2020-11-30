import { Flex, Box } from '@react-three/flex';
import { useRef } from 'react';
import { useFrame, useThree } from 'react-three-fiber';
import { useAspect } from '@react-three/drei'
import state from '../state';
import * as THREE from 'three';
import Text from './Text';
import AboutMenuItem from './AboutMenuItem'

const Layout = () => {
    const groupRef = useRef()
    const vec = new THREE.Vector3()

    useFrame(three => {
        window.state = three
        groupRef.current.position.lerp(
            vec.set(0, 0, state.top),
            0.1
        )
    })

    const { size } = useThree();
    const [vpWidth, vpHeight] = useAspect("cover", size.width, size.height)
    return (
        <group ref={groupRef}>
            <Flex
                align="center"
                position={[-(vpWidth-2)/2,vpHeight/2 - 5]}
                size={[vpWidth-2,0,1]}
            >
                <AboutMenuItem /> 
            </Flex>
            <mesh position={[0, 0, -2]} receiveShadow >
                <planeBufferGeometry args={[vpWidth+5,vpHeight+5]} />
                <meshPhysicalMaterial color='white' />
            </mesh>
        </group>
    )
}

export default Layout;