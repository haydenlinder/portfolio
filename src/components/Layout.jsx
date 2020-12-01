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
    const width = Math.min(vpWidth - 10 , 80)

    return (
        <group ref={groupRef}>
            <Flex
                justify='space-around'
                dir='row'
                wrap='wrap'
                position={[-width/2,vpHeight/2-10, 3]}
                size={[width,0,0]}
            >
                <AboutMenuItem /> 
                <AboutMenuItem /> 
                <AboutMenuItem /> 
                <AboutMenuItem /> 
            </Flex>
            <mesh position={[0, 0, 0]} receiveShadow >
                <planeBufferGeometry args={[vpWidth+5,vpHeight+5]} />
                <meshPhysicalMaterial color='white' />
            </mesh>
            <mesh position={[0, 0, -80]} receiveShadow >
                <planeBufferGeometry args={[vpWidth+50,vpHeight+50]} />
                <meshPhysicalMaterial color='aquamarine' />
            </mesh>
        </group>
    )
}

export default Layout;