import { useThree } from 'react-three-fiber';
import { useAspect } from '@react-three/drei';
import Text from './Text';
import { Box } from '@react-three/flex';

const Header = props => {
    const { size } = useThree();
    const [vpWidth] = useAspect("cover", size.width, size.height)

    return (
        <group position={[0, 0, 4]}>
            <Box 
                width='90%'
                dir='row' 
                justify='space-between' 
                align='center'
            >
                <Box centerAnchor>
                    <Text>
                        HELLO
                    </Text>
                </Box>
                <Box centerAnchor>
                    <Text>
                        Hello
                    </Text>
                </Box>
            </Box>
            <mesh castShadow receiveShadow position={[vpWidth/2,0,-0.5]}>
                <boxBufferGeometry args={[vpWidth, 5, 1]} />
                <meshPhysicalMaterial color='white' />
            </mesh>
        </group>
    )
}

export default Header