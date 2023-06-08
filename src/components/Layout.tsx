import { Flex, Box } from '@react-three/flex'
import { useRef, useEffect } from 'react'
import { RootState, useFrame, useThree } from '@react-three/fiber'
import { useAspect } from '@react-three/drei'
import state from '../state'
import Menu from './Menu'
// import About from './About'
// import Projects from './Projects'
// import Resume from './Resume'
import { Group, Vector3 } from 'three'
// import Calendar from './Calendar'

declare global {
    interface Window { state: RootState; }
}

const Layout = () => {
    const groupRef = useRef<Group>(null)
    const vec = new Vector3()
    const { size } = useThree();
    const [vpWidth, vpHeight] = useAspect(size.width, size.height)
    useEffect(() => {
        window.scrollTo(0, 1)
    })
    useEffect(() => {
        if (!groupRef.current) return 
        groupRef.current.position.lerp(
            vec.set(0,0,20),
            1
            )   
        },[])
    useFrame(three => {
        if (!groupRef.current) return 
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
                {/* <About />
                <Projects />
                <Resume />
                <Calendar/> */}
            </Flex>
        </group>
    )
}

export default Layout;