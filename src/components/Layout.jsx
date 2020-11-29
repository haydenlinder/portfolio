import { Flex, Box } from '@react-three/flex';
import { useRef } from 'react';
import { useFrame, useThree } from 'react-three-fiber';
import { useAspect } from '@react-three/drei'
import state from '../state';
import * as THREE from 'three';
import Text from './Text'

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

    const { size  } = useThree();
    const [vpWidth] = useAspect("cover", size.width, size.height)

    return (
        <group ref={groupRef}>
            <Flex
                mainAxis="x"
                crossAxis="y"
                flexDirection="row"
                flexWrap="wrap"
                justify="center"
                alignItems="center"
                position={[-vpWidth/2, 6]}
                size={[vpWidth,0,0]}
            >
                <Box centerAnchor>
                    <Text 
                        scale={new Array(3).fill(1)}
                    >
                        HELLO
                    </Text>
                </Box>
                <Box centerAnchor margin={0.3}>
                    <mesh castShadow receiveShadow>
                        <boxBufferGeometry args={[3, 1, 1]} />
                        <meshPhysicalMaterial color='blue' />
                    </mesh>
                </Box>
                <Box centerAnchor margin={0.3} >
                    <mesh castShadow receiveShadow>
                        <torusBufferGeometry args={[1, 0.5, 10, 10]} />
                        <meshPhysicalMaterial color='green' />
                    </mesh>
                </Box>
                <Box centerAnchor margin={0.3}>
                    <mesh castShadow receiveShadow>
                        <boxBufferGeometry args={[3, 1, 1]} />
                        <meshPhysicalMaterial color='blue' />
                    </mesh>
                </Box>
                <Box centerAnchor>
                    <Text 
                        scale={new Array(3).fill(1)}
                    >
                        HELLO
                    </Text>
                </Box>
                <Box centerAnchor margin={0.3}>
                    <mesh castShadow receiveShadow>
                        <boxBufferGeometry args={[3, 1, 1]} />
                        <meshPhysicalMaterial color='blue' />
                    </mesh>
                </Box>
                <Box centerAnchor margin={0.3} >
                    <mesh castShadow receiveShadow>
                        <torusBufferGeometry args={[1, 0.5, 10, 10]} />
                        <meshPhysicalMaterial color='green' />
                    </mesh>
                </Box>
                <Box centerAnchor margin={0.3}>
                    <mesh castShadow receiveShadow>
                        <boxBufferGeometry args={[3, 1, 1]} />
                        <meshPhysicalMaterial color='blue' />
                    </mesh>
                </Box>
                <Box centerAnchor>
                    <Text 
                        scale={new Array(3).fill(1)}
                    >
                        HELLO
                    </Text>
                </Box>
                <Box centerAnchor margin={0.3}>
                    <mesh castShadow receiveShadow>
                        <boxBufferGeometry args={[3, 1, 1]} />
                        <meshPhysicalMaterial color='blue' />
                    </mesh>
                </Box>
                <Box centerAnchor margin={0.3} >
                    <mesh castShadow receiveShadow>
                        <torusBufferGeometry args={[1, 0.5, 10, 10]} />
                        <meshPhysicalMaterial color='green' />
                    </mesh>
                </Box>
                <Box centerAnchor margin={0.3}>
                    <mesh castShadow receiveShadow>
                        <boxBufferGeometry args={[3, 1, 1]} />
                        <meshPhysicalMaterial color='blue' />
                    </mesh>
                </Box>
                <Box centerAnchor>
                    <Text 
                        scale={new Array(3).fill(1)}
                    >
                        HELLO
                    </Text>
                </Box>
                <Box centerAnchor margin={0.3}>
                    <mesh castShadow receiveShadow>
                        <boxBufferGeometry args={[3, 1, 1]} />
                        <meshPhysicalMaterial color='blue' />
                    </mesh>
                </Box>
                <Box centerAnchor margin={0.3} >
                    <mesh castShadow receiveShadow>
                        <torusBufferGeometry args={[1, 0.5, 10, 10]} />
                        <meshPhysicalMaterial color='green' />
                    </mesh>
                </Box>
                <Box centerAnchor margin={0.3}>
                    <mesh castShadow receiveShadow>
                        <boxBufferGeometry args={[3, 1, 1]} />
                        <meshPhysicalMaterial color='blue' />
                    </mesh>
                </Box>
            </Flex>
        </group>
    )
}

export default Layout;