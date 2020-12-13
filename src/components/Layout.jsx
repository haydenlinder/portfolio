import { Flex, Box } from '@react-three/flex'
import { useRef, useEffect } from 'react'
import { useFrame, useThree } from 'react-three-fiber'
import { useAspect } from '@react-three/drei'
import state from '../state'
import * as THREE from 'three'
import Menu from './Menu'
import About from './About'
import Projects from './Projects'
import Resume from './Resume'

const Layout = () => {
    const groupRef = useRef()
    const vec = new THREE.Vector3()
    const { size } = useThree();
    const [vpWidth, vpHeight] = useAspect("cover", size.width, size.height)
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
        state.vpHeight = vpHeight
        window.state = three
        groupRef.current.position.lerp(
            vec.set(0, state.top,0),
            0.1
        )
    })

    return (
        <group ref={groupRef}>
            <Flex 
            align='center'
            width={vpWidth} height={vpHeight} position={[-vpWidth/2,vpHeight/2,0]}>
                <Menu />
                <About />
                <Projects />
                <Resume />
            </Flex>
        </group>
    )
}

export default Layout;