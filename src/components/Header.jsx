import { useThree, useFrame } from 'react-three-fiber';
import { useAspect } from '@react-three/drei';
import Text from './Text';
import { Box, Flex } from '@react-three/flex';
import state from '../state'
import * as THREE from 'three'
import Bulb from './Bulb';
import { useRef } from 'react'

const Header = props => {
    const menuRef = useRef()
    const { size } = useThree();
    const [vpWidth] = useAspect("cover", size.width, size.height)
    const width = Math.min(vpWidth-10, 80)
    const vec = new THREE.Vector3()
    useFrame(() => {
        if (state.top === 0) menuRef.current.position.lerp(vec.set(0,0,-5), 0.1)
        else menuRef.current.position.lerp(vec.set(0,0,0), 0.1)
    })
    return (
        <Flex 
            size={[width]}
            position={[-width/2,33,-0.1]}
            dir='row' 
            justify='space-between' 
            align='center'
        >
            <Box align='center' height='auto'>
                <Box centerAnchor>
                    <Text>
                        Hayden Linder
                    </Text>
                </Box>
                <Bulb position={[9.5,-4,5]} 
                />
                <Box centerAnchor>
                    <Text size={0.7}>
                        Web Developer
                    </Text>
                </Box>
            </Box>
            <Box centerAnchor>
                <mesh 
                    ref={menuRef}
                    castShadow receiveShadow
                    onPointerDown={e => state.top = 0} 
                    onPointerEnter={e => e.object.scale.lerp(new THREE.Vector3(1.1,1.1,1.1),1)}
                    onPointerLeave={e => e.object.scale.lerp(new THREE.Vector3(1,1,1),1)}
                >
                    <boxBufferGeometry args={[10,4,0.5]}/>
                    <meshPhysicalMaterial color='blue'/>
                    <Text color='white' position={[0,0,0.5]}>
                        Menu
                    </Text>
                </mesh>
            </Box>
        </Flex>
    )
}

export default Header