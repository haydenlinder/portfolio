import { useThree } from 'react-three-fiber';
import { useAspect } from '@react-three/drei';
import Text from './Text';
import { Box, Flex } from '@react-three/flex';
import state from '../state'
import * as THREE from 'three'
import Bulb from './Bulb';

const Header = props => {
    const { size } = useThree();
    const [vpWidth] = useAspect("cover", size.width, size.height)
    const width = Math.min(vpWidth-10, 80)
    return (
        <Flex 
            size={[width]}
            position={[-width/2,30,0]}
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
                <Bulb position={[5,-3,1]}/>
                <Box centerAnchor>
                    <Text size={0.7}>
                        Web Developer
                    </Text>
                </Box>
            </Box>
            <Box centerAnchor>
                <mesh 
                    castShadow receiveShadow
                    onPointerDown={e => state.top = 0} 
                    onPointerEnter={e => e.object.scale.lerp(new THREE.Vector3(1.1,1.1,1.1),1)}
                    onPointerLeave={e => e.object.scale.lerp(new THREE.Vector3(1,1,1),1)}
                >
                    <boxBufferGeometry args={[10,4,0.05]}/>
                    <meshPhysicalMaterial color='blue'/>
                    <Text color='white'>
                        Menu
                    </Text>
                </mesh>
            </Box>
        </Flex>
    )
}

export default Header