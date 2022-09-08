import { Flex, Box } from '@react-three/flex'
import Atom from './Atom'
import MenuItem from './MenuItem'
import ResumePaper from './ResumePaper'
import { useAspect } from '@react-three/drei'
import { useThree } from 'react-three-fiber'

const Menu = () => {
    const { size } = useThree();
    const [vpWidth, vpHeight] = useAspect("cover", size.width, size.height)
    return(
        <Box 
            width='100%'
            height='100%'
            align='center'
            justify='center'
        >
            <Box
                pr={7}
                pl={7}
                width='100%'
                height='auto'
                dir='row'
                wrap='wrap'
                align='center'
                justify='center'
            >
                <MenuItem 
                    spin={true}
                    text='About'
                    scrollTo={vpHeight}
                    modelProps={{
                        path:'/lowpoly_earth/scene.gltf',
                        scale: new Array(3).fill(0.02) 
                    }}
                />
                <MenuItem 
                    text='Projects'
                    scrollTo={vpHeight*2}
                >
                    <group scale={new Array(3).fill(2)}>
                        <Atom />
                    </group>
                </MenuItem>
                <MenuItem 
                    text='Resume'
                    scrollTo={vpHeight * 3}
                >
                    <group scale={new Array(3).fill(4)} position={[0,0.5,0]}>
                        <ResumePaper />
                    </group>
                </MenuItem>
                <MenuItem
                    text='Meet'
                    scrollTo={vpHeight * 4}
                    modelProps={{
                        path: '/calendar/scene.gltf',
                        scale: new Array(3).fill(1.75),
                        rotation: [0, 0, 0]
                    }}
                />
            </Box>
        </Box>
    )
}

export default Menu