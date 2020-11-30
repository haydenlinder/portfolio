import { Flex, Box } from '@react-three/flex';
import { useRef } from 'react';
import { useFrame, useThree } from 'react-three-fiber';
import { useAspect } from '@react-three/drei'
import state from '../state';
import * as THREE from 'three';
import Text from './Text';
import Header from './Header';

const Layout = () => {
    const groupRef = useRef()
    const vec = new THREE.Vector3()
    useFrame(three => {
        window.state = three
        groupRef.current.position.lerp(
            vec.set(0, state.top, 0),
            0.1
        )
    })

    const { size } = useThree();
    const [vpWidth, vpHeight] = useAspect("cover", size.width, size.height)

    return (
        <Flex
            align="center"
            position={[-(vpWidth-2)/2,vpHeight/2 - 5]}
            size={[vpWidth-2,0,1]}
        >
            <Header />
            <group ref={groupRef}>
                <Box centerAnchor margin={1} >
                    <mesh castShadow receiveShadow>
                        <torusBufferGeometry args={[1, 0.5, 10, 10]} />
                        <meshPhysicalMaterial color='green' />
                    </mesh>
                </Box>
                <Box width='auto' >
                    <Text>
                        Here is some content Here is some content Here is some content Here is some content Here is some content Here is some content 
                    </Text>
                </Box>
            </group>
        </Flex>
    )
}

export default Layout;