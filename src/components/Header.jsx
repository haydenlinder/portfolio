import { useThree } from 'react-three-fiber';
import { useAspect } from '@react-three/drei';
import Text from './Text';
import { Box, Flex } from '@react-three/flex';

const Header = props => {
    const { size } = useThree();
    const [vpWidth] = useAspect("cover", size.width, size.height)
    const width = Math.min(vpWidth-10, 80)
    return (
        <Flex 
            size={[width]}
            position={[-width/2,35,0]}
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
                <Box centerAnchor>
                    <Text size={0.7}>
                        Web Developer
                    </Text>
                </Box>
            </Box>
            <Box centerAnchor>
                <Text>
                    Menu
                </Text>
            </Box>
        </Flex>
    )
}

export default Header