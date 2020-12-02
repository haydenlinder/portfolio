import { Flex } from '@react-three/flex'
import AboutMenuItem from './AboutMenuItem'

const Menu = ({ width = 100 }) => {
    return(
        <Flex
            justify='space-around'
            dir='row'
            wrap='wrap'
            position={[-width / 2, 25, 3]}
            size={[width, 0, 0]}
        >
            <AboutMenuItem />
            <AboutMenuItem />
            <AboutMenuItem />
            <AboutMenuItem />
        </Flex>
    )
}

export default Menu