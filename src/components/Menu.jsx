import { Flex, Box } from '@react-three/flex'
import AboutMenuItem from './AboutMenuItem'

const Menu = ({ width = 100, height = 50 }) => {
    return(
        <Flex
            justify='center'
            align='center'
            position={[-width / 2, height/2, 3]}
            size={[width, height, 0]}
        >
            <Box 
                width='auto'
                height='auto'
                dir='row'
                wrap='wrap'
                justify='space-around'
            >
                <AboutMenuItem />
                <AboutMenuItem />
                <AboutMenuItem />
                <AboutMenuItem />
            </Box>
        </Flex>
    )
}

export default Menu