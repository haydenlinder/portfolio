import { Flex, Box } from '@react-three/flex';
import { useRef, useEffect } from 'react';
import { useFrame, useThree } from 'react-three-fiber';
import { useAspect } from '@react-three/drei'
import state from '../state';
import * as THREE from 'three';
import Menu from './Menu'
import About from './About'

const Layout = () => {
    const groupRef = useRef()
    const vec = new THREE.Vector3()
    useEffect(() => {
        window.scrollTo(0, 1)
    })
    useEffect(() => {
        groupRef.current.position.lerp(
            vec.set(0,0,20),
            1
        )

    },[])
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
            <Menu width={width} height={vpHeight}/>
            <About />
        </group>
    )
}

export default Layout;