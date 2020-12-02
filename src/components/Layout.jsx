import { Flex, Box } from '@react-three/flex';
import { useRef, useEffect, Suspense } from 'react';
import { useFrame, useThree } from 'react-three-fiber';
import { useAspect } from '@react-three/drei'
import state from '../state';
import * as THREE from 'three';
import Text from './Text';
import AboutMenuItem from './AboutMenuItem'
import Model from './Model';
import Menu from './Menu'

const Layout = () => {
    const groupRef = useRef()
    const vec = new THREE.Vector3()
    useEffect(() => {
        window.scrollTo(0, 1)
        groupRef.current.position.lerp(vec.set(0,0,20),1)
    })
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
            <Menu width={width}/>
            <mesh position={[0, 0, 0.01]} receiveShadow >
                <planeBufferGeometry args={[vpWidth+5,vpHeight+5]} />
                <meshPhysicalMaterial color='white' />
            </mesh>
            <mesh position={[0, 0, -80]} receiveShadow >
                <planeBufferGeometry args={[vpWidth+50,vpHeight+50]} />
                <meshPhysicalMaterial color='aquamarine' />
            </mesh>
            <Suspense fallback={null}>
                <Model
                    path='/lowpoly_earth/scene.gltf'
                    scale={new Array(3).fill(0.04)}
                    position={[0,0,-40]}
                />
            </Suspense>
        </group>
    )
}

export default Layout;